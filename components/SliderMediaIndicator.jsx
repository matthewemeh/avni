import Image from 'next/image';
import { useEffect, useState, useContext } from 'react';

import { AppContext } from '../pages/_app';

const SlideMediaIndicator = ({
  pause,
  zoomImage,
  slidesData,
  slideIndex,
  setSlideIndex,
  nextSlideIndex,
}) => {
  const { MOBILE_BREAKPOINT } = useContext(AppContext);
  const [screenWidth, setScreenWidth] = useState(0);

  // componentDidMount
  useEffect(() => setScreenWidth(window.screen.availWidth), []);

  return (
    <div className='absolute bottom-[60px] grid grid-rows-2 grid-cols-2 w-[498px] h-[120px] grid-flow-row phones:w-full'>
      <div className='w-full h-full relative row-start-1 row-end-3 overflow-hidden phones:invisible phones:opacity-0'>
        {slidesData.map((slideData, index) => (
          <Image
            fill
            key={slideData?.title}
            alt={slideData?.title}
            onClick={() => setSlideIndex(nextSlideIndex)}
            src={slideData?.image || slideData?.thumbnail?.src}
            className={`absolute top-0 left-0 transition-all duration-500 ${
              nextSlideIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <p className='absolute bottom-5 left-5 text-white font-bold text-[14px] leading-[17px] z-[1]'>
          {(nextSlideIndex + 1).toString().padStart(2, '0')}
        </p>
      </div>

      <button
        onClick={slidesData[slideIndex]?.image ? zoomImage : pause}
        className={`bg-[rgba(255,255,255,0.2)] w-[60px] h-[60px] bg-center bg-no-repeat transition-all duration-500 phones:invisible phones:opacity-0 ${
          slidesData[slideIndex]?.image
            ? 'bg-[url(/assets/svgs/capture.svg)]'
            : 'bg-[url(/assets/svgs/pause1.svg)]'
        }`}
      />

      <p
        style={{
          backgroundColor:
            screenWidth > MOBILE_BREAKPOINT ? slidesData[slideIndex]?.themeColor : 'none',
        }}
        className={`font-normal h-[60px] flex items-center pl-5 transition-all duration-500 phones:absolute phones:top-24 phones:w-full phones:mt-10 phones:justify-center phones:pl-0 phones:text-[16px] phones:leading-5 ${
          screenWidth > MOBILE_BREAKPOINT ? 'text-white' : 'text-outer-space dark:text-wild-sand'
        }`}
      >
        <span className='font-bold mr-2'>{`${slideIndex + 1}`.padStart(2, '0')}</span>
        {slidesData[slideIndex]?.title}
      </p>
    </div>
  );
};

export default SlideMediaIndicator;
