import Link from "next/link";



function Header()  {


    return (
              
            
        <div className="header" >
        
        <section>
        <Link href="./paginicial" className="icone">
        <img src="https://img.icons8.com/material-sharp/24/home.png" alt="home" width={24} height={24}/>
        </Link>
      </section>
    
            <section className="titulo">
                
            <h1>Movimentos</h1>
            <h1 className="art">Artísticos</h1>
            </section>
        </div>
        
    )
}

export default Header;