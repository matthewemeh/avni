import Link from 'next/link';

const ServiceCard = ({ title, description, href }) => {
  return (
    <div className='bg-wild-sand rounded-[12px] w-full h-[150px] pt-4 px-6 text-[14px] leading-[17px] dark:bg-woodsmoke'>
      <p className='text-[18px] leading-[22px]'>{title}</p>
      <p className='font-normal mt-3'>{description}</p>
      <Link href={href} className='block mt-3 font-normal underline'>
        Read more
      </Link>
    </div>
  );
};

export default ServiceCard;
