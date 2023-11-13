"use client"

import Footer from "@/components/footer";
import Header from "@/components/header";
import style from "@/app/neoclassicismo/neoclassicismo.module.css";
import Link from "next/link";
import ImageGallery from "@/components/neoclassicismo";
import { useUserContext} from "@/context/user";


const fotos1 = [
    { img: '/amortedesocrates.png', text: "'A Morte de Sócrates' é uma pintura de Jacques-Louis David, concluída em 1787. A obra retrata o filósofo grego Sócrates momentos antes de beber cicuta, condenado à morte por suas crenças. Sócrates está sereno, discutindo com seus discípulos, enquanto outros expressam tristeza e desespero. A pintura encapsula o ideal neoclássico, ressaltando valores como a razão e a virtude. A composição destaca o sacrifício de Sócrates em prol da verdade e da justiça, simbolizando a resistência ao autoritarismo." },
    { img: '/apariçãodecristo.png', text: "'A Aparição de Cristo para Maria Madalena' é uma pintura de Alexander Ivanov, concluída em meados do século XIX. A obra retrata o momento bíblico em que Jesus ressuscitado aparece para Maria Madalena no Jardim. A cena é carregada de emoção, com Maria reconhecendo o Mestre. Ivanov emprega cores vibrantes e expressões faciais intensas para transmitir o impacto espiritual desse encontro. A pintura é notável por sua fusão de elementos clássicos e românticos, contribuindo para a grandiosidade do tema religioso." },
    { img: '/juramentodoshoracios.png', text: "'O Juramento dos Horácios' é uma pintura de Jacques-Louis David, concluída em 1784. A obra retrata um episódio da Roma Antiga em que os irmãos Horácios juram defender sua pátria. A composição enfatiza a dedicação e o patriotismo, com os irmãos estendendo os braços em um juramento solene. David incorpora elementos neoclássicos, como formas geométricas e composição equilibrada, destacando a importância do sacrifício pessoal em nome do bem comum. A pintura é uma expressão notável do neoclassicismo e da virtude cívica." },
]

const fotos2 = [
    { img: '/joana.png', text: "A obra 'Joana d'Arc na Coroação de Charles VII' é uma pintura de Jean-Auguste-Dominique Ingres, concluída em 1854. Representa o momento em que Joana d'Arc testemunha a coroação de Charles VII, rei da França, em Reims. A cena destaca a devoção de Joana à missão divina e seu papel crucial na coroação. Ingres utiliza uma paleta de cores ricas e detalhes minuciosos para capturar a solenidade do evento e a expressão intensa de Joana. A pintura é uma interpretação romântica e idealizada desse episódio histórico." },
    { img: '/intervenção.png', text: "'A Intervenção das Sabinas' é uma escultura de Gian Lorenzo Bernini, concluída em 1582. A obra representa o momento em que as mulheres sabinas se interpoem entre os romanos e os sabinos, evitando um conflito. A escultura captura a tensão do momento e a narrativa complexa de reconciliação. Bernini habilmente esculpe expressões faciais e corporais, criando uma composição dinâmica. A Intervenção das Sabinas é uma representação dramática de um episódio mitológico e exemplifica a maestria de Bernini na escultura barroca." },
    { img: '/mortedemarat.jpg', text: "'A Morte de Marat' é uma pintura de Jacques-Louis David, concluída em 1793. A obra retrata a cena do assassinato de Jean-Paul Marat, líder revolucionário francês, enquanto ele estava na banheira devido a problemas de pele. David representa Marat de maneira idealizada e heróica, destacando sua dedicação à Revolução Francesa. A pintura é carregada de simbolismo político e emocional, transmitindo uma mensagem de mártir e sacrifício. É um exemplo notável do estilo neoclássico e seu uso na expressão artística durante um período histórico tumultuado." },

]





function Corpo() {
    const {user} = useUserContext();

    return (
        <div className={style.fundo}>
            <Header></Header>

            <div>

            <nav className={style.nav}>

                <Link href="/renascimento" className={style.navelements}>
                    Renascimento
                </Link>
                <Link href="/rococo" className={style.navelements}>
                    Rococó
                </Link>
                <Link href="/barroco" className={style.navelements}>
                    Barroco
                </Link>
                <Link href="/romantismo" className={style.navelements}>
                    Romantismo
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
      </div>





            <section className={style.nome}>
                <h1>NEOCLASSICISMO</h1>
            </section>
            <br />
            <br />
            <br />
            <br />


            <section className={style.texto} align="justify">
                <p>O Neoclassicismo foi um movimento artístico e cultural que surgiu no final do século XVIII, como uma reação ao estilo Barroco e Rococó. Ele se inspirou na estética e valores da Antiguidade Clássica, especialmente na cultura greco-romana. 
As características principais são: </p>
<p>Simetria e equilíbrio</p>
<p>Racionalismo</p>
<p>Temas históricos e mitológicos</p>
<p>Rejeição do excesso</p>
<p>Influência na arquitetura</p>
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
                    src="https://www.youtube.com/embed/miw1cAzIntE?si=4lyeCDKi4LV68r--" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </p>
                </section>





            </div>
            <p></p>
            <Footer></Footer>
        </div>
    );
}

export default Corpo;