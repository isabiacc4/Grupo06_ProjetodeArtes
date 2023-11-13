import Link from "next/link";
import Image from "next/image";


function Footer() {


    return (
        <div className="footer" >
            <div>
            <Image className="logo" src="/logosenairedonda-removebg-preview.png" width={230} height={150} alt=" "/>
            </div>

            <div>
                <div className="t">

                    <h1>Desenvolvimento de Sistemas - SENAI </h1>


                </div>
                <br />
                <div className="botao">
                    <li>
                        <Link href="/equipe">EQUIPE</Link>
                    </li>
                </div>
            </div>
        </div>


    )
}

export default Footer;