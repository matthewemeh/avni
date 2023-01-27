const HomeSearch = () => {
  return (
    <div className='relative'>
      <div className='absolute inline left-[25px] bg-[url(/assets/svgs/search.svg)] bg-center bg-no-repeat w-[46px] h-full' />

      <input
        type='text'
        placeholder='What do you desire?'
        className='w-[720px] bg-wild-sand h-[46px] rounded-[100px] pl-[70px] outline-0'
      />

      <div className='absolute inline right-[13px] bg-[url(/assets/svgs/camera.svg)] bg-center bg-no-repeat w-[46px] h-full' />
    </div>
  );
};

export default HomeSearch;
