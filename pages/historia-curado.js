import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HistoriaCurado() {
  return (
    <>
      <Navbar />
      <main className="historia-curado-main">
        <section className="historia-mate">
          <h2>La Historia del Mate</h2>
          <p>
            El mate es una bebida tradicional de Sudamérica, especialmente popular en países como Argentina, Uruguay, Paraguay y Brasil. Su origen remonta a tiempos precolombinos, cuando los pueblos indígenas guaraníes lo utilizaban como una infusión energizante.
          </p>
          <p>
            A lo largo de los siglos, el mate ha sido adoptado por la cultura regional, no solo como una bebida, sino como un símbolo de amistad y convivencia. Hoy en día, compartir un mate es una costumbre que representa un momento de socialización entre amigos y familiares.
          </p>
        </section>

        <section className="como-curar-mate">
          <h2>¿Cómo Curar el Mate?</h2>
          <p>Curar el mate es un paso fundamental para asegurar que tu mate tenga un sabor óptimo y que la calabaza (el recipiente) no se vea afectada por el primer uso. Aquí te dejamos una breve guía para hacerlo correctamente:</p>
          <ol>
            <li><strong>Limpia la calabaza:</strong> Lava la calabaza con agua tibia y jabón suave antes de usarla.</li>
            <li><strong>Coloca la yerba:</strong> Llena el mate hasta 3/4 de su capacidad con yerba.</li>
            <li><strong>Inclina el mate:</strong> Coloca el mate en un ángulo de 45 grados para que la yerba libere su sabor gradualmente.</li>
            <li><strong>Vierte agua caliente:</strong> Calienta el agua a unos 70-80 grados Celsius y vierte un poco sobre la yerba. Deja reposar durante unos minutos.</li>
            <li><strong>Deja secar:</strong> Deja que el mate se seque por completo. ¡Listo para disfrutar!</li>
          </ol>
        </section>
      </main>
      <Footer />
    </>
  );
}
