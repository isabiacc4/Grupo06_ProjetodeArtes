import Link from "next/link";



function Header()  {


    return (
              
            
        <div className="header" >
        <section>
           <Link href="</" className="icone">🏠</Link> 
            </section>
    
            <section className="titulo">
                
            <h1>Movimentos</h1>
            <h1 className="art">Artísticos</h1>
            </section>
        </div>
        
    )
}

export default Header;