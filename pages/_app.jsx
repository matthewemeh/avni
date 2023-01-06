import Head from 'next/head';
import { useState, createContext } from 'react';

import '../styles/globals.css'; // for development/
// import '../styles/main.css'; // for production

import Menu from '../components/Menu';
import Overlay from '../components/Overlay';
import Navigation from '../components/Navigation';

export const AppContext = createContext();

export default function App({ Component, pageProps }) {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <AppContext.Provider value={{ menuOpened, setMenuOpened }}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main
        className={`transition-all w-full duration-500 absolute top-0 ${
          menuOpened ? 'right-[35vw]' : 'right-0'
        }`}
      >
        <Overlay
          visible={menuOpened}
          extraStyles={{ width: '60vw' }}
          onClick={() => setMenuOpened(false)}
        />
        <Navigation />
        <Menu />
        <Component {...pageProps} />
      </main>
    </AppContext.Provider>
  );
}
