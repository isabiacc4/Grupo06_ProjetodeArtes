
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";


function Header()  {


    return (
        <div className="header" >
            <section>
           <Link href="" className="icone">  <AiOutlineHome/></Link>        
            </section>
            
            <section className="titulo">
            <h1>Movimentos</h1>
            <h1 className="art">Artísticos</h1>
            </section>
        </div>
    )
}

export default Header;