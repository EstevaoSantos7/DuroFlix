import styles from './style.module.css';

export default function FilmeMenu({ imagem, titulo ,descricao}) {
    return (
        <div className={styles.sessaoFilme}>
            <img src={imagem} alt="Capa do filme" />
            <h3 className={styles.titulos}>{titulo}</h3>
            <p className={styles.descricaoFilme}>{descricao}</p>
        </div>

    )
}