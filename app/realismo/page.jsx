"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import style from "@/app/realismo/realismo.module.css";
import Link from "next/link";
import ImageGallery from "@/components/Realismo";
import { useUserContext } from "@/context/user";


const fotos1 = [
    { img: '/ft1.png', text: "Café no Jardim - Daniel Ridgway Knight, 1890: A pintura retrata um grupo de figuras em um jardim, desfrutando de um momento de lazer enquanto consomem café. A técnica contribui para a atmosfera relaxada da cena, enquanto as pinceladas soltas e as cores vibrantes capturam a luz e a vivacidade do momento. A obra é um exemplo marcante da transição do Realismo para o Impressionismo na arte do século XIX." },
    { img: '/ft2.png', text: "Angelus - Jean-François Millet, 1857: A cena retrata um casal de camponeses em pé no campo, interrompendo seu trabalho para rezar ao som do sino da igreja ao fundo. A composição simples, mas poderosa, evoca uma atmosfera de devoção e reflexão. Millet, conhecido por suas representações realistas da vida rural, captura a dignidade e a espiritualidade da vida camponesa. A luz suave e a paleta de cores terrosas contribuem para a serenidade da cena. Considerada uma obra emblemática do Realismo e representa o compromisso de Millet em dignificar o trabalho e a vida simples. " },
    { img: '/ft3.png', text: "Ceifeiros - Julien Dupré, 1887: a cena retrata camponeses ceifando trigo no campo. Dupré, conhecido por suas representações naturalistas da vida rural, captura o realismo das atividades agrícolas. A composição enfatiza a fisicalidade do trabalho árduo, com os ceifeiros curvados em ação. A luz natural destaca as figuras e a paisagem, contribuindo para a atmosfera autêntica da cena. A obra reflete a preocupação do Realismo em representar a vida cotidiana e a dignidade do trabalho, destacando a importância da agricultura na sociedade do século XIX. " },
]

const fotos2 = [
    { img: '/ft4.png', text: "Vista do lago Léman - Gustave Courbet, 1860: A pintura retrata uma paisagem serena e majestosa do Lago Léman, localizado entre a França e a Suíça. Courbet utiliza pinceladas largas e cores vibrantes para capturar a beleza natural do cenário. A obra transmite uma sensação de tranquilidade e imersão na natureza, convidando o espectador a apreciar a grandiosidade do ambiente. É um exemplo do estilo realista de Courbet, que buscava retratar a realidade de forma fiel e direta. " },
    { img: '/ft5.png', text: "Veneza Azul - Édouard Manet, 1874: A pintura retrata uma cena noturna em Veneza, com os icônicos canais e gôndolas iluminados por uma luz azul suave. Manet utiliza pinceladas soltas e cores intensas para criar uma atmosfera misteriosa e evocativa. A obra transmite uma sensação de tranquilidade e encanto, convidando o espectador a se perder nas ruas estreitas e nos reflexos das águas venezianas. É um exemplo do estilo impressionista de Manet, que buscava capturar as impressões visuais e emocionais do momento." },
    { img: '/ft6.png', text: "A Corrente do Golfo - Winslow Home, 1889: A pintura retrata uma cena marítima com um barco à vela navegando em meio a ondas agitadas. Homer utiliza pinceladas precisas e cores vivas para transmitir a força e a energia da natureza. A obra representa a famosa corrente oceânica chamada de Corrente do Golfo, que influencia o clima e as condições marítimas na região. É um exemplo do estilo realista de Homer, que buscava retratar com precisão os elementos naturais e as experiências humanas relacionadas ao mar. " },

]



function Corpo() {
    const {user} = useUserContext(); 
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
                <Link href="/neoclassicismo" className={style.navelements}>
                    Romantismo
                </Link>
                <Link href="/rococo" className={style.navelements}>
                    Neoclassicismo
                </Link>
                <Link href="/realismo" className={style.navelements}>
                    Rococó
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
                <h1>REALISMO</h1>
            </section>
            <br />
            <br />
            <br />
            <br />


            <section className={style.texto} align="justify">
                <p>Foi uma manifestação cultural significou um olhar mais realista e objetivo sobre a existência e as relações humanas, surgindo como oposição ao romantismo e sua visão idealizada da vida
Na arte realista predominam temas do cotidiano. Os artistas se ocupam em retratar as pessoas como aparentam, sem idealizações.
Dessa forma, por conta do amadurecimento da industrialização e da crescente desigualdade e pobreza, os trabalhadores serão assunto de destaque.</p>
            </section>
            <br />
            <br />
            <br />

            <br />
            <br />

            <br />
            <br />
            <div>



                
                <br></br>
                <br></br>

                <ImageGallery fotos={fotos1} />

                <ImageGallery fotos={fotos2} />

                <br></br>
                

                <section className={style.textoV}>
                    <h1>Vídeo explicativo</h1>
                </section>

                <section className={style.video}>
                    <p>
                        <iframe
                            width="760"
                            height="500"
                            src="\realismo.mp4"
                            title="Vídeo explicativo sobre o movimento artístico Realismo"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </p>
                </section>





            </div>
            <p></p>
            <Footer></Footer>
        </div>
    )
}

export default Corpo;