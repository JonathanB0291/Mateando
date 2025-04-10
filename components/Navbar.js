import Link from 'next/link';
import Image from 'next/image';


export default function Navbar() {
  return (
    <nav>
        <div>
        <a href="/"><h1>Mateando</h1></a>
      </div>
      <div> 
        <Link href="/">Inicio</Link>
        <Link href="/productos">Productos</Link>
        <Link href="/nosotros">Nosotros</Link>
        <Link href="/contacto">Contacto</Link>
      </div>
    </nav>
  );
}
