import Image, { StaticImageData } from 'next/image';

interface Props {
  themeTitle: string;
  themeDescription: string;
  themeImage: StaticImageData;
}

const ThemeSaleCard: React.FC<Props> = ({ themeTitle, themeDescription, themeImage }) => {
  return (
    <div className='relative w-1/2 min-w-[400px] max-w-[500px] h-[630px] flex-shrink-0 text-white text-[16px] phones:h-[550px] small-phones:min-w-full small-phones:max-w-[none]'>
      <Image src={themeImage} quality={60} alt={themeTitle} priority={true} fill />

      <div className='w-full bg-[rgba(0,0,0,0.5)] backdrop-blur-[10px] absolute top-0 p-[30px] flex items-center justify-between laptops:p-[25px]'>
        <p className='leading-5 uppercase whitespace-nowrap text-ellipsis overflow-hidden small-phones:max-w-[170px]'>
          {themeTitle}
        </p>
        <button className='bg-white rounded-[64px] py-3 px-[25px] text-[12px] leading-4 text-cod-gray'>
          Explore
        </button>
      </div>

      <p className='w-full leading-[30px] text-left bg-[rgba(0,0,0,0.5)] backdrop-blur-[10px] absolute bottom-0 p-[30px] laptops:p-[25px]'>
        {themeDescription}
      </p>
    </div>
  );
};

export default ThemeSaleCard;
