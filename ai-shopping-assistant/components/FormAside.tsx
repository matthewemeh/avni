import Image from 'next/image';

const FormAside = () => {
  return (
    <section className='laptops:hidden'>
      <h1 className='text-white font-semibold text-[44px] leading-[68px] max-w-[320px] mt-[90px]'>
        Welcome to Avniverse!
      </h1>
      <h2 className='mt-5 max-w-[439px] text-[rgba(255,255,255,0.5)] font-medium text-[18px] leading-9 tracking-wider'>
        Our vision is to innovate for a future that inspires us every day
      </h2>
      <Image
        alt=''
        priority
        quality={1}
        width={140}
        height={100}
        src='/assets/pngs/avni-white-bg-clear.png'
        className='absolute left-[4%] bottom-[10%]'
      />
    </section>
  );
};

export default FormAside;
