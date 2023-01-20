const ArticlePoint = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='font-medium w-max mx-auto text-[14px] leading-[15px] flex flex-col items-center justify-center gap-y-4 laptops:gap-y-[10px] laptops:text-[12px] laptops:first:col-start-1 laptops:first:col-end-3 phones:col-start-1 phones:col-end-auto'
    >
      <div className='w-8 h-8 bg-[rgba(0,0,0,0.2)] rounded-full grid place-items-center'>
        <div className='w-3 h-3 bg-white rounded-full' />
      </div>
      <p>{text}</p>
    </button>
  );
};

export default ArticlePoint;
