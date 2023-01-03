import { useRef, useState, useEffect } from 'react';

import SliderMedia from './SliderMedia';
import SliderControls from './SliderControls';
import SlideMediaIndicator from './SliderMediaIndicator';

const Slider = ({ slidesData }) => {
  const videoRef = useRef();
  const slidesLength = slidesData.length;
  const [slideIndex, setSlideIndex] = useState(0);
  const [nextSlideIndex, setNextSlideIndex] = useState(1);

  const changeSlide = n => setSlideIndex(slideIndex + n);

  const onEnded = () => {
    if (slideIndex + 1 < slidesLength) changeSlide(1);
    else setSlideIndex(0);
  };

  const pause = () => videoRef.current?.pause();

  useEffect(() => setNextSlideIndex((slideIndex + 1) % slidesLength), [slideIndex]);

  useEffect(() => {
    const timer = setInterval(() => setSlideIndex((slideIndex + 1) % slidesLength), 4000);
    return () => clearInterval(timer);
  }, [slideIndex]);

  return (
    <section className='w-full h-[690px] relative'>
      <SliderMedia
        onEnded={onEnded}
        videoRef={videoRef}
        slidesData={slidesData}
        slideIndex={slideIndex}
      />

      <div className='controls h-1/5 flex items-center justify-end relative tracking-[0.36px] text-[14px] leading-4'>
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
