"use client"
import styles from "@/app/page.module.css";
import Login from "@/components/Login";
import { useUserContext } from "@/context/user";
import Image from "next/image";

export default function signIn() {
  const {user} = useUserContext()
  return (
    <div className={styles.corpo}>
      <section className={styles.login}>
        <div>
          <img
            src="/logosenairedonda-removebg-preview.png"
            className={styles.imagem}
          />
          <h2 className={styles.saudacao}>Seja bem-vindo(a)!</h2>
          {/* <p className={styles.logado}>Você está logado</p> */}
          <br />
          <br />
          <h3 className={styles.msglogin}>Olá, {user.name}</h3>
          <br />
          <br />
          <br />
          <br />

          <Login></Login>
        </div>
      </section>
    </div>
  );
}
