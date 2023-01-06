import CaretRight from './icons/CaretRight';

const SliderControls = ({ slideIndex, slidesLength, changeSlide }) => {
  return (
    <>
      <p className='font-bold mt-20 phones:relative phones:right-[10vw]'>01</p>
      <div className='mt-20 bg-alto-light h-1 w-1/5 mx-3 rounded phones:w-44 phones:mx-0 phones:relative phones:right-[7vw]'>
        <div
          style={{ marginLeft: `${(slideIndex * 100) / slidesLength}%` }}
          className='bg-azure-radiance w-1/3 h-full rounded-sm transition-all duration-500 ease-in-out'
        />
      </div>
      <p className='font-bold mt-20 phones:relative phones:right-[5vw]'>
        {`${slidesLength}`.padStart(2, '0')}
      </p>

      <button
        onClick={() => changeSlide(-1)}
        disabled={slideIndex === 0}
        className='ml-[11%] mt-20 -rotate-180 disabled:opacity-40 transition-all duration-500 phones:relative phones:bottom-[43%] phones:right-[70%] phones:z-[1]'
      >
        <CaretRight />
      </button>

      <button
        onClick={() => changeSlide(1)}
        disabled={slideIndex + 1 === slidesLength}
        className='ml-[4%] mt-20 disabled:opacity-40 transition-all duration-500 phones:relative phones:bottom-[43%] phones:right-[15%] phones:z-[1]'
      >
        <CaretRight />
      </button>
    </>
  );
};

export default SliderControls;
