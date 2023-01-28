import Link from 'next/link';

const ServiceCard = ({ title, description, href }) => {
  return (
    <div className='bg-wild-sand rounded-[12px] w-full h-full pt-4 px-6 font-normal text-[14px] leading-[17px] dark:bg-woodsmoke laptops:text-[12px]'>
      <p className='font-medium text-[18px] leading-[22px] laptops:text-[14px] laptops:leading-[17px]'>
        {title}
      </p>
      <p className='mt-3 laptops:leading-[22px]'>{description}</p>
      <Link href={href} className='block mt-3 underline laptops:leading-[15px]'>
        Read more
      </Link>
    </div>
  );
};

export default ServiceCard;
