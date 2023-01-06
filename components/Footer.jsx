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
      <div className='w-full text-[12px] leading-[30px] grid grid-cols-5 gap-x-[5%] pb-[100px] border-alto-light border-b-[1px] dark:border-wild-sand laptops:grid-rows-2 laptops:grid-cols-3 laptops:gap-y-16 phones:grid-cols-1 phones:grid-rows-[auto] phones:gap-y-[70px]'>
        <div>
          <Logo />
          <p className='mt-[50px] text-[12px] leading-[18px]'>Follow Us</p>
          <div className='mt-3 flex gap-x-[10px] phones:gap-x-5'>
            <Link
              target='_blank'
              href={`mailto:${EMAIL}`}
              className='w-8 h-8 grid place-items-center rounded-full bg-outer-space text-white dark:bg-white dark:text-outer-space phones:w-[25px] phones:h-[25px]'
            >
              <Email />
            </Link>
            <Link
              href='/tiktoklink.com'
              className='w-8 h-8 grid place-items-center rounded-full bg-outer-space text-white dark:bg-white dark:text-outer-space phones:w-[25px] phones:h-[25px]'
            >
              <Instagram />
            </Link>
            <Link
              href='/youtubelink.com'
              className='w-8 h-8 grid place-items-center rounded-full bg-outer-space text-white dark:bg-white dark:text-outer-space phones:w-[25px] phones:h-[25px]'
            >
              <Youtube />
            </Link>
          </div>
        </div>

        <div className='grid grid-rows-[auto] phones:gap-y-[15px]'>
          <p className='font-semibold text-[16px] leading-6 phones:mb-[5px]'>
            Things we care about
          </p>
          <Link href='/' className='w-max'>
            Ecofriendly furnitures
          </Link>
          <Link href='/' className='w-max'>
            Creative verse
          </Link>
          <Link href='/' className='w-max'>
            Discovery cards/shorts
          </Link>
          <Link href='/' className='w-max'>
            AR & AI for seamless experience
          </Link>
        </div>

        <div className='grid grid-rows-[auto] phones:gap-y-[15px]'>
          <p className='font-semibold text-[16px] leading-6 phones:mb-[5px]'>Company</p>
          <Link href='/' className='w-max'>
            About Avni.furniture
          </Link>
          <Link href='/' className='w-max'>
            Join our team
          </Link>
          <Link href='/' className='w-max'>
            Ethics and Integrity
          </Link>
          <Link href='/' className='w-max'>
            Collaborators login
          </Link>
        </div>

        <div className='grid grid-rows-[auto] laptops:col-start-2 phones:col-start-auto phones:gap-y-[15px]'>
          <p className='font-semibold text-[16px] leading-6 phones:mb-[5px]'>Social</p>
          <Link href='/' className='w-max'>
            Pinterest
          </Link>
          <Link href='/' className='w-max'>
            Facebook
          </Link>
          <Link href='/' className='w-max'>
            Twitter
          </Link>
          <Link href='/' className='w-max'>
            Medium
          </Link>
          <Link href='/' className='w-max'>
            Snapchat
          </Link>
        </div>

        <div className='grid grid-rows-[auto] laptops:col-start-3 phones:col-start-auto phones:gap-y-[15px]'>
          <p className='font-semibold text-[16px] leading-6 phones:mb-[5px]'>Avni.Furniture</p>
          <Link href='/' className='w-max'>
            For users
          </Link>
          <Link href='/' className='w-max'>
            For furniture designers
          </Link>
          <Link href='/' className='w-max'>
            For furniture manufacturers
          </Link>
          <Link href='/' className='w-max'>
            For interior designers
          </Link>
          <Link href='/' className='w-max'>
            For institutions, companies, etc
          </Link>
        </div>
      </div>

      <div className='relative mt-14 mb-14 flex items-center gap-x-5 gap-y-[25px] font-normal font-arial text-[12px] leading-[18px] text-firefly dark:text-wild-sand phones:flex-wrap phones:gap-x-[25px]'>
        <span>&copy; Avni {currentDate.getFullYear()}</span>
        <Link href={`mailto:${EMAIL}`} target='_blank' className='w-max'>
          {EMAIL}
        </Link>
        <Link href='/' className='w-max'>
          Privacy Policy
        </Link>
        <Link href='/' className='w-max'>
          Terms
        </Link>
        <Link href='/' className='w-max'>
          Cookie Policy
        </Link>

        <button className='flex items-center justify-center gap-x-[10px] font-montserrat font-semibold leading-4 ml-auto rounded-full px-5 py-3 border-alto-light border-[1px] dark:border-wild-sand phones:ml-0 phones:py-[14px]'>
          <Globe /> Change country
        </button>
      </div>
    </footer>
  );
};

export default Footer;
