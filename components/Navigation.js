import Link from 'next/link';
import { useState, useEffect } from 'react';

import Menu from './Menu';
import Overlay from './Overlay';
import Logo from './icons/Logo';

import { addClass, removeClass, scrollScreenTo } from '../public/utils';

const Navigation = ({ extraNavStyles, extraNavOverlayStyles, onMenuOpened, onMenuClosed }) => {
  const [menuOpened, setMenuOpened] = useState(false);

  const closeMenu = () => setMenuOpened(false);

  useEffect(() => {
    // move whole page left or right and toggle scroll listener based on menu's opened state
    const rootContainer = document.querySelector('.root');

    if (menuOpened) {
      removeClass(rootContainer, 'right-0');
      addClass(rootContainer, 'right-[400px]');
      window.addEventListener('scroll', closeMenu);

      // run onMenuOpened function if it is defined ( or passed to this component )
      if (onMenuOpened) onMenuOpened();
    } else {
      addClass(rootContainer, 'right-0');
      removeClass(rootContainer, 'right-[400px]');
      window.removeEventListener('scroll', closeMenu);

      // run onMenuOpened function if it is defined ( or passed to this component )
      if (onMenuClosed) onMenuClosed();
    }
  }, [menuOpened]);

  return (
    <nav
      style={extraNavStyles}
      className='py-[30px] px-10 w-full flex items-center justify-between fixed top-0 bg-white outline-0 z-[65] dark:bg-shark phones:px-[25px]'
    >
      <Link onClick={scrollScreenTo} href='/'>
        <Logo />
      </Link>

      <button onClick={() => setMenuOpened(!menuOpened)} className='block border-y-2 w-5 h-3' />

      <Overlay onClick={closeMenu} extraStyles={extraNavOverlayStyles} visible={menuOpened} />
      <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
    </nav>
  );
};

export default Navigation;
