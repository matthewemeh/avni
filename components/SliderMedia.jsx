import Image from 'next/image';
import { useEffect, useState } from 'react';

import FocalPoint from './FocalPoint';

const SliderMedia = ({
  videoRef,
  slidesData,
  slideIndex,
  onVideoEnded,
  mobileBreakpoint,
  laptopBreakpoint,
}) => {
  const [isMobileView, setIsMobileView] = useState(false);

  //componentDidMount
  useEffect(() => {
    const screenWidth = window.screen.availWidth;
    setIsMobileView(screenWidth <= mobileBreakpoint);
  }, []);

  return (
    <div className='relative h-4/5'>
      {slidesData.map((slideData, index) => (
        <div
          key={index}
          className={`absolute w-full h-full top-0 left-0 transition-all duration-500 ${
            slideIndex === index ? 'opacity-100' : 'opacity-0 invisible'
          }`}
        >
          {slideData?.image ? (
            isMobileView ? (
              <div
                style={{ backgroundImage: `url(${slideData?.image?.src})` }}
                className='w-full h-full bg-[0%_0%] bg-cover bg-no-repeat animate-[image-motion_15s_linear_infinite]'
              />
            ) : (
              <Image
                priority
                key={index}
                src={slideData?.image}
                alt={slideData?.title}
                className='w-full h-full mt-5'
              />
            )
          ) : (
            <video
              muted
              autoPlay
              key={index}
              ref={videoRef}
              onEnded={onVideoEnded}
              poster={slideData?.thumbnail?.src}
              className='w-full h-full mt-5 object-fill'
            >
              <source src={slideData?.video} type='video/mp4' />
              Your broswer does not support videos
            </video>
          )}
        </div>
      ))}

      {slidesData[slideIndex]?.focalPoints.map(({ x, y, title, href }, index) => (
        <FocalPoint
          x={x}
          y={y}
          href={href}
          key={index}
          title={title}
          mobileBreakpoint={mobileBreakpoint}
          laptopBreakpoint={laptopBreakpoint}
        />
      ))}
    </div>
  );
};

export default SliderMedia;
