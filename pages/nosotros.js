import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';


export default function Nosotros() {
  return (
    <>
      <Navbar />
      <main className="nosotros-container">
        <div className="nosotros-text">
          <h2>Sobre Nosotros</h2>
          <p>En <strong>Mateando</strong>, celebramos la tradición argentina del mate. Desde nuestros inicios en 2020, buscamos llevar mates de calidad artesanal a cada rincón del país.</p>
          <p>Trabajamos con materiales nobles como el cuero, la madera y el acero inoxidable para ofrecerte productos duraderos y con estilo propio.</p>
          <p>Creemos en compartir momentos, historias y buenos mates. ¡Gracias por ser parte de esta ronda!</p>
        </div>
        <div className="nosotros-img">
          <img src="/images/image7.jpg" alt="Equipo de Mateando" />
        </div>
      </main>
      <Footer />
    </>
  );
}
