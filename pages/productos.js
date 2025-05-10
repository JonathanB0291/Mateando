import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Productos() {
  const mates = [
    {
      id: 1,
      nombre: 'Mate Imperial',
      precio: '$3500',
      imagen: '/images/image1.jpg'
    },
    {
      id: 2,
      nombre: 'Mate Camionero',
      precio: '$2800',
      imagen: '/images/image2.jpg'
    },
    {
      id: 3,
      nombre: 'Mate de Algarrobo',
      precio: '$2200',
      imagen: '/images/image3.jpg'
    },
    {
      id: 4,
      nombre: 'Mate Torpedo',
      precio: '$3000',
      imagen: '/images/image4.jpg'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="productos-main">
        <h2 className="text-center">Nuestros Mates</h2>
        <div className="productos-grid">
          {mates.map((mate) => (
            <div key={mate.id} className="product-card">
              <Image
                src={mate.imagen}
                alt={mate.nombre}
                width={300}
                height={300}
                className="product-image"
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
