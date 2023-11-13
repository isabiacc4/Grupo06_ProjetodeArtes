"use client"

import Footer from "@/components/footer";
import Header from "@/components/header";
import style from "@/app/rococo/rococo.module.css";
import Link from "next/link";
import ImageGallery from "@/components/rococo";
import { useUserContext } from "@/context/user";


const fotos1 = [
    { img: '/balanco.jpg', text: "O Balanço - Jean Fragonard, 1767: O Balanço é uma famosa pintura de Jean-Honoré Fragonard, criada em 1767. A obra retrata uma cena idílica de uma mulher em um balanço no jardim, enquanto um homem a observa por baixo, escondido na vegetação. A pintura captura uma atmosfera de romance e sensualidade, representando a elegância e a coqueteria da aristocracia francesa do século XVIII. A pintura é notável por suas cores suaves, acentos de rosa e verde, e pela expressão da sensualidade inerente à época do Rococó. É uma representação icônica da estética e do estilo desse período." },
    { img: '/alegoria.jpg', text: "  Alegoria da Música - François Boucher, 1764:Alegoria da Música é uma pintura de François Boucher criada em 1764. A obra é uma representação típica do estilo rococó e mostra uma cena alegórica relacionada à música. No centro da composição, vemos uma figura feminina, provavelmente uma musa, segurando uma partitura e tocando um instrumento musical. Ela é cercada por várias figuras mitológicas e instrumentos musicais, criando uma atmosfera de celebração da música e da arte. A pintura é caracterizada pela paleta de cores suaves e pela ênfase na graciosidade e na sensualidade, características distintivas do rococó. Alegoria da Música é uma representação encantadora e decorativa que reflete a estética da época." },
    { img: '/cancao.jpg', text: "La Gamme d'Amour - Jean-Antoine Watteau, 1717:La Gamme d'Amour é uma pintura de Jean-Antoine Watteau, criada em 1717. Ela retrata um cenário bucólico onde uma jovem mulher toca uma viola de gamba, enquanto um jovem a observa com carinho. A obra faz parte do gênero fête galante, típico do rococó, representando cenas elegantes da alta sociedade, com música e amor no campo. Watteau captura a atmosfera de um encontro romântico com paleta de cores suaves e atenção aos detalhes nas vestimentas e paisagem. La Gamme d Amour é uma celebração do amor, da música e da fantasia, refletindo o estilo gracioso e poético do artista. " },
]

const fotos2 = [
    { img: '/apolo.jpg', text: " Apolo e Duas Musas - Pompeo Batoni, 1741: Apolo e Duas Musas é uma pintura de Pompeo Batoni, criada em 1741. A obra retrata Apolo, o deus grego da música e da poesia, cercado por duas musas, Clio e Erato. Apolo segura uma lira e é representado como o patrono das artes. A pintura é um exemplo do estilo neoclássico, com seu foco na representação idealizada da mitologia e na busca pela beleza e harmonia. Apolo e Duas Musas reflete a influência da antiguidade clássica no período neoclássico, com ênfase na razão, ordem e equilíbrio, características marcantes desse estilo artístico." },
    { img: '/menino.jpg', text: "Menino com Colete Vermelho - Jean-Baptiste Greuze 1775: Menino com Colete Vermelho é uma pintura de Jean-Baptiste Greuze, criada em 1775, que retrata um jovem com um colete vermelho e expressão séria. A obra destaca a riqueza de detalhes e cores na vestimenta, refletindo o estilo naturalista e emocional do artista, que se concentra na representação da autenticidade e da expressão humana, especialmente na infância. É um exemplo do talento de Greuze em retratar a individualidade e a humanidade em seus retratos." },
    { img: '/basilica.jpg', text: "Interior da Basílica São Pedro Giovanni - Paolo Panini 1757: Interior da Basílica de São Pedro é uma pintura de Giovanni Paolo Panini, finalizada em 1757. Ela retrata o suntuoso interior da Basílica de São Pedro, em Roma, com detalhes precisos da arquitetura e da decoração da igreja. A obra destaca a habilidade de Panini em criar representações realistas de espaços interiores e exteriores. É uma celebração da grandiosidade arquitetônica e uma expressão da riqueza artística do período barroco em Roma" },

]



function Corpo() {
    const { user } = useUserContext();
    return (
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

            <br></br>
            <br></br>
            <div>
                <p className="mensagem">Olá, {user.name}! </p>
            </div>





            <section className={style.nome}>
                <h1>ROCOCÓ</h1>
            </section>
            <br />
            <br />
            <br />
            <br />


            <section className={style.texto} align="justify">
                <p>O Rococó na pintura foi um estilo artístico que surgiu no século XVIII, particularmente na França, e é conhecido por sua ênfase na graça, delicadeza e detalhes ornamentais. Caracterizou-se por cenas pastorais, temas mitológicos, retratos elegantes e interiores requintados. Os pintores rococós frequentemente usavam cores suaves, curvas graciosas e elementos decorativos extravagantes. François Boucher e Jean-Honoré Fragonard são dois dos artistas mais representativos desse período. O Rococó refletia o gosto da aristocracia e da nobreza da época, buscando escapar da seriedade do Barroco. Esse estilo influenciou não apenas a pintura, mas também a arquitetura e as artes decorativas, tornando-se um marco importante na história da arte do século XVIII.</p>
            </section>
            <br />
            <br />
            <br />

            <br />
            <br />

            <br />
            <br />
            <div>







                <ImageGallery fotos={fotos1} />

                <ImageGallery fotos={fotos2} />

                <br></br>
                <br></br>

                <section className={style.textoV}>
                    <h1>Vídeo explicativo</h1>
                </section>

                <section className={style.video}>
                    <p>
                        <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/r_d0ycW_9zE?si=j8mqwf0CsYrIo94P" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>

                        </iframe>
                    </p>
                </section>






            </div>
            <p></p>
            <Footer></Footer>
        </div>
    )
}

export default Corpo;