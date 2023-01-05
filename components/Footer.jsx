import Link from 'next/link';

import Logo from './Logo';

import Globe from './icons/Globe';
import Email from './icons/Email';
import Youtube from './icons/Youtube';
import Instagram from './icons/Instagram';

const Footer = () => {
  const currentDate = new Date();
  const EMAIL = 'furniture@avniverse.com';

  return (
    <footer className='bg-wild-sand pt-[100px] -mx-[19.4%] px-[20%] overflow-hidden dark:bg-woodsmoke'>
      <div className='w-full text-[12px] leading-[30px] grid grid-cols-5 gap-x-[5%] pb-[100px] border-alto-light border-b-[1px] dark:border-wild-sand laptops:grid-rows-2 laptops:grid-cols-3 laptops:gap-y-16'>
        <div>
          <Logo />
          <p className='mt-[50px] text-[12px] leading-[18px]'>Follow Us</p>
          <div className='mt-3 flex gap-x-[10px]'>
            <Link
              target='_blank'
              href={`mailto:${EMAIL}`}
              className='w-8 h-8 grid place-items-center rounded-full bg-outer-space text-white dark:bg-white dark:text-outer-space'
            >
              <Email />
            </Link>
            <Link
              href='/tiktoklink.com'
              className='w-8 h-8 grid place-items-center rounded-full bg-outer-space text-white dark:bg-white dark:text-outer-space'
            >
              <Instagram />
            </Link>
            <Link
              href='/youtubelink.com'
              className='w-8 h-8 grid place-items-center rounded-full bg-outer-space text-white dark:bg-white dark:text-outer-space'
            >
              <Youtube />
            </Link>
          </div>
        </div>

        <div className='grid grid-rows-[auto]'>
          <p className='font-semibold text-[16px] leading-6'>Things we care about</p>
          <Link href='/'>Ecofriendly furnitures</Link>
          <Link href='/'>Creative verse</Link>
          <Link href='/'>Discovery cards/shorts</Link>
          <Link href='/'>AR & AI for seamless experience</Link>
        </div>

        <div className='grid grid-rows-[auto]'>
          <p className='font-semibold text-[16px] leading-6'>Company</p>
          <Link href='/'>About Avni.furniture</Link>
          <Link href='/'>Join our team</Link>
          <Link href='/'>Ethics and Integrity</Link>
          <Link href='/'>Collaborators login</Link>
        </div>

        <div className='grid grid-rows-[auto] laptops:col-start-2'>
          <p className='font-semibold text-[16px] leading-6'>Social</p>
          <Link href='/'>Pinterest</Link>
          <Link href='/'>Facebook</Link>
          <Link href='/'>Twitter</Link>
          <Link href='/'>Medium</Link>
          <Link href='/'>Snapchat</Link>
        </div>

        <div className='grid grid-rows-[auto] laptops:col-start-3'>
          <p className='font-semibold text-[16px] leading-6'>Avni.Furniture</p>
          <Link href='/'>For users</Link>
          <Link href='/'>For furniture designers</Link>
          <Link href='/'>For furniture manufacturers</Link>
          <Link href='/'>For interior designers</Link>
          <Link href='/'>For institutions, companies, etc</Link>
        </div>
      </div>

      <div className='relative mt-14 mb-14 flex items-center gap-x-5 font-normal font-arial text-[12px] leading-[18px] text-firefly dark:text-wild-sand'>
        <span>&copy; Avni {currentDate.getFullYear()}</span>
        <Link href={`mailto:${EMAIL}`} target='_blank'>
          {EMAIL}
        </Link>
        <Link href='/'>Privacy Policy</Link>
        <Link href='/'>Terms</Link>
        <Link href='/'>Cookie Policy</Link>

        <button className='flex items-center justify-center gap-x-[10px] font-montserrat font-semibold leading-4 ml-auto rounded-full px-5 py-3 border-alto-light border-[1px] dark:border-wild-sand'>
          <Globe /> Change country
        </button>
      </div>
    </footer>
  );
};

export default Footer;
