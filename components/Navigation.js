import Link from 'next/link';
import { useState, useEffect } from 'react';

import Menu from './Menu';
import Overlay from './Overlay';
import Logo from './icons/Logo';

import { scrollTop, addClass, removeClass } from '../public/utils';

const Navigation = ({ extraStyles }) => {
  const [menuOpened, setMenuOpened] = useState(false);

  const closeMenu = () => setMenuOpened(false);

  useEffect(() => {
    // move whole page left or right and toggle scroll listener based on menu's opened state
    const rootContainer = document.querySelector('.root');

    if (menuOpened) {
      removeClass(rootContainer, 'right-0');
      addClass(rootContainer, 'right-[400px]');

      window.addEventListener('scroll', closeMenu);
    } else {
      addClass(rootContainer, 'right-0');
      removeClass(rootContainer, 'right-[400px]');

      window.removeEventListener('scroll', closeMenu);
    }
  }, [menuOpened]);

  return (
    <nav
      style={extraStyles}
      className='pt-[30px] pb-[35px] pl-10 pr-[30px] w-full flex items-center justify-between fixed top-0 bg-white outline-0 z-[65] dark:bg-shark phones:pl-[25px] phones:pb-[38px]'
    >
      <Link onClick={scrollTop} href='/'>
        <Logo />
      </Link>

      <button onClick={() => setMenuOpened(!menuOpened)} className='block border-y-2 w-5 h-3' />

      <Overlay onClick={closeMenu} visible={menuOpened} />
      <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
    </nav>
  );
};

export default Navigation;
