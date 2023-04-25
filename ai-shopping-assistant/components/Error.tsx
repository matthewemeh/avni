import { useRef } from 'react';
import LinkBubble from './LinkBubble';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: '500' });

import { addClass, removeClass } from '@/public/utils';

interface Props {
  errorCode: number;
  errorMessage: string;
  alertMessage: string;
  redirectLink: string;
  redirectText: string;
}

const Error: React.FC<Props> = ({
  errorCode,
  errorMessage,
  alertMessage,
  redirectLink,
  redirectText,
}) => {
  const msgRef = useRef<HTMLDivElement>(null);

  const closeMessage = () => {
    removeClass(msgRef.current, 'top-1');
    addClass(msgRef.current, '-top-[200px]');
  };

  return (
    <main className={`relative font-medium ${poppins.className}`}>
      <div className='grid grid-cols-[25%_75%] w-[261px] h-[103px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h1 className='font-semibold text-[22px] leading-[33px] border-r-[1px] border-dove-gray flex items-center'>
          {errorCode}
        </h1>

        <p className='text-[12px] leading-[18px] text-light-dove-gray flex items-center justify-end dark:text-wild-sand'>
          {errorMessage}
        </p>

        <LinkBubble
          href={redirectLink}
          text={redirectText}
          extraStyles={{ gridColumnStart: 1, gridColumnEnd: 3 }}
        />
      </div>

      <div
        ref={msgRef}
        className='text-white flex gap-x-[10px] items-center justify-center transition-all duration-500 text-[16px] leading-5 bg-red-orange rounded-md py-[14px] px-[25px] whitespace-nowrap absolute top-1 left-1/2 -translate-x-1/2 delay-300 animate-[pop-down_800ms_ease-in-out] laptops:w-[85%] laptops:whitespace-normal laptops:text-center phones:w-[90%] phones:text-[14px] phones:leading-[17px] x-small-phones:px-3'
      >
        {alertMessage}
        <button
          onClick={closeMessage}
          className='bg-[url(/assets/svgs/close2.svg)] bg-no-repeat bg-center w-4 h-4 min-w-[16px]'
        />
      </div>
    </main>
  );
};

export default Error;
