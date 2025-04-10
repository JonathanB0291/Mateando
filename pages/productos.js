import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Productos() {
  const mates = [
    {
      id: 1,
      nombre: 'Mate Imperial',
      precio: '$3500',
      imagen: '/images/image1.jpg' // Usa la ruta correcta desde public
    },
    {
      id: 2,
      nombre: 'Mate Camionero',
      precio: '$2800',
      imagen: '/images/image2.jpg' // Usa la ruta correcta desde public
    },
    {
      id: 3,
      nombre: 'Mate de Algarrobo',
      precio: '$2200',
      imagen: '/images/image3.jpg' // Usa la ruta correcta desde public
    },
    {
      id: 4,
      nombre: 'Mate Torpedo',
      precio: '$3000',
      imagen: '/images/image4.jpg' // Usa la ruta correcta desde public
    }
  ];

  return (
    <>
      <Navbar />
      <main className="productos-container">
        <h2 className="text-center">Nuestros Mates</h2>
        <div className="productos-grid">
          {mates.map((mate) => (
            <div key={mate.id} className="product-card">
              <Image 
                src={mate.imagen} // Usa el componente Image de Next.js
                alt={mate.nombre}
                width={300} // Ajusta el tamaño de la imagen según lo necesites
                height={300} // Ajusta el tamaño de la imagen según lo necesites
              />
              <div className="product-title">{mate.nombre}</div>
              <div className="product-price">{mate.precio}</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
