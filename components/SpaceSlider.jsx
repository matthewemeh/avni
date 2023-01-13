import { useEffect, useState } from 'react';

const SpaceSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSlideIndex((slideIndex + 1) % 2), 4000);
    return () => clearInterval(timer);
  }, [slideIndex]);

  return (
    <section className='mt-[200px] phones:mt-[103px]'>
      <h3 className='text-[30px] leading-[45px] text-center laptops:text-[25px]'>Space Ideas</h3>

      <div className='grid grid-cols-[77%_23%] mt-[84px] h-[560px] laptops:h-[410px] phones:grid-cols-1'>
        <div
          className={`bg-no-repeat bg-cover bg-center transition-all duration-500 ${
            slideIndex === 0
              ? 'bg-[url(/assets/pngs/furniture3.png)]'
              : 'bg-[url(/assets/pngs/furniture4.png)]'
          }`}
        >
          <button
            onClick={() => setSlideIndex((slideIndex + 1) % 2)}
            className='block ml-auto w-[61px] min-w-[45px] h-full bg-[url(/assets/svgs/double-caret-right.svg)] bg-no-repeat bg-center bg-[rgba(0,0,0,0.2)] backdrop-blur-[72px] border-r-4 border-white laptops:w-[45px] phones:border-0'
          />
        </div>

        <div
          className={`bg-no-repeat bg-cover bg-center transition-all duration-500 phones:hidden ${
            slideIndex === 0
              ? 'bg-[url(/assets/pngs/furniture4.png)]'
              : 'bg-[url(/assets/pngs/furniture3.png)]'
          }`}
        />
      </div>
    </section>
  );
};

export default SpaceSlider;
