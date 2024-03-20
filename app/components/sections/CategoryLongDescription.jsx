import styles from '~/styles/components/sections/categoryLongDescriptionn.module.css'

export default function CategoryLongDescription({ description }) {
    return (
        <div className={`${styles.categoryLongDescription} smallContainer`} dangerouslySetInnerHTML={{ __html: description }} />
    )
}