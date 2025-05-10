import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <h1 className={`nav-links ${menuOpen ? 'active' : ''}`}><Link href="/">Mateando</Link></h1>

      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link href="/">Inicio</Link>
        <Link href="/productos">Productos</Link>
        <Link href="/nosotros">Nosotros</Link>
        <Link href="/contacto">Contacto</Link>
      </div>
    </nav>
  );
}
