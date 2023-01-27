import Link from 'next/link';
import { useState } from 'react';

import CaretDown from './icons/CaretDown';

const FooterDropdown = ({ title, options, extraStyles }) => {
  const [opened, setOpened] = useState(false);

  return (
    <div
      style={extraStyles}
      className={`max-h-max border-t-[1px] overflow-hidden transition-all duration-500 capitalize text-[14px] leading-[18px] text-black border-alto-light dark:text-white ${
        opened ? 'h-[400px]' : 'h-[135px]'
      }`}
    >
      <div
        onClick={() => setOpened(!opened)}
        className='flex justify-between cursor-pointer pt-[43px] pb-[70px] h-[135px]'
      >
        <p>{title}</p>

        <div
          className={`transition-all duration-500 text-cod-gray dark:text-white ${
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
