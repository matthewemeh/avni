import Link from 'next/link';
import { useContext } from 'react';

import Logo from './Logo';
import ArrowRightCircled from './icons/ArrowRightCircled';

import { AppContext } from '../pages/_app';

const Menu = () => {
  const { menuOpened, setMenuOpened } = useContext(AppContext);

  return (
    <div
      className={`w-[400px] h-[100vh] font-medium text-[16px] leading-5 bg-white py-[30px] px-[25px] transition-all duration-500 fixed z-20 top-0 dark:bg-shark small-phones:max-w-[100vw] ${
        menuOpened ? 'right-0' : '-right-[500px]'
      }`}
    >
      <header className='flex items-start justify-between mb-[15%]'>
        <Logo />
        <button
          onClick={() => setMenuOpened(false)}
          className='bg-[url(/assets/svgs/close.svg)] w-6 h-6 bg-no-repeat bg-center'
        />
      </header>

      <Link
        href='/home'
        onClick={() => setMenuOpened(false)}
        className='font-semibold text-[32px] leading-10 w-max mx-auto flex flex-col gap-y-[10px] items-center justify-center mb-[15%]'
      >
        <ArrowRightCircled />
        Go Shopping
      </Link>

      <Link href='/' onClick={() => setMenuOpened(false)} className='block w-max mx-auto mb-5'>
        About Avni.furniture
      </Link>
      <Link href='/' onClick={() => setMenuOpened(false)} className='block w-max mx-auto mb-5'>
        Join our team
      </Link>
      <Link href='/' onClick={() => setMenuOpened(false)} className='block w-max mx-auto mb-[50%]'>
        Change location
      </Link>

      <Link href='/' onClick={() => setMenuOpened(false)} className='block w-max mx-auto mb-5'>
        Cookie Policy
      </Link>
      <Link href='/' onClick={() => setMenuOpened(false)} className='block w-max mx-auto'>
        Privacy Policy
      </Link>
    </div>
  );
};

export default Menu;
