import Link from 'next/link';
import { useContext } from 'react';
import { AppContext } from '../pages/_app';

import Logo from './Logo';

import { scrollTop } from '../public/utils';

const Navigation = () => {
  const { menuOpened, setMenuOpened } = useContext(AppContext);

  return (
    <nav className='pt-[30px] pb-[35px] pl-10 pr-[30px] w-full flex items-center justify-between sticky top-0 bg-white outline-0 z-10 dark:bg-shark phones:pl-[25px] phones:pb-[38px]'>
      <Link onClick={scrollTop} href='/'>
        <Logo />
      </Link>

      <button onClick={() => setMenuOpened(!menuOpened)} className='block border-y-2 w-5 h-3' />
    </nav>
  );
};

export default Navigation;
