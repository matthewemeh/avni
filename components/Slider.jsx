import { useRef, useState, useEffect } from 'react';

import SliderMedia from './SliderMedia';
import SliderControls from './SliderControls';
import SlideMediaIndicator from './SliderMediaIndicator';

const Slider = ({ slidesData }) => {
  const videoRef = useRef();
  const slidesLength = slidesData.length;
  const [slideIndex, setSlideIndex] = useState(0);
  const nextSlideIndex = (slideIndex + 1) % slidesLength;

  const changeSlide = n => setSlideIndex(slideIndex + n);

  const onEnded = () => {
    if (slideIndex + 1 < slidesLength) changeSlide(1);
    else setSlideIndex(0);
  };

  const pause = () => videoRef.current?.pause();

  useEffect(() => {
    const timer = setInterval(() => setSlideIndex((slideIndex + 1) % slidesLength), 4000);
    return () => clearInterval(timer);
  }, [slideIndex]);

  return (
    <section className='w-full relative h-[590px] phones:h-[517px]'>
      <SliderMedia
        onEnded={onEnded}
        videoRef={videoRef}
        slidesData={slidesData}
        slideIndex={slideIndex}
      />

      <div className='controls h-1/5 flex items-center justify-end relative text-[14px] leading-[17px] laptops:text-[12px] laptops:leading-[15px]'>
        <SliderControls
          slideIndex={slideIndex}
          changeSlide={changeSlide}
          slidesLength={slidesLength}
        />

        <SlideMediaIndicator
          pause={pause}
          slideIndex={slideIndex}
          slidesData={slidesData}
          nextSlideIndex={nextSlideIndex}
        />
      </div>
    </section>
  );
};

export default Slider;
