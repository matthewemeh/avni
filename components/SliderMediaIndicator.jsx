import Image from 'next/image';

const SlideMediaIndicator = ({ slidesData, slideIndex, nextSlideIndex, pause }) => {
  return (
    <div className='absolute bottom-[78px] grid grid-rows-2 grid-cols-2 w-[45%] h-[120px] grid-flow-row'>
      <div className='w-full h-full relative row-start-1 row-end-3 overflow-hidden'>
        {slidesData.map((slideData, index) => (
          <Image
            fill
            key={slideData?.title}
            alt={slideData?.title}
            src={slideData?.image || slideData?.thumbnail?.src}
            className={`absolute top-0 left-0 transition-all duration-500 ${
              nextSlideIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      <button
        onClick={pause}
        className={`bg-[rgba(255,255,255,0.2)] w-1/4 h-full bg-center bg-no-repeat ${
          slidesData[slideIndex]?.image
            ? 'bg-[url(/assets/svgs/capture.svg)]'
            : 'bg-[url(/assets/svgs/pause1.svg)]'
        }`}
      />

      <p
        className='font-medium text-wild-sand flex items-center pl-5 transition-all duration-500'
        style={{ backgroundColor: slidesData[slideIndex]?.themeColor }}
      >
        <span className='font-bold mr-2'>{`${slideIndex + 1}`.padStart(2, '0')}</span>
        {slidesData[slideIndex]?.title}
      </p>
    </div>
  );
};

export default SlideMediaIndicator;
