
import VideosMenu from "./componets/VideosMenu";
import Header from "./componets/Header/header";
import Destaque from "./componets/Destaque";
import Carrosel4 from './componets/Carrosel4'


import MulherMaravilha from './imgs/mulher-maravilha.jpg'
import TopGun from './imgs/Top_Gun_Maverick.jpg'
import Milhoes from './imgs/km.jpg'
import Witch from './imgs/witch.webp'
import Sonic3 from './imgs/sonic3grande.webp'
import Tempestade from './imgs/tempestade.jpg'
import HomemAranha from './imgs/homem-aranha_59.jpg';

//dedstaques
import Guardiao from './imgs/guardians.jpg'
import Ultimato from './imgs/avengers.webp'
import CapitaoAmerica from './imgs/4k-captain.jpg'
import Mc from './imgs/mc.jpg'

import "./App.css";
import Carrossel from './componets/Carrossel'


const filmes = [
  {
    src: Ultimato,
    title: "Breaking Bad",
    description:
      "A transformação surpreendente de um professor de química em um impiedoso traficante."
  },
  {
    src: Mc,
    title: "Stranger Things",
    description:
      "Fenômenos sobrenaturais e segredos misteriosos transformam a pequena Hawkins."
  },
  {
    src: Milhoes,
    title: "Game of Thrones",
    description:
      "Intrigas intensas e batalhas épicas se desenrolam em um mundo repleto de dragões."
  },
  {
    src: Guardiao,
    title: "Black Mirror",
    description:
      "Histórias distópicas que exploram de forma impactante a tecnologia e seus efeitos."
  },
  {
    src: CapitaoAmerica,
    title: "Westworld",
    description:
      "Um parque futurista onde a inteligência artificial surpreendentemente ganha vida."
  },
  {
    src: HomemAranha,
    title: "Sonic 3",
    description:
      "Um ousado plano de assalto marcado por reviravoltas surpreendentes e imprevisíveis."
  },
];
const destaques = [
  {
    src: MulherMaravilha,
    title: "Breaking Bad",
    description:
      "A transformação surpreendente de um professor de química em um impiedoso traficante."
  },
  {
    src: Sonic3,
    title: "Stranger Things",
    description:
      "Fenômenos sobrenaturais e segredos misteriosos transformam a pequena Hawkins."
  },
  {
    src: Tempestade,
    title: "Game of Thrones",
    description:
      "Intrigas intensas e batalhas épicas se desenrolam em um mundo repleto de dragões."
  },
  {
    src: Witch,
    title: "Black Mirror",
    description:
      "Histórias distópicas que exploram de forma impactante a tecnologia e seus efeitos."
  },
  {
    src: TopGun,
    title: "Westworld",
    description:
      "Um parque futurista onde a inteligência artificial surpreendentemente ganha vida."
  },
  {
    src: Sonic3,
    title: "Gravidade",
    description:
      "Um ousado plano de assalto marcado por reviravoltas surpreendentes e imprevisíveis."
  },
];


function App() {
  return (
    <>

      <Header />
      <Carrossel/>
      <Carrosel4 videos={filmes} />
     

    </>

  );
}

export default App;
