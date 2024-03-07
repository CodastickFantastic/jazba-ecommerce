import styles from '~/styles/components/sections/CategoryLongDescription.module.css'

export default function CategoryLongDescription({ h2, description }) {
    return (
        <div className={`${styles.categoryLongDescription} smallContainer`}>
            <h2>{h2}</h2>
            <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    )
}