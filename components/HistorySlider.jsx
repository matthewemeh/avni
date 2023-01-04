import { useState, useEffect } from 'react';

const HistorySlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const furnitures = [
    {
      text: 'living room',
      className:
        'bg-[url(/assets/pngs/room1.png)] bg-cover bg-no-repeat bg-center h-full transition-all duration-500',
    },
    {
      text: 'living room',
      className:
        'bg-[url(/assets/pngs/room2.png)] bg-cover bg-no-repeat bg-center h-full transition-all duration-500',
    },
    {
      text: 'living room',
      className:
        'bg-[url(/assets/pngs/room3.png)] bg-cover bg-no-repeat bg-center h-full transition-all duration-500',
    },
    {
      text: 'living room',
      className:
        'bg-[url(/assets/pngs/room4.png)] bg-cover bg-no-repeat bg-center h-full transition-all duration-500',
    },
    {
      text: 'living room',
      className:
        'bg-[url(/assets/pngs/room5.png)] bg-cover bg-no-repeat bg-center h-full transition-all duration-500',
    },
    {
      text: 'living room',
      className:
        'bg-[url(/assets/pngs/room6.png)] bg-cover bg-no-repeat bg-center h-full transition-all duration-500',
    },
    {
      text: 'avni',
      className:
        'bg-[url(/assets/pngs/room7.png)] bg-cover bg-no-repeat bg-center h-full transition-all duration-500',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => setSlideIndex((slideIndex + 1) % furnitures.length), 4000);
    return () => clearInterval(timer);
  }, [slideIndex]);

  return (
    <section className='mt-52 tracking-[0.36px] font-medium'>
      <h3 className='text-[30px] leading-[45px] text-center'>
        A run through the furniture history
      </h3>

      <div className='mt-20 w-full h-[331px] flex font-bold text-[18px] leading-[100%]'>
        {furnitures.map(({ text, className }, index) => (
          <div
            key={className}
            className={className}
            style={{ width: slideIndex === index ? '50%' : `${50 / furnitures.length}%` }}
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
