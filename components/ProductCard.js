import Image from 'next/image';

const ProductCard = ({ productType, productImage, productPrice, productName }) => {
  return (
    <div className='relative w-[330px] h-[370px] flex-shrink-0 laptops:w-[245px] laptops:h-[269px] small-phones:w-full small-phones:h-[370px]'>
      <Image priority={true} alt={productType} src={productImage} fill />

      <div className='grid grid-rows-2 grid-cols-2 gap-y-[10px] grid-flow-col w-full absolute bottom-0 px-[39.5px] py-[15px] bg-[rgba(255,255,255,0.7)] backdrop-blur-[10px] font-semibold text-[16px] leading-5 text-outer-space laptops:text-[14px] laptops:leading-[17px] laptops:px-5 small-phones:text-[16px] small-phones:leading-5'>
        <p className='uppercase'>{productName}</p>
        <p className='capitalize font-normal text-[14px] leading-[17px] laptops:text-[12px] laptops:leading-[15px] small-phones:text-[14px] small-phones:leading-[17px]'>
          {productType}
        </p>
        <p className='text-right flex items-center justify-end row-start-1 row-end-3'>
          ${productPrice}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
