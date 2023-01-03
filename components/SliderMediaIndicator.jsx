import Image from 'next/image';

import pauseImage from '../public/assets/svgs/pause1.svg';
import captureImage from '../public/assets/svgs/capture.svg';

const SlideMediaIndicator = ({ slidesData, slideIndex, nextSlideIndex, pause }) => {
  return (
    <div className='absolute bottom-[78px] grid grid-rows-2 grid-cols-2 w-[45%] h-[120px] grid-flow-row'>
      <div className='w-full h-full relative row-start-1 row-end-3 overflow-hidden'>
        {slidesData.map((slideData, index) =>
          slideData?.image ? (
            <Image
              priority
              key={slideData?.title}
              src={slideData?.image}
              alt={slideData?.title}
              className={`absolute top-0 left-0 transition-all duration-500 ${
                nextSlideIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ) : (
            <video
              muted
              key={slideData?.title}
              poster={slideData?.thumbnail?.src}
              className={`absolute top-0 left-0 transition-all duration-500 ${
                nextSlideIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <source src={slideData?.video} type='video/mp4' />
              Your browser doesn&apos;t support videos
            </video>
          )
        )}
      </div>

      <button
        onClick={pause}
        className='w-1/4 h-full bg-[rgba(255,255,255,0.2)] grid place-items-center'
      >
        <Image
          width={20}
          height={20}
          alt={slidesData[slideIndex]?.image ? 'capture' : 'pause'}
          src={slidesData[slideIndex]?.image ? captureImage : pauseImage}
        />
      </button>

      <p
        className='font-medium bg-shark text-wild-sand flex items-center pl-5'
        style={{ backgroundColor: slidesData[slideIndex]?.themeColor }}
      >
        <span className='font-bold mr-2'>{`${slideIndex + 1}`.padStart(2, '0')}</span>
        {slidesData[slideIndex]?.title}
      </p>
    </div>
  );
};

export default SlideMediaIndicator;
