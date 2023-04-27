import { useContext } from 'react';

import { AppContext } from '@/pages/_app';

const HomeSearch = () => {
  const { menuOpened } = useContext(AppContext);

  return (
    <div className='relative w-full phones:w-[calc(100%-52px)]'>
      <div className='absolute inline left-5 bg-[url(/assets/svgs/search.svg)] bg-center bg-no-repeat w-[46px] h-full' />

      <input
        type='text'
        spellCheck='false'
        autoComplete='false'
        disabled={menuOpened}
        placeholder='What do you desire?'
        className='w-full bg-wild-sand h-[46px] rounded-[100px] pl-[70px] outline-0 text-outer-space placeholder:text-outer-space phones:h-11'
      />

      <button
        disabled={menuOpened}
        className='absolute inline right-[13px] bg-[url(/assets/svgs/camera.svg)] bg-center bg-no-repeat w-[46px] h-full'
      />
    </div>
  );
};

export default HomeSearch;
