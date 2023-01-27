const CategoryCard = ({ categoryName, className }) => {
  return (
    <div
      className={`${className} bg-alto bg-cover bg-no-repeat w-[245px] h-[309px] relative flex-shrink-0`}
    >
      <p className='absolute left-1/2 -translate-x-1/2 bottom-[38px] bg-white text-center capitalize text-[12px] leading-4 text-cod-gray py-3 px-[25px] rounded-[64px]'>
        {categoryName}
      </p>
    </div>
  );
};

export default CategoryCard;
