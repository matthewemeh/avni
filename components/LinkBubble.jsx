import Link from 'next/link';
import ArrowRightCircled from '../components/icons/ArrowRightCircled';

const LinkBubble = ({ text, href }) => (
  <Link
    href={href}
    className='mt-4 flex items-center justify-center gap-x-[13px] mx-auto text-[14px] leading-4 w-max hover:gap-x-[18px] transition-all duration-200'
  >
    <ArrowRightCircled />
    {text}
  </Link>
);

export default LinkBubble;
