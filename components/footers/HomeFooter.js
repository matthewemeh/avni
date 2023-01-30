import Link from 'next/link';

import Logo from '../icons/Logo';
import Globe from '../icons/Globe';

import FooterDropdown from '../FooterDropdown';

const HomeFooter = () => {
  const currentDate = new Date();
  const serviceOptions = [
    { option: 'Customer Service', href: '/' },
    { option: 'My orders', href: '/' },
    { option: 'Returns & Claims', href: '/' },
    { option: 'Delivery / Pickup system', href: '/' },
    { option: 'Request stock availability', href: '/' },
    { option: 'FAQ', href: '/' },
    { option: 'Contact us', href: '/' },
  ];

  const aboutOptions = [
    { option: 'This is Avni', href: '/' },
    { option: 'Campaign', href: '/' },
    { option: 'Ideas and Inspiration', href: '/' },
    { option: 'Working at Avni Furniture', href: '/' },
    { option: 'Avni News & Update', href: '/' },
  ];

  return (
    <footer className='bg-wild-sand pt-[100px] pb-[50px] px-[22%] -mx-[21.4%] overflow-hidden dark:bg-woodsmoke phones:pt-[84px]'>
      <div className='mb-[67px] laptops:mb-[50px]'>
        <Logo />
      </div>

      <FooterDropdown expandedHeight={400} options={serviceOptions} title='Customer Services' />
      <FooterDropdown expandedHeight={330} options={aboutOptions} title='About Avni Furniture' />

      <div className='pt-[40px] pb-[45px] border-y-[1px] border-alto-light flex justify-between flex-wrap gap-y-[30px] gap-x-5 text-[12px] tablets:justify-start'>
        <div className='flex gap-x-3 tablets:w-full'>
          <Link
            href='/'
            className='w-[45px] h-[45px] border-[1px] border-alto-light rounded-full grid place-items-center laptops:w-[39px] laptops:h-[39px]'
          >
            <span className='w-5 h-5 bg-alto rounded-sm' />
          </Link>
          <Link
            href='/'
            className='w-[45px] h-[45px] border-[1px] border-alto-light rounded-full grid place-items-center laptops:w-[39px] laptops:h-[39px]'
          >
            <span className='w-5 h-5 bg-alto rounded-sm' />
          </Link>
          <Link
            href='/'
            className='w-[45px] h-[45px] border-[1px] border-alto-light rounded-full grid place-items-center laptops:w-[39px] laptops:h-[39px]'
          >
            <span className='w-5 h-5 bg-alto rounded-sm' />
          </Link>
          <Link
            href='/'
            className='w-[45px] h-[45px] border-[1px] border-alto-light rounded-full grid place-items-center laptops:w-[39px] laptops:h-[39px]'
          >
            <span className='w-5 h-5 bg-alto rounded-sm' />
          </Link>
        </div>

        <Link
          href='/'
          className='leading-[15px] inline-block py-[15px] px-5 rounded-[30px] border-[1px] border-alto-light laptops:leading-[18px]'
        >
          Flutterwave
        </Link>

        <button className='flex items-center justify-center whitespace-nowrap gap-x-[10px] font-semibold leading-4 rounded-[30px] px-5 py-3 border-alto-light border-[1px]'>
          <Globe /> Change country
        </button>
      </div>

      <div className='mt-[30px] flex items-center whitespace-nowrap justify-center flex-wrap gap-5 font-arial text-firefly font-normal text-[12px] leading-[18px] dark:text-white tablets:justify-start'>
        <p className=''>&copy; {currentDate.getFullYear()}. Avni.meb from Avniverse, Inc.</p>
        <Link href='/'>Privacy Policy</Link>
        <Link href='/'>Cookie Policy</Link>
        <Link href='/'>Terms and Conditions</Link>
      </div>
    </footer>
  );
};

export default HomeFooter;
