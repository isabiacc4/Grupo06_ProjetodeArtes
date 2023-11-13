"use client"

import Footer from "@/components/footer";
import Header from "@/components/header";
import style from "@/app/renascimento/renascimento.module.css";
import Link from "next/link";
import ImageGallery from "@/components/renascimento";
import { useUserContext} from "@/context/user";


const fotos1 = [
    { img: '/escoladeatenas.jpeg', text: "A Escola de Atenas é uma pintura de Rafael Sanzio, criada entre 1509 e 1511. Localizada no Vaticano, a obra retrata grandes filósofos gregos reunidos em um ambiente arquitetônico grandioso. Destacam-se Platão e Aristóteles no centro, simbolizando a dualidade entre ideias e observação, respectivamente. A pintura celebra a filosofia, representando figuras ilustres e enfatizando as diferentes abordagens intelectuais na busca pelo conhecimento." },
    { img: '/asantaceia.jpg', text: " A Santa Ceia é uma pintura icônica de Leonardo da Vinci, concluída por volta de 1498. Representa o momento da última ceia de Jesus com seus discípulos, conforme descrito nos evangelhos. A cena destaca a reação dos apóstolos ao ouvir Jesus anunciar a traição iminente. A obra é conhecida por sua composição inovadora, expressões detalhadas e uso magistral da perspectiva, capturando a intensidade emocional do momento." },
    { img: '/Acriaçãodeadão.jpeg', text: "A Criação de Adão é uma famosa pintura de Michelangelo que faz parte do teto da Capela Sistina, no Vaticano. Criada entre 1508 e 1512, a obra retrata o momento bíblico em que Deus dá vida a Adão, estendendo o dedo para tocá-lo. A composição destaca a conexão entre Deus e a humanidade, enfatizando a energia divina transmitida para o primeiro homem." },
]

const fotos2 = [
    { img: '/monalisa.png', text: "A Mona Lisa é uma famosa pintura de Leonardo da Vinci, concluída por volta de 1506. Retrata uma mulher de sorriso enigmático, Lisa Gherardini. A obra é conhecida por sua técnica refinada, uso sutil de sombras e atmosfera misteriosa. O olhar da figura central parece seguir o observador, criando um senso de intimidade. A Mona Lisa é um ícone da arte renascentista, notável pela fusão da realidade e idealização estética." },
    { img: '/onascimentodevenus.png', text: "O Nascimento de Vênus é uma obra-prima de Sandro Botticelli, criada por volta de 1484-1486. A pintura retrata Vênus, deusa romana do amor, emergindo do mar em uma concha. A figura feminina é celebrada por graciosas Horas, enquanto Zéfiro a empurra suavemente em direção à terra. A obra é conhecida por suas linhas elegantes, cores suaves e representação simbólica do renascimento clássico. O Nascimento de Vênus é um exemplo marcante da arte renascentista italiana." },
    { img: '/salvatormundi.png', text: "Salvator Mundi é uma pintura atribuída a Leonardo da Vinci, datando por volta de 1500. Representa Jesus Cristo como Salvador do Mundo, com uma esfera de cristal em uma mão e a outra levantada em bênção. A obra destaca a maestria de Leonardo na representação detalhada, especialmente nas características faciais e na esfera transparente. Notável por seu realismo e iluminação, Salvator Mundi  foi redescoberto no século XXI e tornou-se uma das pinturas mais caras já vendidas em leilão." },

]



function Corpo() {
    const {user} = useUserContext();
    return (
        <div>
            <Header></Header>

            <nav className={style.nav}>


                <Link href="/rococo" className={style.navelements}>
                    Rococó
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
                <h1>RENASCIMENTO</h1>
            </section>
            <br />
            <br />
            <br />
            <br />


            <section className={style.texto} align="justify">
                <p>O Renascimento foi um movimento cultural, artístico e intelectual que floresceu na Europa entre os séculos XIV e XVI e teve um impacto duradouro nas artes, na ciência e na cultura ocidental, marcando o início da transição da Idade Média para a Idade Moderna.
Algumas características essenciais do Renascimento são:
<p>Redescoberta da Antiguidade</p>
<p>Humanismo</p>
<p>Artes plásticas</p>
<p>Literatura</p>
<p>Avanços científicos</p>
<p>Expansão geográfica</p>

</p>
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
                    <iframe width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/2Yl6wpt_q_8?si=13_XAL5zDYZcYF0i" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </p>
                </section>





            </div>
            <p></p>
            <Footer></Footer>
        </div>
    )
}

export default Corpo;