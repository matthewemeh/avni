const Testimonial = () => {
  return (
    <section className='grid grid-rows-[repeat(2,auto)] grid-cols-2 gap-y-[84px] mt-[200px] phones:mt-48 phones:grid-rows-[repeat(3,auto)] phones:grid-cols-1'>
      <h2 className='text-[30px] leading-[45px] max-w-[80%] laptops:text-[25px] phones:text-center phones:mx-auto phones:max-w-[90%]'>
        What others are saying about us
      </h2>

      <div className='text-[14px] leading-[21px] max-w-[70%] ml-auto laptops:font-normal phones:text-center phones:mx-auto'>
        We are not your regular retail store. Behind every piece is a promise kept. That&apos;s why
        people can&apos;t stop talking about us
        <hr className='border-alto-light w-[35%] mt-[30px] phones:mx-auto' />
      </div>

      <div className='h-[560px] bg-[url(/assets/pngs/customers.png)] bg-cover bg-center bg-no-repeat col-start-1 col-end-3 flex items-end laptops:h-[410px] phones:mt-20 phones:h-48 phones:col-end-auto'>
        <p className='w-full h-[100px] p-7 text-white text-[14px] leading-[17px] bg-[rgba(35,43,43,0.1)] backdrop-blur-[2px] laptops:py-[16.5px] laptops:h-[73px] laptops:text-[12px] laptops:leading-[15px] phones:py-[11px] phones:px-[15px] phones:h-[28%]'>
          <span className='block font-bold'>Testimonials</span>
          <span className='block mt-[10px] overflow-hidden whitespace-nowrap overflow-ellipsis phones:text-[10px] phones:leading-3'>
            Client stories / experience, social media reviews,
          </span>
        </p>

        <button className='bg-[url(/assets/svgs/play.svg)] h-[100px] aspect-square py-7 bg-white bg-no-repeat bg-center laptops:h-[73px] phones:h-[28%]' />
      </div>
    </section>
  );
};

export default Testimonial;
