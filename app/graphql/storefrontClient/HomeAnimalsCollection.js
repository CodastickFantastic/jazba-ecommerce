export const HOME_ANIMALS_COLLECTION = `#graphql
query CollectionsToShowOnHome {
	al_rancher: collection(handle: "al-rancher") {
    id
	title
    handle
    image{
        altText
        url
    }
  }
  
	dali_gator: collection(handle: "dali-gator") {
    id
	title
    handle
    image{
        altText
        url
    }
  }
}`