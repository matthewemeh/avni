import Head from 'next/head';
import Script from 'next/script';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import { createContext, useEffect, useState } from 'react';

import '@/styles/globals.css';
import { AppContextData } from '@/public/interfaces';

const MOBILE_BREAKPOINT = 600;
const LAPTOP_BREAKPOINT = 1024;
const SMALL_MOBILE_BREAKPOINT = 400;

const montserrat = Montserrat({ subsets: ['latin'] });

export const AppContext = createContext<AppContextData>({
  screenWidth: 0,
  menuOpened: false,
  LAPTOP_BREAKPOINT,
  MOBILE_BREAKPOINT,
  SMALL_MOBILE_BREAKPOINT,
});

export default function App({ Component, pageProps }: AppProps) {
  const [screenWidth, setScreenWidth] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  // componentDidMount
  useEffect(() => setScreenWidth(window.screen.availWidth), []);

  return (
    <AppContext.Provider
      value={{
        menuOpened,
        screenWidth,
        setMenuOpened,
        MOBILE_BREAKPOINT,
        LAPTOP_BREAKPOINT,
        SMALL_MOBILE_BREAKPOINT,
      }}
    >
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <main
        className={`root transition-all w-full duration-500 absolute top-0 ${montserrat.className}`}
      >
        <Script id='unload-script'>{`window.onbeforeunload = () => window.scrollTo(0, 0);`}</Script>

        <Component {...pageProps} />

        <div
          id='alert'
          style={{ bottom: '-100px' }}
          className='fixed left-1/2 -translate-x-1/2 w-max max-w-[80vw] p-4 bg-transparent text-white mb-8 rounded-md text-[1rem] transition-all duration-500 ease-in-out'
        />
      </main>
    </AppContext.Provider>
  );
}
