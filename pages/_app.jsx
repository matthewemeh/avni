// import '../styles/globals.css'; // for development
import '../styles/main.css'; // for production

// import { Montserrat } from '@next/font/google';

import Navigation from '../components/Navigation';

// const montserrat = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Navigation />
      <Component {...pageProps} />
    </main>
  );
}
