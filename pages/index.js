import { Roboto_Mono } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: 'normal',
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={`${robotoMono.className} page-home`}>
        <header className="hero">
          <div className="hero-text">
            <h1>Bienvenido a Mateando</h1>
            <p>El mejor lugar para comprar tus mates y accesorios favoritos.</p>
            <a href="/productos" className="cta-button">Ver Productos</a>
          </div>
          <div className="hero-img">
            <Image
              src="/images/image6.jpg" // Pega aquí la ruta de la imagen
              alt="Mate y accesorios"
              width={500}   // Ajusta el tamaño a lo que desees
              height={300}  // Ajusta el tamaño a lo que desees
            />
          </div>
        </header>

        <section className="productos-destacados">
          <h2>Productos Destacados</h2>
          <div className="productos-lista">
            <div className="producto-item">
              <Image
                src="/images/image6.jpg" // Pega aquí la ruta de la imagen
                alt="Mate Tradicional"
                width={200}   // Ajusta el tamaño de la imagen
                height={200}  // Ajusta el tamaño de la imagen
              />
              <h3>Mate Tradicional</h3>
              <p>Un mate clásico y duradero, ideal para todos los días.</p>
              <a href="/productos" className="cta-button">Ver Más</a>
            </div>
            <div className="producto-item">
              <Image
                src="/images/image4.jpg" // Pega aquí la ruta de la imagen
                alt="Kit de Mate"
                width={200}   // Ajusta el tamaño de la imagen
                height={200}  // Ajusta el tamaño de la imagen
              />
              <h3>Kit de Mate</h3>
              <p>Todo lo que necesitas para disfrutar de un buen mate.</p>
              <a href="/productos" className="cta-button">Ver Más</a>
            </div>
          </div>
        </section>
        
         <section className="historia-enlace">
          <h2>¿Quieres saber más sobre el mate?</h2>
          <p>Conoce la historia del mate y cómo curarlo en nuestra sección especial.</p>
          <a href="/historia-curado" className="cta-button">Leer más</a>
        </section>

        <section className="testimonios">
          <h2>Lo que dicen nuestros clientes</h2>
          <div className="testimonio-item">
            <p>"¡Excelente calidad y un servicio de 10! Los mates son geniales y llegaron rápido." - <strong>Juan P.</strong></p>
          </div>
        </section>

        <section className="beneficios">
          <h2>¿Por qué elegirnos?</h2>
          <div className="beneficios-container">
            <div className="beneficio-card" data-aos="fade-up">
              <i className="fa fa-truck benefit-icon"></i>
              <h3>Entrega rápida</h3>
              <p>Recibí tu pedido en tiempo récord.</p>
            </div>
            <div className="beneficio-card" data-aos="fade-up" data-aos-delay="200">
              <i className="fa fa-lock benefit-icon"></i>
              <h3>Pago seguro</h3>
              <p>Con nuestros métodos de pago, tu información está protegida.</p>
            </div>
          </div>
          <a href="/productos" className="cta-button">Descubre más</a>
        </section>
      </main>

      <Footer />
    </>
  );
}
