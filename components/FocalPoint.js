import { useRouter } from 'next/router';

const FocalPoint = ({
  x,
  y,
  title,
  href,
  aspect,
  imageZoomed,
  detailsOpened,
  setImageZoomed,
  setDetailsOpened,
}) => {
  const router = useRouter();
  return (
    <div
      key={title}
      onClick={() => {
        setDetailsOpened(false);

        if (imageZoomed) {
          setImageZoomed(false);
          setTimeout(() => router.push(href), 1000);
        } else router.push(href);
      }}
      style={{
        top: `${detailsOpened ? y : 50}%`,
        left: `${detailsOpened ? x : 50}%`,
        width: `${detailsOpened ? aspect : 0}px`,
        height: `${detailsOpened ? aspect : 0}px`,
      }}
      className={`text-outer-space cursor-pointer shadow-[0_3px_5px,0_-3px_5px] shadow-white -translate-x-1/2 -translate-y-1/2 overflow-hidden font-semibold bg-wild-sand transition-all duration-500 origin-center uppercase rounded-full grid place-items-center text-center text-[14px] leading-[17px] ${
        imageZoomed ? 'fixed z-[72]' : 'absolute z-[60]'
      }`}
    >
      {title}
    </div>
  );
};

export default FocalPoint;
