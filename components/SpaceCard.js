const SpaceCard = ({ className, title }) => {
  return (
    <div
      className={`${className} bg-cover bg-center bg-no-repeat w-1/2 min-w-[400px] h-[385px] flex-shrink-0 flex items-end`}
    >
      <p className='bg-[rgba(0,0,0,0.5)] backdrop-blur-[10px] w-full py-[30px] text-white text-center font-semibold text-[16px] leading-5'>
        {title}
      </p>
    </div>
  );
};

export default SpaceCard;
