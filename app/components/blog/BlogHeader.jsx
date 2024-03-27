import BlogContents from './BlogContents'
import styles from '~/styles/components/blogComponents.module.css'

export default function BlogHeader({ title, description, blogContents }) {
    return (
        <header className={styles.blogHeader}>
            <h1 dangerouslySetInnerHTML={{ __html: title }} />
            <p dangerouslySetInnerHTML={{ __html: description }} />
            <BlogContents items={blogContents} />
        </header>
    )
}