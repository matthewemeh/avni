import { useState, useEffect, useContext } from 'react';

import { AppContext } from '../pages/_app';

const HistorySlider = () => {
  const { MOBILE_BREAKPOINT } = useContext(AppContext);
  const [screenWidth, setScreenWidth] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => setScreenWidth(window.screen.availWidth), []);

  const furnitures = [
    {
      text: 'living room',
      bgImage: 'bg-[url(/assets/pngs/room1.png)]',
    },
    {
      text: 'living room',
      bgImage: 'bg-[url(/assets/pngs/room2.png)]',
    },
    {
      text: 'living room',
      bgImage: 'bg-[url(/assets/pngs/room3.png)]',
    },
    {
      text: 'living room',
      bgImage: 'bg-[url(/assets/pngs/room4.png)]',
    },
    {
      text: 'living room',
      bgImage: 'bg-[url(/assets/pngs/room5.png)]',
    },
    {
      text: 'living room',
      bgImage: 'bg-[url(/assets/pngs/room6.png)]',
    },
    {
      text: 'avni',
      bgImage: 'bg-[url(/assets/pngs/room7.png)]',
    },
  ];
  const inactiveDivWidth = `${50 / (furnitures.length - 1)}%`;

  useEffect(() => {
    const timer = setInterval(() => setSlideIndex((slideIndex + 1) % furnitures.length), 4000);
    return () => clearInterval(timer);
  }, [slideIndex]);

  return (
    <section className='mt-[200px] phones:mt-[103px]'>
      <h3 className='text-[30px] leading-[45px] text-center laptops:text-[25px] phones:max-w-[90%] phones:mx-auto'>
        A run through the furniture history
      </h3>

      <div className='mt-[84px] w-full h-[331px] flex font-bold text-[18px] leading-[100%] phones:relative'>
        {furnitures.map(({ text, bgImage }, index) => (
          <div
            key={index}
            style={{
              width:
                screenWidth > MOBILE_BREAKPOINT
                  ? slideIndex === index
                    ? '50%'
                    : inactiveDivWidth
                  : '100%',
            }}
            className={`${bgImage} bg-cover bg-no-repeat bg-center h-full transition-all duration-500 phones:absolute phones:top-0 phones:left-0 ${
              slideIndex === index ? 'phones:opacity-100' : 'phones:opacity-0'
            }`}
          >
            <p
              className={`sideways-lr text-white -rotate-180 capitalize w-full h-full transition-all duration-500 ${
                slideIndex === index ? 'text-center pt-0 px-[5%]' : 'text-left pt-8 px-[25%]'
              }`}
            >
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HistorySlider;
