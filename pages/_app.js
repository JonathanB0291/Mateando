import '../styles/globals.css';
import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'], // Puedes incluir más pesos si lo necesitas
  style: 'normal', // Cambia a 'italic' si prefieres cursiva
});

export default function App({ Component, pageProps }) {
  return (
    <main className={robotoMono.className}>
      <Component {...pageProps} />
    </main>
  );
}
