import { useRef, useState } from 'react';

import testVideo from '../public/assets/test-video.mp4';
import customersImage from '../public/assets/pngs/customers.png';

const Testimonial = () => {
  const videoRef = useRef();
  const [paused, setPaused] = useState(true);

  const onEnded = () => setPaused(true);

  const togglePause = () => {
    if (paused) videoRef.current.play();
    else videoRef.current.pause();

    setPaused(!paused);
  };

  return (
    <section className='grid grid-rows-[repeat(2,auto)] grid-cols-2 gap-y-[34px] mt-[200px] phones:mt-48 phones:grid-rows-[repeat(3,auto)] phones:grid-cols-1'>
      <h2 className='text-[30px] leading-[45px] max-w-[80%] laptops:text-[25px] phones:text-center phones:mx-auto small-phones:max-w-full'>
        What others are saying about us
      </h2>

      <div className='text-[14px] leading-[21px] max-w-[70%] ml-auto laptops:font-normal phones:text-center phones:mx-auto small-phones:max-w-full'>
        We are not your regular retail store. Behind every piece is a promise kept. That&apos;s why
        people can&apos;t stop talking about us
        <hr className='border-alto-light w-[35%] mt-[30px] phones:mx-auto' />
      </div>

      <div className='h-[560px] col-start-1 col-end-3 flex flex-col items-end laptops:h-[410px] phones:mt-[50px] phones:h-48 phones:col-end-auto'>
        <video
          ref={videoRef}
          onEnded={onEnded}
          poster={customersImage.src}
          className='w-full h-[560px] object-fill laptops:h-[410px] phones:h-48'
        >
          <source src={testVideo} type='video/mp4' />
          Your broswer does not support videos
        </video>

        <div className='flex w-full relative h-[100px] bottom-[100px] laptops:h-[73px] laptops:bottom-[73px] phones:h-[54px] phones:bottom-[54px]'>
          <p className='w-full h-full p-7 text-white text-[14px] leading-[17px] bg-[rgba(35,43,43,0.1)] backdrop-blur-[2px] laptops:py-[16.5px] laptops:text-[12px] laptops:leading-[15px] phones:py-2 phones:px-[15px] small-phones:w-[84%]'>
            <span className='block font-bold'>Testimonials</span>
            <span className='block mt-[10px] overflow-hidden whitespace-nowrap overflow-ellipsis phones:text-[10px] phones:leading-3'>
              Client stories / experience, social media reviews,
            </span>
          </p>

          <button
            onClick={togglePause}
            className={`h-full aspect-square py-7 bg-white bg-no-repeat bg-center small-phones:w-[16%] ${
              paused
                ? 'bg-[url(/assets/svgs/play-dark.svg)]'
                : 'bg-[url(/assets/svgs/pause-dark.svg)]'
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
