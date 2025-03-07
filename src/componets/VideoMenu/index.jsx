import styles from './style.module.css'

export default function VideoMenu({ video }) {
    return (
        <div className={styles.videos}>
            <video className={styles.trailer} controls>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}