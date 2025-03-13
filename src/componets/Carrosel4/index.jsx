import sty from './style.module.css'


import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { useState } from 'react'
import FilmeMenu from '../FilmeMenu';

export default function Carrosel4({ videos }) {





    const [indice, setIndice] = useState(0);

    function proximaImagem() {
        let novoIndice = indice + 1
        if (novoIndice >= videos.length) {
            novoIndice = 0
        }
        setIndice(novoIndice)
    }
    function imagemAnterior() {
        let novoIndice = indice - 1
        if (novoIndice < 0) {
            novoIndice = videos.length - 1
        }
        setIndice(novoIndice)
    }

    function ajustarIndice(valor) {
        if (valor >= videos.length) {
            return valor - videos.length
        }
        return valor;

    }
    const item1 = videos[ajustarIndice(indice)]
    const item2 = videos[ajustarIndice(indice + 1)]
    const item3 = videos[ajustarIndice(indice + 2)]
    const item4 = videos[ajustarIndice(indice + 3)]


    return (
        <div className={sty.secaoCarrossel}>


            <div className={sty.carrossel}>
                <button onClick={imagemAnterior} className={sty.btnmover}>
                    <FaAngleLeft color='#fff ' size={40} />
                </button>
                <div className={sty.carrosselItens}>
                    <FilmeMenu imagem={item1.src} titulo={item1.title}
                        descricao={item1.description} />
                    <FilmeMenu imagem={item2.src} titulo={item2.title}
                        descricao={item2.description} />
                    <FilmeMenu imagem={item3.src} titulo={item3.title}
                        descricao={item3.description} />
                    <FilmeMenu imagem={item4.src} titulo={item4.title}
                        descricao={item4.description} />
                   
                </div>
                <button onClick={proximaImagem} className={sty.btnmover}>
                    <FaAngleRight color='#fff ' size={40} />
                </button>

            </div>

        </div>


    )
}