import Link from 'next/link';
import { useState, useEffect } from 'react';

const RoomSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => setScreenWidth(window.screen.availWidth), []);

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

  useEffect(() => {
    const timer = setInterval(() => setSlideIndex((slideIndex + 1) % rooms.length), 4000);
    return () => clearInterval(timer);
  }, [slideIndex]);

  return (
    <div className='x-scroll flex gap-x-10 overflow-x-scroll pb-[30px]'>
      {rooms.map(({ text, bgImage, href }, index) => (
        <div
          key={index}
          style={{ width: index === slideIndex ? '360px' : '100px' }}
          className={`${bgImage} bg-cover bg-center bg-no-repeat relative h-[551px] overflow-hidden flex-shrink-0 rounded-[15px] transition-all duration-500`}
        >
          <div
            className={`absolute w-[360px] origin-[0_0] flex items-center justify-between px-[30px] transition-all duration-500 ${
              index === slideIndex ? '-rotate-0 pt-0 bottom-[60px]' : '-rotate-90 pt-3 -bottom-14'
            }`}
          >
            <p className='capitalize text-[18px] leading-[100%] w-[68px] text-black'>{text}</p>
            <Link
              href={href}
              className={`bg-white rounded-[64px] py-3 px-[25px] text-cod-gray ${
                index === slideIndex || 'opacity-0 invisible'
              }`}
            >
              Explore
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomSlider;