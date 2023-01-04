import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../pages/_app';

import Logo from './Logo';

const Navigation = () => {
  const [transparent, setTransparent] = useState(true);

  const { menuOpened, setMenuOpened } = useContext(AppContext);

  // componentDidMount
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollYPos = window.scrollY || document.documentElement.scrollTop;

      if (scrollYPos >= 100 && transparent) setTransparent(false);
      else if (scrollYPos < 100 && !transparent) setTransparent(true);
    });
  }, []);

  return (
    <nav
      className={`py-7 px-10 w-full flex items-center justify-between sticky top-0 bg-white dark:bg-shark z-10 transition-shadow duration-500 ${
        transparent || 'shadow-[0_1px_5px_black] dark:shadow-[0_2px_5px_black]'
      }`}
    >
      <Logo />
      <button onClick={() => setMenuOpened(!menuOpened)} className='block border-y-2 w-5 h-3' />
    </nav>
  );
};

export default Navigation;
