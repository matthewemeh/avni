import Image from 'next/image';

const SliderMedia = ({ slideData, onEnded, videoRef }) => {
  return (
    <div className='relative h-4/5'>
      {slideData?.image ? (
        <Image className='w-full h-full' src={slideData?.image} alt={slideData?.title} priority />
      ) : (
        <video
          muted
          autoPlay
          ref={videoRef}
          onEnded={onEnded}
          className='w-full h-full'
          poster={slideData?.thumbnail?.src}
        >
          <source src={slideData?.video} type='video/mp4' />
          Your broswer doesn&apos;t support videos
        </video>
      )}

      {slideData?.focalPoints.map(({ x, y }, index) => (
        <div key={index} className='absolute ripple' style={{ top: `${y}%`, left: `${x}%` }} />
      ))}
    </div>
  );
};

export default SliderMedia;
