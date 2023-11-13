"use client";

import Link from "next/link";
import styles from "./page.module.css";
// import { useUserContext } from '@/context/user';

function Home() {
  // const { user } = useUserContext();

  return (
    <div className={styles.fundo}>
      <div className={styles.cabecalho}>
        <h1>MOVIMENTOS ARTÍSTICOS</h1>
      </div>

      <br></br>
      <div>{/* <p className="mensagem">Olá, {user.name}! </p> */}</div>
      <br></br>
      {/* <form className={styles.campo}>
        <input
          className={styles.digitacao}
          name="nome"
          placeholder="Informe seu nome"
          required
        />

        <br />

        <button className={styles.botao}>➜</button>
      </form> */}

      <br />

      <div className={styles.priparallax}></div>

      <br />

      <div className={styles.textintro}>
        <h2 className={styles.title}>SOBRE O SITE</h2>
        <p className={styles.text} align="justify">
          Os movimentos artísticos são manifestações culturais que emergem em
          diferentes momentos históricos, espelhando os estilos e ideais
          característicos de cada período. Alguns dos principais movimentos
          incluem o Renascimento, Barroco, Romantismo, Neoclassicismo, Rococó,
          Realismo, Impressionismo e Abstracionismo. Cada movimento possui
          características únicas e representa uma evolução em relação ao estilo
          anterior. Esses movimentos contribuem para a diversidade e evolução da
          arte ao longo do tempo, refletindo as mudanças sociais, políticas e
          culturais de cada período.
        </p>
      </div>

      <br />

      <div className={styles.segparallax}></div>

      <br />

      <h2 className={styles.segtitulo}>
        Confira os detalhes de cada movimento artístico abaixo
      </h2>

      <br />

      <div className={styles.blocosnav}>
        <div className={styles.renas}>
          <span className={styles.span}>
            <Link href="/renascimento">RENASCIMENTO</Link>
          </span>
        </div>

        <div className={styles.barroco}>
          <span className={styles.span}>
            <Link href="/barroco">BARROCO</Link>
          </span>
        </div>

        <div className={styles.roman}>
          <span className={styles.span}>
            <Link href="/romantismo">ROMANTISMO</Link>
          </span>
        </div>
      </div>

      <div className={styles.navindiv}>
        <div className={styles.neocla}>
          <span className={styles.spanmaior}>
            <Link href="/neoclassicismo">NEOCLASSICISMO</Link>
          </span>
        </div>
      </div>

      <div className={styles.blocosnav}>
        <div className={styles.rococo}>
          <span className={styles.span}>
            <Link href="/rococo">ROCOCÓ</Link>
          </span>
        </div>

        <div className={styles.reali}>
          <span className={styles.span}>
            <Link href="/realismo">REALISMO</Link>
          </span>
        </div>

        <div className={styles.impre}>
          <span className={styles.span}>
            <Link href="/impressionismo">IMPRESSIONISMO</Link>
          </span>
        </div>
      </div>

      <div className={styles.navindiv}>
        <div className={styles.abstra}>
          <div className={styles.spanmaior}>
            <Link href="/abstracionismo">ABSTRACIONISMO</Link>
          </div>
        </div>
      </div>

      <br />
      <div className={styles.footerhome}>
        <div>
          <img
            className={styles.logohome}
            src="logosenairedonda-removebg-preview.png"
          />
        </div>

        <div className={styles.footer2}>
          <div className={styles.thome}>
            <h1>Desenvolvimento de Sistemas - SESI/SENAI </h1>
          </div>
          <br />
          <div className={styles.botaohome}>
            <li>
              <Link href="/equipe">EQUIPE</Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
