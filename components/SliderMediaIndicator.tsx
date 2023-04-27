import Image from 'next/image';
import { useContext } from 'react';

import { AppContext } from '@/pages/_app';
import { SlideData } from '@/public/interfaces';

interface Props {
  paused: boolean;
  pause: () => void;
  slideIndex: number;
  zoomImage: () => void;
  nextSlideIndex: number;
  slidesData: SlideData[];
  setSlideIndex: React.Dispatch<React.SetStateAction<number>>;
}

const SlideMediaIndicator: React.FC<Props> = ({
  pause,
  paused,
  zoomImage,
  slidesData,
  slideIndex,
  setSlideIndex,
  nextSlideIndex,
}) => {
  const { MOBILE_BREAKPOINT, screenWidth } = useContext(AppContext);

  return (
    <div className='absolute bottom-[80px] text-[14px] leading-[17px] grid grid-rows-2 grid-cols-2 w-[498px] h-[120px] grid-flow-row laptops:bottom-[58px] laptops:text-[12px] laptops:leading-[15px] laptops:w-[366px] laptops:h-[88px] phones:w-full'>
      <div className='w-full h-full relative row-start-1 row-end-3 overflow-hidden phones:invisible phones:opacity-0'>
        {slidesData.map(({ title, image, thumbnail }, index) => (
          <Image
            fill
            key={title}
            alt={title}
            quality={30}
            priority={true}
            sizes='183w 249w'
            src={image || thumbnail?.src || ''}
            onClick={() => setSlideIndex(nextSlideIndex)}
            className={`absolute top-0 left-0 transition-all duration-500 ${
              nextSlideIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <p className='absolute bottom-5 left-5 text-white font-bold z-[1] laptops:bottom-[10px] laptops:left-[10px]'>
          {(nextSlideIndex + 1).toString().padStart(2, '0')}
        </p>
      </div>

      <button
        onClick={slidesData[slideIndex]?.image ? zoomImage : pause}
        className={`bg-[rgba(255,255,255,0.2)] w-[60px] h-[60px] bg-center bg-no-repeat transition-all duration-500 laptops:w-[44px] laptops:h-[44px] phones:invisible phones:opacity-0 ${
          slidesData[slideIndex]?.image
            ? 'bg-[url(/assets/svgs/capture.svg)]'
            : paused
            ? 'bg-[url(/assets/svgs/play-light.svg)]'
            : 'bg-[url(/assets/svgs/pause1.svg)]'
        }`}
      />

      <p
        style={{
          backgroundColor:
            screenWidth > MOBILE_BREAKPOINT ? slidesData[slideIndex]?.themeColor : 'none',
        }}
        className={`font-normal h-[60px] flex items-center pl-5 transition-all duration-500 laptops:pl-2 laptops:h-[44px] phones:absolute phones:top-[34px] phones:w-full phones:mt-10 phones:justify-center phones:pl-0 phones:text-[16px] phones:leading-5 ${
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
