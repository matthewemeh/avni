const ArticlePoint = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='font-medium text-[14px] leading-4 tracking-[0.36px] flex flex-col items-center justify-center gap-y-4'
    >
      <div className='w-8 h-8 bg-[rgba(0,0,0,0.2)] rounded-full grid place-items-center'>
        <div className='w-3 h-3 bg-white rounded-full' />
      </div>
      <p>{text}</p>
    </button>
  );
};

export default ArticlePoint;
