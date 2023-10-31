import Link from "next/link";



function Footer()  {


    return (
        <div className="footer" >
            <section className="logo">
           {/* <image> */}
            </section>
            
            <section className="">
            <h1>Desenvolvimento de Sistemas - SESI/SENAI</h1>
            </section>

            <section className="botao">
                <link to=""><button>EQUIPE</button></link>
            </section>


        </div>
    )
}

export default Footer;