import Link from 'next/link';
import ArrowRightCircled from '../components/icons/ArrowRightCircled';

const LinkBubble = ({ text, href }) => (
  <Link
    href={href}
    className='mt-4 flex items-center justify-center gap-x-[13px] mx-auto text-[14px] leading-[17px] w-max hover:gap-x-[18px] laptops:font-normal transition-all duration-200'
  >
    <ArrowRightCircled />
    {text}
  </Link>
);

export default LinkBubble;
