import { SITEMAP_QUERY } from '../graphql/storefrontClient/SitemapXmlQuery';
import { flattenConnection } from '@shopify/hydrogen';
import invariant from 'tiny-invariant';

const MAX_URLS = 250; // the google limit is 50K, however, SF API only allow querying for 250 resources each time

export async function loader({ request, context }) {
    const data = await context.storefront.query(SITEMAP_QUERY, {
        variables: {
            urlLimits: MAX_URLS,
            language: context.storefront.i18n.language,
        },
    });

    invariant(data, 'Sitemap data is missing');

    return new Response(
        shopSitemap({ data, baseUrl: new URL(request.url).origin }),
        {
            headers: {
                'content-type': 'application/xml',
                // Cache for 24 hours
                'cache-control': `max-age=${60 * 60 * 24}`,
            },
        },
    );
}

function xmlEncode(string) {
    return string.replace(/[&<>'"]/g, (char) => `&#${char.charCodeAt(0)};`);
}

function shopSitemap({ data, baseUrl }) {

    const productsData = flattenConnection(data.products)
        .map((product) => {
            const url = `${baseUrl}/products/${xmlEncode(product.handle)}`;

            const finalObject = {
                url,
                lastMod: product.updatedAt,
                changeFreq: 'daily',
            };

            if (product.featuredImage?.url) {
                finalObject.image = {
                    url: xmlEncode(product.featuredImage.url),
                };

                if (product.title) {
                    finalObject.image.title = xmlEncode(product.title);
                }

                if (product.featuredImage.altText) {
                    finalObject.image.caption = xmlEncode(product.featuredImage.altText);
                }
            }

            return finalObject;
        });

    const collectionsData = flattenConnection(data.collections)
        .map((collection) => {
            const url = `${baseUrl}/collections/${collection.handle}`;

            return {
                url,
                lastMod: collection.updatedAt,
                changeFreq: 'daily',
            };
        });

    const staticPagesData = [
        {
            url: `${baseUrl}/produkty`,
            lastMod: new Date().toISOString(),
            changeFreq: 'daily',
        },
        {
            url: `${baseUrl}/wzory`,
            lastMod: new Date().toISOString(),
            changeFreq: 'daily',
        },
        {
            url: `${baseUrl}/pomoc`,
            lastMod: new Date().toISOString(),
            changeFreq: 'monthly',
        },
        {
            url: `${baseUrl}/dostawa`,
            lastMod: new Date().toISOString(),
            changeFreq: 'monthly',
        },
        {
            url: `${baseUrl}/dsa-warunki-korzystania-ze-strony-internetowej`,
            lastMod: new Date().toISOString(),
            changeFreq: 'monthly',
        },
        {
            url: `${baseUrl}/polityka-prywatnosci`,
            lastMod: new Date().toISOString(),
            changeFreq: 'monthly',
        },
        {
            url: `${baseUrl}/regulamin`,
            lastMod: new Date().toISOString(),
            changeFreq: 'monthly',
        },
        {
            url: `${baseUrl}/regulamin-konta`,
            lastMod: new Date().toISOString(),
            changeFreq: 'monthly',
        },
        {
            url: `${baseUrl}/regulamin-newsletter`,
            lastMod: new Date().toISOString(),
            changeFreq: 'monthly',
        },
        {
            url: `${baseUrl}/blog`,
            lastMod: new Date().toISOString(),
            changeFreq: 'daily',
        },
    ]

    const urlsDatas = [...productsData, ...collectionsData, ...staticPagesData];

    return `
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    >
      ${urlsDatas.map((url) => renderUrlTag(url)).join('')}
    </urlset>`;
}

function renderUrlTag({
    url,
    lastMod,
    changeFreq,
    image,
}) {
    return `
    <url>
      <loc>${url}</loc>
      <lastmod>${lastMod}</lastmod>
      <changefreq>${changeFreq}</changefreq>
      ${image
            ? `
        <image:image>
          <image:loc>${image.url}</image:loc>
          <image:title>${image.title ?? ''}</image:title>
          <image:caption>${image.caption ?? ''}</image:caption>
        </image:image>`
            : ''
        }

    </url>
  `;
}
