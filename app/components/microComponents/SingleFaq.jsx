import styles from '~/styles/components/microComponents/singleFaq.module.css'

export default function SingleFaq({ question, answer, id }) {
    return (
        <div id={id} className={styles.SingleFaq}>
            <label className={styles.iconHolder}>
                <input type="checkbox" />
                <span className={styles.icon} />
            </label>
            <div className={styles.content}>
                <h3>{question}</h3>
                <p dangerouslySetInnerHTML={{ __html: answer }} />
            </div>
        </div>
    )
}