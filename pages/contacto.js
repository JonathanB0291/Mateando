import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contacto() {
  return (
    <>
      <Navbar />
      <main className="contacto-page">
        <section className="contacto-hero">
          <h1>Contacto</h1>
          <p>¿Tenés alguna pregunta o querés hacer un pedido especial? Escribinos.</p>
        </section>

        <section className="formulario-container">
          <form className="formulario-contacto">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" rows="5" required></textarea>

            <button type="submit" className="cta-button">Enviar</button>
          </form>

          <div className="info-contacto">
            <h2>También podés escribirnos:</h2>
            <p><i className="fa fa-envelope"></i> mateando@gmail.com</p>
            <p><i className="fa fa-phone"></i> +54 9 11 1234-5678</p>
            <p><i className="fa fa-map-marker"></i> Buenos Aires, Argentina</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
