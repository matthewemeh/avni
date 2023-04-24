import Link from 'next/link';
import { ExtraStyle } from '@/public/interfaces';
import ArrowRightCircled from './icons/ArrowRightCircled';

interface Props {
  text: string;
  href: string;
  extraStyles?: ExtraStyle;
  extraClassnames?: string;
}

const AllCard: React.FC<Props> = ({ text, href, extraStyles, extraClassnames }) => {
  return (
    <Link
      href={href}
      style={extraStyles}
      className={`${extraClassnames} grid place-items-center bg-azure-radiance`}
    >
      <div className='font-medium text-[25px] leading-8 w-max mx-auto flex flex-col gap-y-[10px] items-center justify-center text-white'>
        <ArrowRightCircled />
        {text}
      </div>
    </Link>
  );
};

export default AllCard;
