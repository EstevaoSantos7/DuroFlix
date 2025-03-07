import FilmeMenu from '../FilmeMenu';
import styles from './style.module.css';


export default function FilmesMenu() {
  return (
    <div className={styles.catalagoFilmes}>
      <div className={styles.catalagoFilmeItens}>
        <div className={styles.catalagoTitulo}>
          <h1 className={styles.tituloFilme}>Destaques do <strong>DuroFlix</strong></h1>

        </div>
        <div className={styles.gridFilmesLista}>
          <FilmeMenu imagem="https://ingresso-a.akamaihd.net/img/cinema/cartaz/4238-cartaz.jpg" titulo="Insterstelar"
            descricao="2014" />
          <FilmeMenu imagem="https://m.media-amazon.com/images/S/pv-target-images/7cd370a13ad1e4dfbba635723a711f04e127310960ba50bdae159695fac6f5cc.jpg"
            titulo="Velozes e Furiosos 7" descricao="2015" />
          <FilmeMenu imagem="https://play-lh.googleusercontent.com/NOYLPClSgTjPL_Jht08Fsimw54HLIkhS1AgBNlxIwZ7csfSfAtg2bsjgseMNrGBzIT8mvYsyEMenCtrEV68=w240-h480-rw" titulo="Homem-Aranha: Sem Volta para Casa" descricao="2021" />
          <FilmeMenu imagem="https://upload.wikimedia.org/wikipedia/pt/6/68/The_Founder_poster.png" titulo="The Founder" descricao="2016" />
          <FilmeMenu imagem="https://br.web.img3.acsta.net/pictures/22/05/25/20/17/5781885.jpg"
            titulo="Arremessando Alto" descricao="2022" />
        </div>
      </div>
    </div>
  )
}