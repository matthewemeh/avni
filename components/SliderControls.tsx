import CaretRight from './icons/CaretRight';

interface Props {
  slideIndex: number;
  slidesLength: number;
  changeSlide: (n: number) => void;
}

const SliderControls: React.FC<Props> = ({ slideIndex, slidesLength, changeSlide }) => {
  return (
    <div className='flex w-[498px] items-center laptops:w-[366px] phones:relative phones:w-full'>
      <p className='font-bold mt-20 phones:absolute phones:left-[calc(50%-113px)] phones:-top-[6px]'>
        01
      </p>
      <div className='mt-20 bg-alto-light h-[1.5px] w-[192px] mx-3 rounded laptops:w-[128px] phones:w-44 phones:mx-0 phones:absolute phones:left-[calc(50%-89px)] phones:top-0'>
        <div
          style={{ marginLeft: `${(slideIndex * 100) / slidesLength}%` }}
          className='bg-azure-radiance bg-opacity-40 w-1/3 h-full rounded-sm transition-all duration-500 ease-in-out'
        />
      </div>
      <p className='font-bold mt-20 phones:absolute phones:left-[calc(50%+100px)] phones:-top-[6px]'>
        {`${slidesLength}`.padStart(2, '0')}
      </p>

      <button
        onClick={() => changeSlide(-1)}
        disabled={slideIndex === 0}
        className='ml-[30%] mt-20 -rotate-180 disabled:opacity-40 transition-all duration-500 laptops:ml-[28%] phones:ml-0 phones:absolute phones:left-5 phones:z-[1] phones:-top-[88px]'
      >
        <CaretRight />
      </button>

      <button
        onClick={() => changeSlide(1)}
        disabled={slideIndex + 1 === slidesLength}
        className='ml-auto mt-20 disabled:opacity-40 transition-all duration-500 phones:absolute phones:right-5 phones:z-[1] phones:-top-[88px]'
      >
        <CaretRight />
      </button>
    </div>
  );
};

export default SliderControls;
