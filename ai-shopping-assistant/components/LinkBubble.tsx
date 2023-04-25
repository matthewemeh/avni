import Link from 'next/link';
import { ExtraStyle } from '@/public/interfaces';
import ArrowRightCircled from './icons/ArrowRightCircled';

interface Props {
  text: string;
  href: string;
  extraStyles?: ExtraStyle;
}

const LinkBubble: React.FC<Props> = ({ text, href, extraStyles }) => (
  <Link
    href={href}
    style={extraStyles}
    className='mt-[17px] flex items-center justify-center gap-x-[13px] mx-auto text-[14px] leading-[17px] w-max hover:gap-x-[18px] laptops:font-normal transition-all duration-200'
  >
    <ArrowRightCircled />
    {text}
  </Link>
);

export default LinkBubble;
