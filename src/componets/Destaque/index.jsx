import styles from "./style.module.css"
import videoPrincipal from "./Superman l Trailer Teaser Oficial Dublado.mp4"
export default function ({ video }) {
    return (
        <div>
            <video >
                <source src={videoPrincipal} type="video/mp4" />
            </video>
            <div>
                <div className="sinopse">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat necessitatibus officiis sed,
                    placeat dolores voluptatem ab inventore dolorum eum modi sint impedit corporis quod eos. Quibusdam aspernatur iure quasi esse.
                </div>
                <img src="" alt="" />

            </div>
        </div>

    )
}