"use client"

import Footer from "@/components/footer";
import Header from "@/components/header";
import style from "@/app/romantismo/romantismo.module.css";
import Link from "next/link";
import ImageGallery from "@/components/romantismo";
import { useUserContext} from "@/context/user";


const fotos1 = [
    { img: '/liberdade.jpg', text: "A Liberdade guiando o povo- Eugène Dalacroix, 1830: A Liberdade Guiando o Povo é uma famosa pintura de Eugène Delacroix que simboliza a Revolução de Julho de 1830 na França. A figura central representa a Liberdade, liderando cidadãos em uma barricada, segurando a bandeira tricolor francesa e uma baioneta. A pintura é um ícone da luta por liberdade e justiça, com cores vibrantes e uma composição dramática. Ela representa a resistência do povo contra a opressão e é uma das obras de arte mais emblemáticas da história." },
    { img: '/carroca.jpg', text: " A carroça de Feno - John Constable, 1821: A Carroça de Feno é uma pintura de John Constable, um destacado artista britânico do século XIX. A obra retrata uma cena rural inglesa com uma carroça de feno em primeiro plano, cercada por um cenário campestre sereno. O quadro capta a beleza da paisagem rural e a vida simples no campo. É notável por sua representação precisa da natureza e sua luz, que influenciou o movimento impressionista. A Carroça de Feno é uma obra que celebra a paisagem rural e a conexão do artista com a natureza." },
    { img: '/chuva.jpg', text: "Chuva, Vapor e Velocidade - William Turner, 1844: Chuva, Vapor e Velocidade é uma pintura do artista britânico J.M.W. Turner, que retrata uma locomotiva a vapor cruzando uma ponte durante uma tempestade de chuva. A obra, criada em 1844, é notável por sua atmosfera turbulenta e pela maneira como Turner captura a interação entre a tecnologia emergente (a locomotiva) e a natureza (a tempestade). Ela simboliza a velocidade e o progresso da Revolução Industrial, bem como a influência da tecnologia sobre a paisagem rural. Chuva, Vapor e Velocidade é uma representação marcante da era industrial e uma obra precursora do impressionismo." },
]

const fotos2 = [
    { img: '/passeio.jpg', text: "Um Passeio ao Entardecer - Caspar David Friedrich, 1837: Um Passeio ao Entardecer é uma pintura de Caspar David Friedrich, um mestre do romantismo alemão do século XIX. A obra retrata duas figuras em pé à beira de um penhasco, olhando para o horizonte com um cenário natural majestoso ao fundo, incluindo montanhas e o mar. A pintura evoca um sentimento de contemplação e conexão com a natureza, típico do romantismo, representando a humanidade como parte integrante da paisagem. Um Passeio ao Entardecer é uma obra que convida à reflexão sobre a relação entre o homem e o mundo natural, transmitindo uma sensação de serenidade e admiração pela natureza." },
    { img: '/maio.jpg', text: "O 3 de Maio em Madri - Francisco de Goya, 1814: O 3 de Maio em Madri é uma famosa pintura de Francisco de Goya que retrata um episódio da Revolta de Madri contra as forças francesas durante a Guerra Peninsular em 1808. A cena mostra um grupo de espanhóis indefesos sendo executados por soldados franceses. A figura central com os braços abertos simboliza o sacrifício do povo espanhol em prol da liberdade. A obra é uma poderosa representação da brutalidade da guerra e do sacrifício humano. Goya capturou a tragédia e a indignação em um estilo sombrio e emocional, marcando-a como uma das mais importantes pinturas de protesto e antiguerra na história da arte." },
    { img: '/sonho.jpg', text: "Sonho de Arcádia - Thomas Cole, 1838: Sonho de Arcádia de Thomas Cole é uma pintura que retrata uma paisagem bucólica e serena, com pastores descansando perto de uma lápide com a inscrição Et in Arcadia ego . A obra simboliza a busca pela conexão com a natureza e a reflexão sobre a mortalidade, com ênfase na beleza da paisagem natural. É representativa da Escola do Rio Hudson e contribuiu para o desenvolvimento da arte paisagística nos Estados Unidos." },

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

            <br></br>
            <br></br>
            
            <div>
        <p className="mensagem">Olá, {user.name}! </p>
      </div>





            <section className={style.nome}>
                <h1>ROMANTISMO</h1>
            </section>
            <br />
            <br />
            <br />
            <br />


            <section className={style.texto} align="justify">
                <p>O Romantismo na pintura foi um movimento artístico que floresceu principalmente no século XIX, destacando-se por enfatizar a expressão emocional e a individualidade dos artistas. Pintores românticos buscaram retratar a natureza, o sublime, a fantasia e a nostalgia, frequentemente evocando paisagens exuberantes, cenas históricas e míticas, bem como retratos emocionais. Artistas notáveis incluem Caspar David Friedrich, Eugène Delacroix e Francisco Goya. A técnica e a cor eram usadas de forma mais livre e emotiva do que nas eras anteriores. O Romantismo na pintura foi uma reação ao academismo e à rigidez neoclássica, e teve uma influência duradoura nas artes visuais, deixando um legado de obras poderosas e expressivas que continuam a ser admiradas até os dias de hoje.</p>
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
                            width="760"
                            height="500"
                            src="\romantismo.mp4"
                            title="Vídeo explicativo sobre o movimento artístico Romantismo"
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