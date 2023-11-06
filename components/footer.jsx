import Link from "next/link";



function Footer()  {


    return (
        <div className="footer" >
            <section>
           <img className="logo" src="logosenairedonda-removebg-preview.png"></img> 
            </section>
            
            <section className="t">
            <h1>Desenvolvimento de Sistemas - SESI/SENAI</h1>
            </section>

            <section className="botao">
            <li>
               <Link href="/equipe">EQUIPE</Link>
            </li>
      
      
      </section>
       </div>
            


     
    )
}

export default Footer;