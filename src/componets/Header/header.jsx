import sty from './style.module.css'
import { FaMagnifyingGlass } from "react-icons/fa6";

import Logo from '../../image/logo.png'
import LogoBranca from '../../image/DuroFlix.png'

export default function Header() {
   return(
    <header>
          <a href="" ><img src={LogoBranca} alt="" /></a>
         <div className={sty.barraPesquisa}>
        <input className={sty.barra} type="text" placeholder="Pesquisar" />
        <FaMagnifyingGlass className={sty.lupa} />
    </div>
    <div className={sty.opcoes}>
      
        <nav className={sty.bar}>
        <a href="">Inicio</a>
        <a href="">Filmes</a>
        <a href="">Series</a>
        <a href="">Genêros</a>
        <a href="">Lançamentos</a>
        </nav>
    </div>
   
</header>
   )
}