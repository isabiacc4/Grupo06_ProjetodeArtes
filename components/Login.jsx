import Link from "next/link";
import styles from "@/app/page.module.css";


export default function Login(){
    return (
        <div>
          <button type="submit" className={styles.botaologin}><Link href="/paginicial">Acesse o site</Link></button>
        </div>
    )
}