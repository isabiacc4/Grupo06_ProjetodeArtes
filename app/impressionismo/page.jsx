'use client'

import Header from "@/components/header";
import style from "@/app/impressionismo/impressionismo.module.css";
import Link from "next/link";
import Footer from "@/components/footer";
import ImageGallery from "@/components/ImageGallery";
import { useUserContext } from "@/context/user";


export default function Impressionismo() {
  const { user } = useUserContext();

  const fotos1 = [
    {
      img: "/manet.jpg",
      text: "Almoço na grama (Le Déjeuner sur l'herbe) de Édouard Manet: Pintada entre 1862 e 1863, essa obra é uma das mais famosas e controversas de Manet. Ela retrata uma mulher nua e uma mulher seminua em um piquenique com dois homens vestidos em um ambiente rural.",
    },
    {
      img: "/bailarinas.jpg",
      text: "Duas bailarinas (Two Ballet Dancers) de Edgar Degas: Essa obra, criada por Degas, mostra duas bailarinas em uma pose elegante. Degas era conhecido por suas representações realistas do mundo da dança.",
    },
    {
      img: "/monet.jpg",
      text: "Impressão, nascer do sol de Claude Monet: Essa obra é considerada uma das primeiras pinturas impressionistas e deu nome ao movimento artístico. Monet pintou essa paisagem marítima em 1872, capturando a luz e as cores em pinceladas soltas e rápidas.",
    },
  ];

  const fotos2 = [
    {
      img: "/almoço.jpg",
      text: "O almoço dos barqueiros de Pierre-Auguste Renoir: Essa obra retrata um grupo de pessoas desfrutando de um almoço ao ar livre em um barco no rio Sena. Renoir pintou essa cena em 1881, mostrando a vida social e alegre da burguesia parisiense.",
    },
    {
      img: "/in-the-box.jpg",
      text: "Na caixa (In the Box) de Mary Cassatt: Essa obra é um retrato íntimo de uma mulher sentada em uma poltrona, segurando uma caixa. Cassatt, uma pintora americana, foi uma das poucas mulheres a fazer parte do movimento impressionista.",
    },
    {
      img: "/meninadeitada.jpg",
      text: "Jovem menina deitada (Young girl lying) de Berthe Morisot: Essa obra retrata uma jovem menina deitada em um sofá, em uma pose relaxada. Morisot, uma das poucas mulheres impressionistas, era conhecida por seus retratos intimistas.",
    },
  ];

  return (
    <div>
      <Header />
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
        <Link href="/abstracionismo" className={style.navelements}>
          Abstracionismo
        </Link>
      </nav>
      <br></br>
      <div>
        <p className="mensagem">Olá, {user.name}! </p>
      </div>

      <section className={style.nome}>
        <h1>IMPRESSIONISMO</h1>
      </section>

      <br />
      <br />
      <br />
      <br />

      <section className={style.texto} align="justify">
        <p>
          O impressionismo foi um movimento artístico revolucionário que surgiu
          no século XIX. Os artistas impressionistas, como Monet e Renoir,
          buscavam capturar a essência dos momentos fugazes e a efemeridade da
          luz e cor. Eles abandonaram a precisão detalhada em favor de
          pinceladas rápidas e soltas, criando uma sensação de movimento e
          atmosfera nas suas obras. A pintura ao ar livre e a representação da
          vida cotidiana foram características marcantes do impressionismo.
          Apesar de inicialmente rejeitado, o movimento impressionista deixou um
          legado duradouro e influenciou profundamente a arte moderna. Sua
          abordagem inovadora e o uso ousado da cor continuam a fascinar e
          inspirar artistas e apreciadores até os dias de hoje.
        </p>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
    

      <ImageGallery fotos={fotos1} />

      <ImageGallery fotos={fotos2} />

      <br></br>
      <br></br>
      <div className={style.video}>
        <h1>Vídeo explicativo</h1>
        <br />
        <br />

        <p>
        <iframe width="560" 
        height="315" 
        src="https://www.youtube.com/embed/_JqqX2cc2OQ?si=3DOFTiZYhZR8el2G" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </p>
      </div>
      <br />
      <br />

      <Footer />
    </div>
  );
}
