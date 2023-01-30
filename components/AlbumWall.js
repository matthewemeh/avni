import Image from 'next/image';

import wallImage1 from '../public/assets/pngs/social-album1.png';
import wallImage2 from '../public/assets/pngs/social-album2.png';
import wallImage3 from '../public/assets/pngs/social-album3.png';
import wallImage4 from '../public/assets/pngs/social-album4.png';
import wallImage5 from '../public/assets/pngs/social-album5.png';
import wallImage6 from '../public/assets/pngs/social-album6.png';
import wallImage7 from '../public/assets/pngs/social-album7.png';
import wallImage8 from '../public/assets/pngs/social-album8.png';
import wallImage9 from '../public/assets/pngs/social-album9.png';

const AlbumWall = () => {
  return (
    <div className='mt-[84px] mx-auto justify-center grid grid-cols-[repeat(3,minmax(0,321px))] gap-x-[17px] gap-y-4 laptops:gap-x-3 small-phones:mt-[30px] small-phones:grid-cols-1 small-phones:gap-y-[30px]'>
      <Image alt='' priority={true} src={wallImage1} className='small-phones:mx-auto' />
      <Image alt='' priority={true} src={wallImage2} className='small-phones:mx-auto' />
      <Image alt='' priority={true} src={wallImage3} className='small-phones:mx-auto' />
      <Image alt='' priority={true} src={wallImage4} className='small-phones:mx-auto' />
      <Image
        alt=''
        priority={true}
        src={wallImage5}
        className='-mt-[35%] small-phones:mt-0 small-phones:mx-auto'
      />
      <Image alt='' priority={true} src={wallImage6} className='small-phones:mx-auto' />
      <Image alt='' priority={true} src={wallImage7} className='small-phones:mx-auto' />
      <Image
        alt=''
        priority={true}
        src={wallImage8}
        className='-mt-[35%] small-phones:mx-auto small-phones:mt-0'
      />
      <Image alt='' priority={true} src={wallImage9} className='small-phones:mx-auto' />
    </div>
  );
};

export default AlbumWall;
