import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Contacto() {
  return (
    <>
      <Navbar />
      <main className="contacto-container">
        <h2>Contacto</h2>
        <p>¡Nos encantaría saber de vos! Podés escribirnos por cualquiera de estos medios:</p>

        <ul className="contacto-info">
          <li><strong>Email:</strong> contacto@mateando.com</li>
          <li><strong>Instagram:</strong> <a href="https://instagram.com/mateando" target="_blank">@mateando</a></li>
          <li><strong>TikTok:</strong> <a href="https://tiktok.com/@mateando" target="_blank">@mateando</a></li>
          <li><strong>Horario:</strong> Lunes a viernes de 9:00 a 18:00 hs</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
