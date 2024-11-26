/*import Image from "next/image";

export default function Home() {
  return (
    <div> 
     <h1>helo world </h1>
     <h5>helo world </h5>
     

    </div>
  );
} */

  import Link from "next/link"
export default function Navbar (){
    return(
        <header style={{backgroundColor:"blue" , color:"white"}}>
            <nav>
                <ul>
                    <li style={{color:"white"}}>
                        <Link href="/category/crypto">Crypto</Link>
                    </li> 
                    <li style={{color:"white"}}>
                        <Link href="/products/product1">Laptop</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

