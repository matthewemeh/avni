import Image from 'next/image';

const ProductCard = ({ productType, productImage, productPrice, productName }) => {
  return (
    <div className='relative w-[330px] flex-shrink-0'>
      <Image quality={50} priority={true} alt={productType} src={productImage} />

      <div className='grid grid-rows-2 grid-cols-2 gap-y-[10px] grid-flow-col w-full absolute bottom-0 px-[39.5px] py-[15px] bg-[rgba(255,255,255,0.7)] backdrop-blur-[10px] font-semibold text-[16px] leading-5 text-outer-space'>
        <p className='uppercase'>{productName}</p>
        <p className='capitalize font-normal text-[14px] leading-[17px]'>{productType}</p>
        <p className='text-right flex items-center justify-end row-start-1 row-end-3'>
          ${productPrice}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
