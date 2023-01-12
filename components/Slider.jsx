import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

import Overlay from './Overlay';
import SliderMedia from './SliderMedia';
import SliderControls from './SliderControls';
import SlideMediaIndicator from './SliderMediaIndicator';

const Slider = ({ slidesData }) => {
  const videoRef = useRef();
  const slidesLength = slidesData.length;
  const [slideIndex, setSlideIndex] = useState(0);
  const [imageZoomed, setImageZoomed] = useState(false);
  const nextSlideIndex = (slideIndex + 1) % slidesLength;

  const changeSlide = n => setSlideIndex(slideIndex + n);

  const onEnded = () => {
    if (slideIndex + 1 < slidesLength) changeSlide(1);
    else setSlideIndex(0);
  };

  const pause = () => videoRef.current?.pause();

  const zoomImage = () => setImageZoomed(true);

  const toMilliseconds = seconds => seconds * 1000;

  useEffect(() => {
    if (imageZoomed) return; // pause slider if image is zoomed in

    const timerDuration = slidesData[slideIndex]?.video
      ? toMilliseconds(videoRef.current.duration)
      : 4000;

    if (slidesData[slideIndex]?.video) videoRef.current.load(); // start video afresh

    const timer = setInterval(() => setSlideIndex((slideIndex + 1) % slidesLength), timerDuration);
    return () => clearInterval(timer);
  }, [slideIndex, imageZoomed]);

  return (
    <section className='w-full relative h-[690px] phones:h-[517px]'>
      <Overlay
        visible={imageZoomed}
        onClick={() => setImageZoomed(false)}
        extraStyles={{ width: '100vw', backgroundColor: 'rgba(0,0,0,0.85)' }}
      />

      {slidesData[slideIndex]?.image && (
        <Image
          alt={slidesData[slideIndex]?.title}
          src={slidesData[slideIndex]?.image}
          className={`fixed z-[60] max-w-[80vw] max-h-[80vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
            imageZoomed || 'opacity-0 invisible'
          }`}
        />
      )}

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
          zoomImage={zoomImage}
          slideIndex={slideIndex}
          slidesData={slidesData}
          setSlideIndex={setSlideIndex}
          nextSlideIndex={nextSlideIndex}
        />
      </div>
    </section>
  );
};

export default Slider;
