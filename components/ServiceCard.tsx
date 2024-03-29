import Link from 'next/link';

interface Props {
  href: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<Props> = ({ title, description, href }) => {
  return (
    <div className='bg-wild-sand rounded-xl w-full h-full pt-4 px-6 font-normal text-[14px] leading-[17px] dark:bg-woodsmoke laptops:text-[12px]'>
      <p className='font-medium text-[18px] leading-[22px] laptops:text-[14px] laptops:leading-[17px]'>
        {title}
      </p>
      <p className='my-3 laptops:leading-[22px]'>{description}</p>
      <Link href={href} className='block underline laptops:leading-[15px]'>
        Read more
      </Link>
    </div>
  );
};

export default ServiceCard;
