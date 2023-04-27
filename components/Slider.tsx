import { useRef, useState, useEffect, useContext } from 'react';

import SliderMedia from './SliderMedia';
import SliderControls from './SliderControls';
import SlideMediaIndicator from './SliderMediaIndicator';

import { mod } from '@/public/utils';

import { AppContext } from '@/pages/_app';
import { SlideData } from '@/public/interfaces';

interface Props {
  slidesData: SlideData[];
}

const Slider: React.FC<Props> = ({ slidesData }) => {
  const [paused, setPaused] = useState(false);
  const slidesLength: number = slidesData.length;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobileView, setIsMobileView] = useState(false);

  const [slideIndex, setSlideIndex] = useState(0);
  const [imageZoomed, setImageZoomed] = useState(false);
  const nextSlideIndex: number = (slideIndex + 1) % slidesLength;
  const { screenWidth, MOBILE_BREAKPOINT } = useContext(AppContext);

  const [detailsOpened, setDetailsOpened] = useState(false);

  const changeSlide = (n: number) => {
    const newSlideIndex = mod(slideIndex + n, slidesLength);

    if (!imageZoomed && !detailsOpened) setSlideIndex(newSlideIndex);
  };

  const onVideoEnded = () => changeSlide(1);

  const togglePause = () => {
    if (paused) videoRef.current?.play();
    else videoRef.current?.pause();

    setPaused(!paused);
  };

  const zoomImage = () => setImageZoomed(true);

  //componentDidMount
  useEffect(() => setIsMobileView(screenWidth <= MOBILE_BREAKPOINT), []);

  useEffect(() => {
    const isVideo = slidesData[slideIndex]?.video;
    const timerDuration = isMobileView ? 30000 : 4000;

    if (isVideo) {
      setPaused(false);
      videoRef.current?.load();

      // pause slider if current slide is a video
      return;
    }

    const timer = setInterval(() => changeSlide(1), timerDuration);
    return () => clearInterval(timer);
  }, [slideIndex, imageZoomed, isMobileView, detailsOpened]);

  return (
    <section className='w-full relative h-[690px] laptops:h-[509px] phones:h-[517px]'>
      <SliderMedia
        videoRef={videoRef}
        slidesData={slidesData}
        slideIndex={slideIndex}
        imageZoomed={imageZoomed}
        isMobileView={isMobileView}
        onVideoEnded={onVideoEnded}
        detailsOpened={detailsOpened}
        setImageZoomed={setImageZoomed}
        setDetailsOpened={setDetailsOpened}
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
