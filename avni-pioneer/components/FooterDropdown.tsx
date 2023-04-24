import Link from 'next/link';
import { useState } from 'react';

import CaretDown from './icons/CaretDown';

import { ExtraStyle, Option } from '@/public/interfaces';

interface Props {
  title: string;
  options: Option[];
  expandedHeight?: number;
  extraStyles?: ExtraStyle;
}

const FooterDropdown: React.FC<Props> = ({ title, options, expandedHeight = 135, extraStyles }) => {
  const [opened, setOpened] = useState(false);

  return (
    <div
      style={{ ...extraStyles, height: opened ? `${expandedHeight}px` : '135px' }}
      className='max-h-max border-t-[1px] overflow-hidden transition-all duration-500 capitalize text-[14px] leading-[18px] text-black border-alto-light dark:text-white laptops:text-[12px]'
    >
      <div
        onClick={() => setOpened(!opened)}
        className='flex justify-between cursor-pointer pt-10 pb-[67px] h-[135px] laptops:pb-[50px]'
      >
        <p>{title}</p>
        <div
          className={`transition-all duration-[15ms] text-cod-gray dark:text-white ${
            opened && '-rotate-180'
          }`}
        >
          <CaretDown />
        </div>
      </div>

      <div className='text-[12px] flex flex-col gap-y-5 font-normal text-black dark:text-white'>
        {options.map(({ option, href }) => (
          <Link key={option} href={href} className='w-max'>
            {option}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterDropdown;
