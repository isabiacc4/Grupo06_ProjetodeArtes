import Link from "next/link";
/* teste */

function Footer() {


    return (
        <div className="footer" >
            <div>
                <img className="logo" src="logosenairedonda-removebg-preview.png"></img>
            </div>

            <div>
                <div className="t">
                    <h1>Desenvolvimento de Sistemas - SESI/SENAI </h1>
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