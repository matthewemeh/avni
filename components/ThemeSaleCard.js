import Image from 'next/image';

const ThemeSaleCard = ({ themeTitle, themeDescription, themeImage }) => {
  return (
    <div className='relative w-1/2 min-w-[400px] h-[530px] flex-shrink-0 text-white text-[16px]'>
      <Image src={themeImage} quality={60} alt={themeTitle} priority={true} fill />

      <div className='w-full bg-[rgba(0,0,0,0.5)] backdrop-blur-[10px] absolute top-0 p-[30px] flex items-center justify-between'>
        <p className='leading-5 uppercase'>{themeTitle}</p>
        <button className='bg-white rounded-[64px] py-3 px-[25px] text-[12px] leading-4 text-cod-gray'>
          Explore
        </button>
      </div>

      <p className='w-full leading-[30px] text-left bg-[rgba(0,0,0,0.5)] backdrop-blur-[10px] absolute bottom-0 p-[30px]'>
        {themeDescription}
      </p>
    </div>
  );
};

export default ThemeSaleCard;