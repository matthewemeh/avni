import { useState, createContext } from 'react';

// import '../styles/globals.css'; // for development
import '../styles/main.css'; // for production

// import { Montserrat } from '@next/font/google';

import Menu from '../components/Menu';
import Overlay from '../components/Overlay';
import Navigation from '../components/Navigation';

// const montserrat = Montserrat({ subsets: ['latin'] });

export const AppContext = createContext();

export default function App({ Component, pageProps }) {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <AppContext.Provider value={{ menuOpened, setMenuOpened }}>
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
