import { ExtraStyle } from '@/public/interfaces';
import { useEffect, useState, useContext } from 'react';

import { AppContext } from '../pages/_app';

interface Props {
  extraStyles?: ExtraStyle;
}

const HeaderBanner: React.FC<Props> = ({ extraStyles }) => {
  const [textIndex, setTextIndex] = useState(0);
  const { MOBILE_BREAKPOINT, screenWidth } = useContext(AppContext);
  const headerTexts = ['Delivery only', 'Customer Service', 'Campaign'];

  useEffect(() => {
    const timer = setInterval(() => {
      if (screenWidth <= MOBILE_BREAKPOINT) {
        setTextIndex((textIndex + 1) % headerTexts.length);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [textIndex, screenWidth]);

  return (
    <div
      style={extraStyles}
      className='fixed top-0 w-full z-[75] bg-wild-sand text-outer-space text-[12px] leading-[15px] font-medium tracking-[0.36px] h-[45px] flex items-center justify-center gap-[30px] phones:gap-0 phones:grid phones:grid-cols-1 phones:grid-rows-1'
    >
      {headerTexts.map((text, index) => (
        <div
          key={text}
          className={`flex gap-x-[10px] items-center justify-center h-full px-[10px] phones:row-start-1 phones:col-start-1 transition-all duration-700 ${
            screenWidth <= MOBILE_BREAKPOINT && (index === textIndex || 'opacity-0 invisible')
          }`}
        >
          <div className='border-2 w-3 h-3 rounded-full border-azure-radiance' />
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
};

export default HeaderBanner;
