"use client"

import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";
import style from "../barroco/barroco.module.css";
import ImageGallery from "@/components/Barroco";
import { useUserContext } from "@/context/user";

const fotos1 = [
    { img: '/f1.png', text: "Moça com Brinco de Pérola - Johannes Vermeer, 1665: A obra retrata uma jovem mulher usando um turbante amarelo e um brinco de pérola, que se destaca como ponto central da composição. O fundo escuro realça a luminosidade do rosto da moça e a intensidade do brilho da pérola. A expressão misteriosa e o olhar direto da modelo capturam a atenção do observador, gerando especulações sobre a identidade e a história por trás da personagem. A habilidade técnica de Vermeer é evidente na representação detalhada da textura das roupas e na manipulação da luz, características que contribuíram para a reputação duradoura da obra como uma das mais icônicas da história da arte." },
    { img: '/f2.png', text: "A Lição de Anatomia do Dr. Tulp - Rembrandt, 1632: Retrata uma dissecação conduzida pelo médico Dr. Tulp em Amsterdã. No centro, Dr. Tulp realiza a dissecação enquanto outros observam. A obra destaca-se pela habilidade de Rembrandt em manipular luz e sombra, criando uma atmosfera dramática. A representação realista do corpo e as expressões dos observadores contribuem para a significância da pintura, tanto artisticamente quanto historicamente, documentando a prática médica do século XVII." },
    { img: '/f3.png', text: "Vocação de São Mateus - Caravaggio, 1600: A pintura retrata o momento em que Jesus chama São Mateus para segui-Lo. Caravaggio utiliza seu característico chiaroscuro, destacando intensamente a figura de Cristo em meio a sombras profundas. A expressividade das figuras, a representação realista e a abordagem inovadora tornam a obra uma representação poderosa da transformação espiritual de São Mateus e destacam o talento de Caravaggio no Barroco italiano." },
]

const fotos2 = [
    { img: '/f4.png', text: "A Ceia de Emaús - Caravaggio, 1601: Retrata o momento em que Jesus ressuscitado é reconhecido pelos discípulos durante uma refeição em Emaús. A luz intensa destaca o rosto de Cristo, enquanto as expressões surpresas dos discípulos refletem a revelação. Caravaggio utiliza o chiaroscuro para criar dramaticidade, e a atenção aos detalhes e a representação naturalista contribuem para a notoriedade da obra. A Ceia em Emaús é uma obra-prima do Barroco, exemplificando o estilo inovador e impactante de Caravaggio." },
    { img: '/f5.png', text: "São Jerônimo - Caravaggio, 1605: Retrata o santo em seu estudo no deserto, imerso na meditação e na tradução da Bíblia. São Jerônimo, vestido em trajes de penitência, é representado de forma introspectiva, enquanto um leão repousa ao seu lado. A pintura destaca-se pela atmosfera contemplativa, detalhes ricos e pela maestria técnica de Leonardo na manipulação de luz e sombra. A cena visualmente evoca a busca espiritual e a devoção cristã." },
    { img: '/f6.png', text: "A adoração dos pastores - Annibale Carracci, 1611 - 1612: É um tema religioso representando a visita dos pastores ao recém-nascido Jesus para adorá-Lo, conforme descrito na Bíblia. Diversos artistas interpretaram essa cena ao longo da história. Na obra de Rembrandt, pintada em 1646, a ênfase está na humildade do encontro, com iluminação suave e expressões marcantes dos pastores. A cena destaca a reverência e o maravilhamento diante do recém-nascido, capturando a simplicidade e a importância desse evento na tradição cristã. " },

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
<br></br>
            <div>
        <p className="mensagem">Olá, {user.name}! </p>
      </div>


            <section className={style.nome}>
                <h1>BARROCO</h1>
            </section>
            <br />
            <br />
            <br />
            <br />


            <section className={style.texto} align="justify">
                <p>O movimento artístico Barroco floresceu entre os séculos XVI e XVIII na Europa, dividindo-se em duas vertentes principais: o Barroco Católico e o Barroco Protestante. O Barroco Católico, influenciado pela Igreja Católica, caracterizou-se por sua arquitetura grandiosa, ornamentos detalhados e obras de arte dramáticas, retratando temas religiosos. O Barroco Protestante, por sua vez, teve uma estética mais austera e funcional, refletindo os valores da Reforma Protestante. Ambas as vertentes apresentaram expressões artísticas diversificadas, como pintura, escultura e música, que deixaram um legado significativo na cultura europeia.</p>
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
            





            </div>
            <p></p>
            <Footer></Footer>
        </div>
    )
}

export default Corpo