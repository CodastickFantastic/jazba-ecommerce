import styles from '~/styles/components/microComponents/singleFaq.module.css'

export default function SingleFaq({ question, answer, id, open = false }) {
    return (
        <div id={id} className={styles.SingleFaq}>
            <label className={styles.iconHolder}>
                <input type="checkbox" defaultChecked={open} />
                <span className={styles.icon} />
            </label>
            <div className={styles.content}>
                <h2>{question}</h2>
                <p dangerouslySetInnerHTML={{ __html: answer }} />
            </div>
        </div>
    )
}