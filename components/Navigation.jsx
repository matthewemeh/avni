import { useContext } from 'react';
import { AppContext } from '../pages/_app';

import Logo from './Logo';

const Navigation = () => {
  const { menuOpened, setMenuOpened } = useContext(AppContext);

  return (
    <nav className='py-7 px-10 w-full flex items-center justify-between sticky top-0 bg-white outline-0 z-10 dark:bg-shark'>
      <Logo />
      <button onClick={() => setMenuOpened(!menuOpened)} className='block border-y-2 w-5 h-3' />
    </nav>
  );
};

export default Navigation;
