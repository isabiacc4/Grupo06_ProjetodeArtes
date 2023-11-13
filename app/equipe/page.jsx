'use client'

import Header from "@/components/Header";
import style  from "@/app/equipe/equipe.module.css";
import Link from "next/link";
import { useUserContext } from "@/context/user";

function Equipe(){
    const {user} = useUserContext(); 
    return(
<div> 
<Header></Header>
<nav className={style.nav}>


                <Link href="/renascimento" className={style.navelements}>
                    Renascimento
                </Link>
                <Link href="/barroco" className={style.navelements}>
                    Barroco
                </Link>
                <Link href="/romantismo" className={style.navelements}>
                    Romantismo
                </Link>
                <Link href="/neoclassicismo" className={style.navelements}>
                    Neoclassicismo
                </Link>
                <Link href="/rococo" className={style.navelements}>
                    Rococó
                </Link>
                <Link href="/realismo" className={style.navelements}>
                    Realismo
                </Link>
                <Link href="/impressionismo" className={style.navelements}>
                    Impressionismo
                </Link>
                <Link href="/abstracionismo" className={style.navelements}>
                    Abstracionismo
                </Link>
            </nav>
<br/>
<div>
        <p className="mensagem">Olá, {user.name}! </p>
      </div>
                     <section className={style.nome}>
                        <h1>EQUIPE</h1>
                     </section>

                    <br/>
                    <br/>
                    <section className={style.texto}>
                        <img className={style.img} src="/equipe.jpeg"></img>
                        <p className={style.text} align = "justify">Somos a equipe HAWKS de  Desenvolvimento de Sistemas, formado por 6 integrantes que se empenham para dar o melhor em todos os seus projetos. Esse é mais um trabalho desenvolvido com dedicação e carinho, esperamos que  todas as expectativas tenham sido superadas.</p>
                        <br/>
                        <br/>
                        <ul className={style.grupo}> 
                            <i>Integrantes do grupo: </i><br/>
                            <i>Rafael Andriotti Sampaio, Bianca Vieira Shutz, Gabrielly Isadora Amorim dos Santos, Isabela da Silva Biacca, Monise Barão  e Thais Martins Dunder.</i>
                        </ul>
                     </section>
                     <section className={style.baixo}></section>

                     <div className="footer" >
            <div>
                <img className="logo" src="logosenairedonda-removebg-preview.png"></img>
            </div>

            <div>
                <div className={style.t2}>
                    <h1>Desenvolvimento de Sistemas - SESI/SENAI </h1>
                </div>
                
            </div>
        </div>

</div>
    )
}

export default Equipe; 