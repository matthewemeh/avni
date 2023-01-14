import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

import Overlay from './Overlay';
import SliderMedia from './SliderMedia';
import SliderControls from './SliderControls';
import SlideMediaIndicator from './SliderMediaIndicator';

import { mod } from '../public/utils';

const Slider = ({ slidesData }) => {
  const videoRef = useRef();
  const slidesLength = slidesData.length;
  const [paused, setPaused] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [imageZoomed, setImageZoomed] = useState(false);
  const nextSlideIndex = (slideIndex + 1) % slidesLength;

  const changeSlide = n => setSlideIndex(mod(slideIndex + n, slidesLength));

  const onVideoEnded = () => changeSlide(1);

  const togglePause = () => {
    if (paused) videoRef.current.play();
    else videoRef.current.pause();

    setPaused(!paused);
  };

  const zoomImage = () => setImageZoomed(true);

  useEffect(() => {
    const isVideo = slidesData[slideIndex]?.video;

    if (isVideo) {
      setPaused(false);
      videoRef.current.load();
    }

    // pause slider if image is zoomed in or current slide is a video
    if (imageZoomed || isVideo) return;

    const timer = setInterval(() => changeSlide(1), 4000);
    return () => clearInterval(timer);
  }, [slideIndex, imageZoomed]);

  return (
    <section className='w-full relative h-[690px] laptops:h-[509px] phones:h-[517px]'>
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
        videoRef={videoRef}
        slidesData={slidesData}
        slideIndex={slideIndex}
        onVideoEnded={onVideoEnded}
      />

      <div className='controls h-1/5 flex items-center justify-end relative text-[14px] leading-[17px] laptops:text-[12px] laptops:leading-[15px]'>
        <SliderControls
          slideIndex={slideIndex}
          changeSlide={changeSlide}
          slidesLength={slidesLength}
        />

        <SlideMediaIndicator
          paused={paused}
          pause={togglePause}
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
