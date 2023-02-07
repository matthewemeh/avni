import Link from 'next/link';
import ArrowRightCircled from './icons/ArrowRightCircled';

const AllCard = ({ text, href, extraStyles, extraClassnames }) => {
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
