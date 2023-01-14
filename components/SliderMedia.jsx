import Image from 'next/image';

const SliderMedia = ({ slidesData, onVideoEnded, videoRef, slideIndex }) => {
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
            <Image
              priority
              key={index}
              src={slideData?.image}
              alt={slideData?.title}
              className='w-full h-full mt-5'
            />
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

      {slidesData[slideIndex]?.focalPoints.map(({ x, y }, index) => (
        <div
          key={index}
          style={{ top: `${y}%`, left: `${x}%` }}
          className='absolute ripple transition-all duration-500'
        />
      ))}
    </div>
  );
};

export default SliderMedia;
