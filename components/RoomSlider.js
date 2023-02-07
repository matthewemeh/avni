import Link from 'next/link';
import { useState, useEffect, useContext } from 'react';

import AllCard from './AllCard';

import { AppContext } from '../pages/_app';

const RoomSlider = ({ showButton, hideButton, maxSliderItems }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [justHovered, setJustHovered] = useState(false);
  const { LAPTOP_BREAKPOINT, SMALL_MOBILE_BREAKPOINT, screenWidth } = useContext(AppContext);

  const rooms = [
    {
      href: '/',
      text: 'living room',
      bgImage: 'bg-[url(/assets/pngs/room8.png)]',
    },
    {
      href: '/',
      text: 'living room',
      bgImage: 'bg-[url(/assets/pngs/room8.png)]',
    },
    {
      href: '/',
      text: 'living room',
      bgImage: 'bg-[url(/assets/pngs/room8.png)]',
    },
    {
      href: '/',
      text: 'living room',
      bgImage: 'bg-[url(/assets/pngs/room8.png)]',
    },
    {
      href: '/',
      text: 'living room',
      bgImage: 'bg-[url(/assets/pngs/room8.png)]',
    },
    {
      href: '/',
      text: 'living room',
      bgImage: 'bg-[url(/assets/pngs/room8.png)]',
    },
    {
      href: '/',
      text: 'living room',
      bgImage: 'bg-[url(/assets/pngs/room8.png)]',
    },
    {
      href: '/',
      text: 'living room',
      bgImage: 'bg-[url(/assets/pngs/room8.png)]',
    },
  ];

  const moveSlide = () => {
    if (!justHovered) setSlideIndex((slideIndex + 1) % rooms.length);
  };

  useEffect(() => {
    const timer = setInterval(moveSlide, 4000);
    return () => clearInterval(timer);
  }, [slideIndex, justHovered]);

  return (
    <div
      id='rooms'
      onMouseLeave={() => hideButton(3)}
      onMouseEnter={() => showButton(3, 'rooms')}
      className='x-scroll flex gap-x-10 overflow-x-scroll scroll-smooth laptops:gap-x-[30px]'
    >
      {rooms.map(({ text, bgImage, href }, index) => (
        <div
          key={index}
          onMouseEnter={() => {
            setSlideIndex(index);
            setJustHovered(true);
          }}
          onMouseLeave={() => setJustHovered(false)}
          style={{
            width:
              screenWidth > SMALL_MOBILE_BREAKPOINT
                ? screenWidth > LAPTOP_BREAKPOINT
                  ? index === slideIndex
                    ? '360px'
                    : '100px'
                  : '360px'
                : '100%',
          }}
          className={`${bgImage} bg-cover bg-center bg-no-repeat relative h-[551px] overflow-hidden flex-shrink-0 rounded-[15px] transition-all duration-500`}
        >
          <div
            className={`absolute w-[360px] origin-[0_0] flex items-center justify-between px-[30px] transition-all duration-500 ${
              screenWidth > LAPTOP_BREAKPOINT
                ? index === slideIndex
                  ? '-rotate-0 pt-0 bottom-[60px]'
                  : '-rotate-90 pt-3 -bottom-14'
                : 'bottom-[60px]'
            }`}
          >
            <p className='capitalize text-[18px] leading-[100%] w-[68px] text-black'>{text}</p>
            <Link
              href={href}
              className={`bg-white text-[12px] leading-4 rounded-[64px] py-3 px-[25px] text-cod-gray ${
                screenWidth > LAPTOP_BREAKPOINT && (index === slideIndex || 'opacity-0 invisible')
              }`}
            >
              Explore
            </Link>
          </div>
        </div>
      ))}
      {rooms.length > maxSliderItems && (
        <AllCard
          href='/'
          text='All Rooms'
          extraClassnames='w-[360px] h-[551px] flex-shrink-0 rounded-[15px]'
        />
      )}
    </div>
  );
};

export default RoomSlider;
