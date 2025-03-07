import FilmesMenu from "./componets/FilmesMenu";
import VideosMenu from "./componets/VideosMenu";
import Destaque from "./componets/Destaque";

import "./App.css";
import video1 from "./videos/Capitão América_ Admirável Mundo Novo _ Trailer Oficial Dublado.mp4";
import video2 from "./videos/Sonic 3_ O Filme _ Trailer Oficial _ DUB _ Paramount Pictures Brasil.mp4";
import video3 from "./videos/Top Gun_ Maverick - Official Trailer (2022) - Paramount Pictures.mp4";


import { FaMagnifyingGlass } from "react-icons/fa6";

function App() {
  return (
    <div className="pai">
      <header>
        <div className="opcoes">
        <h1>Inicio</h1>   {/*ou colocar um <a/> */}
        <h1>Filmes </h1>
        <h1>Series</h1>
        <h1>Genêros</h1>
        <h1>Lançamentos</h1>
        </div>
        <div className="barra-pesquisa">
          <input className="barra" type="text" placeholder="Pesquisar" />
          <FaMagnifyingGlass className="lupa" />
        </div>
      </header>


      <div className="catalago-filmes">
        <div className="catalago-filme-itens">
          <div className="catalago-titulo">
            <h1 className="titulo-filme">Destaques do <strong>DuroFlix</strong></h1>

          </div>
          <div className="grid-filmes-lista">
            <FilmesMenu imagem="https://ingresso-a.akamaihd.net/img/cinema/cartaz/4238-cartaz.jpg" titulo="Insterstelar"
              descricao="2014" />
            <FilmesMenu imagem="https://m.media-amazon.com/images/S/pv-target-images/7cd370a13ad1e4dfbba635723a711f04e127310960ba50bdae159695fac6f5cc.jpg"
              titulo="Velozes e Furiosos 7" descricao="2015" />
            <FilmesMenu imagem="https://play-lh.googleusercontent.com/NOYLPClSgTjPL_Jht08Fsimw54HLIkhS1AgBNlxIwZ7csfSfAtg2bsjgseMNrGBzIT8mvYsyEMenCtrEV68=w240-h480-rw" titulo="Homem-Aranha: Sem Volta para Casa" descricao="2021" />
            <FilmesMenu imagem="https://upload.wikimedia.org/wikipedia/pt/6/68/The_Founder_poster.png" titulo="The Founder" descricao="2016" />
            <FilmesMenu imagem="https://br.web.img3.acsta.net/pictures/22/05/25/20/17/5781885.jpg"
              titulo="Arremessando Alto" descricao="2022" />
          </div>
          <div className="trailerSessao">
            <VideosMenu telas={video1} />
            <VideosMenu telas={video2} />
            <VideosMenu telas={video3} />

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
