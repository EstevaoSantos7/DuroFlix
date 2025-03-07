import styles from "./style.module.css"
export default function ({ telas }) {
    return (
        <div className={styles.videos}>
            <video className={styles.trailer} controls>
                <source  src={telas} type="video/mp4" />
            </video>
        </div>


    )
}