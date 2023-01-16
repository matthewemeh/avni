import Link from 'next/link';
import { useEffect, useState } from 'react';

import CaretRight from './icons/CaretRight';

const FocalPoint = ({ x, y, title, href, mobileBreakpoint, laptopBreakpoint }) => {
  const [offsetY, setOffsetY] = useState(0);
  const [detailsOpened, setDetailsOpened] = useState(false);

  // componentDidMount
  useEffect(() => {
    const screenWidth = window.screen.availWidth;

    if (screenWidth <= mobileBreakpoint) setOffsetY(7);
    else if (screenWidth <= laptopBreakpoint) setOffsetY(5);
  }, []);

  return (
    <>
      <div
        style={{ top: `${y}%`, left: `${x}%` }}
        onMouseEnter={() => setDetailsOpened(true)}
        onMouseLeave={() => setDetailsOpened(false)}
        className='absolute ripple transition-all duration-500'
      />

      <Link
        href={href}
        onMouseEnter={() => setDetailsOpened(true)}
        onMouseLeave={() => setDetailsOpened(false)}
        style={{ top: `${y + offsetY + 23}%`, left: `${x - 1}%` }}
        className={`absolute z-[60] max-w-max overflow-hidden h-14 py-4 rounded-[34px] text-[14px] leading-[17px] flex items-center justify-center gap-x-[35px] backdrop-blur-2xl text-outer-space bg-wild-sand transition-all duration-500 ${
          detailsOpened ? 'w-[300px] pr-[10px]' : 'w-0'
        }`}
      >
        <p className='ml-[15px] whitespace-nowrap uppercase'>{title}</p>
        <CaretRight />
      </Link>
    </>
  );
};

export default FocalPoint;
