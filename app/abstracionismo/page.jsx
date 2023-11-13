"use client"

import Header from "@/components/header";
import Link from "next/link";
import Footer from "@/components/footer";
import style from "../abstracionismo/abstracionismo.module.css";
import ImageGallery from "@/components/Abstracionismo";
import {useUserContext} from "@/context/user";

const fotos1 = [
    { img: '/f7.png', text: "Composição VIII - Wassily Kandinsky, 1923: Na obra, Kandinsky utiliza formas geométricas, linhas dinâmicas e cores vibrantes para expressar emoções e conceitos de maneira não figurativa. A composição apresenta uma variedade de elementos abstratos, como círculos, linhas diagonais e retângulos, dispostos de forma a criar uma imagem visualmente complexa e dinâmica. A escolha cuidadosa de cores desempenha um papel crucial na transmissão de energia e emoção. Composição VIII é um exemplo notável do estilo abstrato de Kandinsky, refletindo sua busca por uma linguagem visual universal e a capacidade da arte abstrata de evocar respostas emocionais profundas." },
    { img: '/f8.png', text: "Composição com vermelho, azul e amarelo - Piet Mondrian, 1930: A tela apresenta uma grade retangular de linhas pretas horizontais e verticais, formando quadrados e retângulos, preenchidos com áreas de vermelho, azul e amarelo. Essa abordagem abstrata e geométrica reflete a busca de Mondrian por uma expressão artística universal, baseada em formas puras e cores primárias. A Composição com Vermelho, Azul e Amarelo é um exemplo marcante do trabalho de Mondrian e representa a simplicidade e harmonia da estética neoplástica.  " },
    { img: '/f9.png', text: "Insula Dulcamara - Paul Klee, 1938: A obra Insula Dulcamara de Paul Klee é uma pintura abstrata que retrata uma paisagem imaginária com formas geométricas e cores vibrantes, criando uma atmosfera enigmática e fantasiosa. " },
]

const fotos2 = [
    { img: '/f10.png', text: "O ouro do firmamento - Joan Miró, 1967: É uma obra literária que combina elementos de ficção científica e fantasia. A história se passa em um universo futurista, onde a humanidade descobre a existência de um metal precioso chamado ouro do firmamento, capaz de conceder poderes extraordinários. A trama acompanha a jornada de um grupo de personagens em busca desse tesouro, enfrentando desafios, perigos e revelações surpreendentes ao longo do caminho. Com uma narrativa envolvente e personagens cativantes, a obra explora temas como amizade, coragem e os limites da ambição humana. " },
    { img: '/f11.png', text: "Counter-Composition VI - Theo van Doesburg, 1925: Essa pintura, concluída em 1925, faz parte de uma série de obras de Kandinsky que exploram a abstração geométrica. Em Counter-Composition VI, encontrará formas e linhas que se entrelaçam de maneiras complexas e expressivas, sem representação direta de objetos reconhecíveis. O título sugere uma reação ou resposta a composições anteriores de Kandinsky, indicando um diálogo contínuo e uma evolução em seu estilo artístico." },
    { img: '/f12.png', text: "Amarelo-Vermelho-Azul - Wassily Kandinsky, 1925: É uma pintura abstrata criada pelo renomado artista russo Wassily Kandinsky. Datada de 1925, esta obra exemplifica o estilo distinto do artista, caracterizado por formas geométricas, linhas vibrantes e uma abordagem não representacional da arte. Kandinsky acreditava na capacidade das cores e formas de evocar emoções e transmitir significados espirituais. Nessa obra específica, o título sugere a predominância das cores amarelo, vermelho e azul, que podem ser interpretadas em termos de simbolismo ou como elementos visuais que buscam criar uma experiência sensorial única para o observador. " },

]



function Corpo() {
    const { user } = useUserContext();
    

    return (
        <div className={style.fundo}>
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
                <h1>ABSTRACIONISMO</h1>
            </section>
            <br />
            <br />
            <br />
            <br />


            <section className={style.texto} align="justify">
                <p>Abstracionismo foi um estilo artístico que começou a partir das vanguardas europeias no século XX, que buscavam romper com a tradição cultural herdada do passado, monopolizada pela academia, tradicionalista e que focava o “belo” como principal característica.
                    As obras abstracionistas não imitavam objetos, natureza ou pessoas, mas apresentavam as emoções do artista de maneira abstrata e desconstruída, sem estarem subordinadas à representação da realidade.
                    <br></br>
                    <br></br>
                    <p>As principais características das obras de arte desse estilo artístico podem ser resumidas da seguinte forma:</p>

                    <p>-Abstrata e não representacional</p>
                    <p>- Subjetiva</p>
                    <p>- Cores e linhas simples</p>
                    <p>- Causavam diversas interpretações</p>
                    <p>- Expressavam as intuições e sentimentos dos artistas.</p>
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

                <section className={style.textoV}>
                    <h1>Vídeo explicativo</h1>
                </section>

                <section className={style.video}>
                    <p>
                    <iframe width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/bzrY9gOqoYs?si=cNKjfnxcDVu5Btr4" 
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

export default Corpo