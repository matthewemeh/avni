import Link from 'next/link';

import Logo from '../icons/Logo';
import Globe from '../icons/Globe';
import Email from '../icons/Email';
import Youtube from '../icons/Youtube';
import Instagram from '../icons/Instagram';

const LandingFooter = () => {
  const currentDate = new Date();
  const EMAIL = 'furniture@avniverse.com';

  return (
    <footer className='bg-wild-sand pt-[89px] -mx-[19.4%] px-[20%] overflow-hidden dark:bg-woodsmoke phones:pt-[60px]'>
      <div className='w-full text-[12px] leading-[30px] grid grid-cols-[repeat(5,20%)] pb-[89px] border-alto-light border-b-[1px] dark:border-wild-sand laptops:grid-rows-2 laptops:grid-cols-3 laptops:gap-y-16 phones:pb-[100px] phones:text-[14px] phones:grid-cols-1 phones:grid-rows-[auto] phones:gap-y-[70px]'>
        <div>
          <Logo />
          <p className='mt-[50px] text-[12px] leading-[18px]'>Follow Us</p>
          <div className='mt-3 flex gap-x-[10px] phones:gap-x-5 laptops:mt-[10px]'>
            <Link
              target='_blank'
              href={`mailto:${EMAIL}`}
              className='w-[25px] h-[25px] grid place-items-center rounded-full bg-outer-space text-white dark:bg-white dark:text-outer-space phones:w-[25px] phones:h-[25px]'
            >
              <Email />
            </Link>
            <Link
              target='_blank'
              href='https://tiktoklink.com'
              className='w-[25px] h-[25px] grid place-items-center rounded-full bg-outer-space text-white dark:bg-white dark:text-outer-space phones:w-[25px] phones:h-[25px]'
            >
              <Instagram />
            </Link>
            <Link
              target='_blank'
              href='https://youtubelink.com'
              className='w-[25px] h-[25px] grid place-items-center rounded-full bg-outer-space text-white dark:bg-white dark:text-outer-space phones:w-[25px] phones:h-[25px]'
            >
              <Youtube />
            </Link>
          </div>
        </div>

        <div className='grid grid-rows-[24px_repeat(4,30px)] phones:gap-y-[10px]'>
          <p className='font-semibold text-[16px] leading-6 laptops:mb-2 phones:mb-[5px] phones:text-[15px]'>
            Things we care about
          </p>
          <Link href='/' className='w-max'>
            Ecofriendly furniture
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

        <div className='grid grid-rows-[24px_repeat(4,30px)] pl-[30%] laptops:pl-0 phones:gap-y-[10px]'>
          <p className='font-semibold text-[16px] leading-6 laptops:mb-2 phones:mb-[5px] phones:text-[15px]'>
            Company
          </p>
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

        <div className='grid grid-rows-[24px_repeat(5,30px)] pl-[30%] laptops:pl-0 laptops:col-start-2 phones:col-start-auto phones:gap-y-[10px]'>
          <p className='font-semibold text-[16px] leading-6 laptops:mb-2 phones:mb-[5px] phones:text-[15px]'>
            Social
          </p>
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

        <div className='grid grid-rows-[24px_repeat(5,30px)] laptops:col-start-3 phones:col-start-auto phones:gap-y-[10px]'>
          <p className='font-semibold text-[16px] leading-6 laptops:mb-2 phones:mb-[5px] phones:text-[15px]'>
            Avni.Furniture
          </p>
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

      <div className='relative whitespace-nowrap my-16 flex items-center flex-wrap gap-x-5 gap-y-[25px] font-normal font-arial text-[12px] leading-[18px] text-firefly dark:text-wild-sand laptops:mb-[50px] laptops:mt-[30px] phones:mb-10 phones:flex-wrap phones:gap-x-[25px]'>
        <span>&copy; {currentDate.getFullYear()}. Avni.meb from Avniverse, Inc.</span>
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

        <button className='flex items-center justify-center gap-x-[10px] text-outer-space font-montserrat font-semibold leading-4 ml-auto rounded-[30px] px-5 py-3 border-alto-light border-[1px] dark:border-wild-sand dark:text-wild-sand 1105px:ml-0 phones:py-[14px]'>
          <Globe /> Change country
        </button>
      </div>
    </footer>
  );
};

export default LandingFooter;
