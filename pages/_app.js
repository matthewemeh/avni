import Head from 'next/head';
import Script from 'next/script';
import { createContext } from 'react';

// import '../styles/globals.css'; // for development
import '../styles/main.css'; // for production

import Navigation from '../components/Navigation';

export const AppContext = createContext();

export default function App({ Component, pageProps }) {
  const MOBILE_BREAKPOINT = 600;
  const LAPTOP_BREAKPOINT = 1024;

  return (
    <AppContext.Provider value={{ MOBILE_BREAKPOINT, LAPTOP_BREAKPOINT }}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <main className='root font-montserrat transition-all w-full duration-500 absolute top-0'>
        <Script id='unload-script'>{`window.onbeforeunload = () => window.scrollTo(0, 0);`}</Script>

        <Navigation />
        <Component {...pageProps} />
      </main>
    </AppContext.Provider>
  );
}
