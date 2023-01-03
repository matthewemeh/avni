import Link from 'next/link';

import Logo from './Logo';

import Globe from './icons/Globe';
import Tiktok from './icons/Tiktok';
import Youtube from './icons/Youtube';
import Instagram from './icons/Instagram';

const Footer = () => {
  const email = 'furniture@avniverse.com';

  return (
    <footer className='bg-wild-sand pt-[100px] -mx-[19.4%] px-[20%] overflow-hidden dark:bg-[#161718]'>
      <div className='w-full grid grid-cols-5 gap-x-[5%] pb-[100px] font-medium border-alto-light border-b-[1px] dark:border-wild-sand'>
        <div>
          <Logo />
          <p className='mt-[50px] text-[12px] leading-[18px]'>Follow Us</p>
          <div className='mt-3 flex gap-x-[10px]'>
            <Link
              href='/instagramlink.com'
              className='w-8 h-8 grid place-items-center rounded-full bg-outer-space text-white dark:bg-white dark:text-outer-space'
            >
              <Instagram />
            </Link>
            <Link
              href='/tiktoklink.com'
              className='w-8 h-8 grid place-items-center rounded-full bg-outer-space text-white dark:bg-white dark:text-outer-space'
            >
              <Tiktok />
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
          <Link className='text-[12px] leading-[30px]' href='/'>
            Ecofriendly furnitures
          </Link>
          <Link className='text-[12px] leading-[30px]' href='/'>
            Creative verse
          </Link>
          <Link className='text-[12px] leading-[30px]' href='/'>
            Discovery cards/shorts
          </Link>
          <Link className='text-[12px] leading-[30px]' href='/'>
            AR & AI for seamless experience
          </Link>
        </div>

        <div className='grid grid-rows-[auto]'>
          <p className='font-semibold text-[16px] leading-6'>Company</p>
          <Link className='text-[12px] leading-[30px]' href='/'>
            About Avni.furniture
          </Link>
          <Link className='text-[12px] leading-[30px]' href='/'>
            Join our team
          </Link>
          <Link className='text-[12px] leading-[30px]' href='/'>
            Ethics and Integrity
          </Link>
          <Link className='text-[12px] leading-[30px]' href='/'>
            Collaborators login
          </Link>
        </div>

        <div className='grid grid-rows-[auto]'>
          <p className='font-semibold text-[16px] leading-6'>Social</p>
          <Link className='text-[12px] leading-[30px]' href='/'>
            Pinterest
          </Link>
          <Link className='text-[12px] leading-[30px]' href='/'>
            Facebook
          </Link>
          <Link className='text-[12px] leading-[30px]' href='/'>
            Twitter
          </Link>
          <Link className='text-[12px] leading-[30px]' href='/'>
            Medium
          </Link>
          <Link className='text-[12px] leading-[30px]' href='/'>
            Snapchat
          </Link>
        </div>

        <div className='grid grid-rows-[auto]'>
          <p className='font-semibold text-[16px] leading-6'>Avni.Furniture</p>
          <Link className='text-[12px] leading-[30px]' href='/'>
            For users
          </Link>
          <Link className='text-[12px] leading-[30px]' href='/'>
            For furniture designers
          </Link>
          <Link className='text-[12px] leading-[30px]' href='/'>
            For furniture manufacturers
          </Link>
          <Link className='text-[12px] leading-[30px]' href='/'>
            For interior designers
          </Link>
          <Link className='text-[12px] leading-[30px]' href='/'>
            For institutions, companies, etc
          </Link>
        </div>
      </div>

      <div className='relative mt-14 mb-14 flex items-center gap-x-5 font-normal text-[12px] leading-[18px] text-firefly dark:text-wild-sand'>
        <span>&copy; Avni 2022</span>
        <Link href={`mailto:${email}`} target='_blank'>
          {email}
        </Link>
        <Link href='/'>Privacy Policy</Link>
        <Link href='/'>Terms</Link>
        <Link href='/'>Cookie Policy</Link>

        <button className='flex gap-x-[10px] ml-auto rounded-full px-5 py-3 border-alto-light border-[1px] dark:border-wild-sand'>
          <Globe /> Change country
        </button>
      </div>
    </footer>
  );
};

export default Footer;
