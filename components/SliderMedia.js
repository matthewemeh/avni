import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Overlay from './Overlay';

const SliderMedia = ({
  videoRef,
  slidesData,
  slideIndex,
  imageZoomed,
  onVideoEnded,
  isMobileView,
  detailsOpened,
  setImageZoomed,
  setDetailsOpened,
}) => {
  const router = useRouter();

  const closeDetails = () => {
    setImageZoomed(false);
    setDetailsOpened(false);
  };

  const goToPage = href => {
    setDetailsOpened(false);

    if (imageZoomed) {
      setImageZoomed(false);
      setTimeout(() => router.push(href), 1000);
    } else router.push(href);
  };

  useEffect(() => {
    if (detailsOpened || imageZoomed) window.addEventListener('scroll', closeDetails);
    else window.removeEventListener('scroll', closeDetails);
  }, [detailsOpened, imageZoomed]);

  return (
    <div
      className={`h-4/5 ${
        imageZoomed ? 'w-screen h-screen fixed z-[70] transition-all duration-500' : 'relative'
      }`}
    >
      {slidesData.map((slideData, index) => (
        <div
          key={index}
          className={`absolute w-full h-full top-0 left-0 transition-all duration-500 ${
            slideIndex === index || 'opacity-0 invisible'
          }`}
        >
          {slideData?.image ? (
            isMobileView ? (
              <div
                style={{ backgroundImage: `url(${slideData?.image?.src})` }}
                className={`w-full h-full bg-[0%_0%] bg-cover bg-no-repeat ${
                  slideIndex === index && 'animate-[image-motion_40s_linear_infinite]'
                }`}
              />
            ) : (
              <Image
                key={index}
                priority={true}
                src={slideData?.image}
                alt={slideData?.title}
                quality={imageZoomed ? 100 : 90}
                onClick={() => {
                  if (imageZoomed) setDetailsOpened(false);
                }}
                className={`w-full h-full ${
                  imageZoomed &&
                  'fixed z-[70] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[80vw] max-h-[80vh]'
                }`}
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
              className='w-full h-full object-fill'
            >
              <source src={slideData?.video} type='video/mp4' />
              Your broswer does not support videos
            </video>
          )}
        </div>
      ))}

      {/* ripple dot in first slide image */}
      <div
        onClick={() => goToPage('/home')}
        className={`transition-all duration-500 text-white cursor-pointer whitespace-nowrap text-[14px] leading-[17px] font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-x-6 ${
          slideIndex === 0 || 'opacity-0 invisible'
        } ${imageZoomed ? 'fixed z-[72]' : 'absolute z-[60]'}`}
      >
        <div className='ripple' />
        Begin exploring
      </div>

      {/* ripple dot in second slide image */}
      <div
        onMouseEnter={() => setDetailsOpened(true)}
        className={`ripple transition-all duration-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
          slideIndex === 2 || 'opacity-0 invisible'
        } ${imageZoomed ? 'fixed z-[72]' : 'absolute z-[60]'}`}
      />

      <div
        className={`uppercase whitespace-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%-65px)] py-[19px] bg-white text-light-dove-gray text-[14px] leading-[17px] flex items-center justify-center gap-x-[50px] gap-y-[30px] rounded-[34px] overflow-hidden transition-all duration-500 max-w-max phones:flex-col phones:text-black phones:-translate-y-[calc(50%-105px)] ${
          detailsOpened ? 'w-[450px]' : 'w-0'
        } ${slideIndex === 2 || 'opacity-0 invisible'} ${
          imageZoomed ? 'fixed z-[72]' : 'absolute z-[60]'
        }`}
      >
        {slidesData[slideIndex]?.focalPoints.map(({ title, href }) => (
          <p
            onClick={() => goToPage(href)}
            className='cursor-pointer text-center first:ml-[37px] last:mr-[37px] phones:first:ml-0 phones:last:mr-0 phones:px-[37px] phones:text-left phones:w-full'
            key={title}
          >
            {title}
          </p>
        ))}
      </div>

      {/* Overlay for unzoomed image */}
      <Overlay
        onClick={closeDetails}
        visible={detailsOpened}
        extraStyles={{ zIndex: '55', width: '100vw', background: 'none' }}
      />

      {/* Overlay for zoomed image */}
      <Overlay
        visible={imageZoomed}
        onClick={() => {
          setImageZoomed(false);
          setDetailsOpened(false);
        }}
        extraStyles={{
          zIndex: '67',
          width: '100vw',
          transitionProperty: 'all',
          backgroundColor: 'rgba(0,0,0,0.7)',
        }}
      />
    </div>
  );
};

export default SliderMedia;
