import Image from 'next/image';
import { useRef, useState, useEffect, useContext } from 'react';

import Overlay from './Overlay';
import FocalPoint from './FocalPoint';
import SliderMedia from './SliderMedia';
import SliderControls from './SliderControls';
import SlideMediaIndicator from './SliderMediaIndicator';

import { mod } from '../public/utils';

import { AppContext } from '../pages/_app';

const Slider = ({ slidesData }) => {
  const videoRef = useRef();
  const slidesLength = slidesData.length;
  const [paused, setPaused] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const [slideIndex, setSlideIndex] = useState(0);
  const [imageZoomed, setImageZoomed] = useState(false);
  const nextSlideIndex = (slideIndex + 1) % slidesLength;
  const { LAPTOP_BREAKPOINT, MOBILE_BREAKPOINT } = useContext(AppContext);

  const changeSlide = n => {
    const newSlideIndex = mod(slideIndex + n, slidesLength);
    if (!imageZoomed) setSlideIndex(newSlideIndex);
  };

  const onVideoEnded = () => changeSlide(1);

  const togglePause = () => {
    if (paused) videoRef.current.play();
    else videoRef.current.pause();

    setPaused(!paused);
  };

  const zoomImage = () => setImageZoomed(true);

  //componentDidMount
  useEffect(() => {
    const screenWidth = window.screen.availWidth;
    setIsMobileView(screenWidth <= MOBILE_BREAKPOINT);
  }, []);

  useEffect(() => {
    const isVideo = slidesData[slideIndex]?.video;
    const timerDuration = isMobileView ? 30000 : 4000;

    if (isVideo) {
      setPaused(false);
      videoRef.current.load();
    }

    // pause slider if current slide is a video
    if (isVideo) return;

    const timer = setInterval(() => changeSlide(1), timerDuration);
    return () => clearInterval(timer);
  }, [slideIndex, imageZoomed, isMobileView]);

  return (
    <section className='w-full relative h-[690px] laptops:h-[509px] phones:h-[517px]'>
      <Overlay
        visible={imageZoomed}
        onClick={() => setImageZoomed(false)}
        extraStyles={{ width: '100vw', backgroundColor: 'rgba(0,0,0,0.85)' }}
      />

      {slidesData[slideIndex]?.image && (
        <div
          className={`fixed z-[60] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
            imageZoomed || 'opacity-0 invisible'
          }`}
        >
          <Image
            priority={true}
            alt={slidesData[slideIndex]?.title}
            src={slidesData[slideIndex]?.image}
            className='max-w-[80vw] max-h-[80vh]'
          />

          {slidesData[slideIndex]?.focalPoints.map(({ x, y, title, href }, index) => (
            <FocalPoint
              x={x}
              y={y}
              href={href}
              key={index}
              title={title}
              mobileBreakpoint={MOBILE_BREAKPOINT}
              laptopBreakpoint={LAPTOP_BREAKPOINT}
            />
          ))}
        </div>
      )}

      <SliderMedia
        videoRef={videoRef}
        slidesData={slidesData}
        slideIndex={slideIndex}
        isMobileView={isMobileView}
        onVideoEnded={onVideoEnded}
        mobileBreakpoint={MOBILE_BREAKPOINT}
        laptopBreakpoint={LAPTOP_BREAKPOINT}
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
