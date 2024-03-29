import { ExtraStyle } from '@/public/interfaces';

interface Props {
  extraStyles?: ExtraStyle;
}

const CurlyArrow: React.FC<Props> = ({ extraStyles }) => (
  <div
    style={extraStyles}
    className='w-max ml-auto mr-[5%] laptops:scale-x-[0.48] laptops:scale-y-[0.58] phones:scale-x-[0.35] phones:scale-y-[0.42] phones:mr-0'
  >
    <svg
      width='155'
      height='149'
      viewBox='0 0 155 149'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M47.0011 139.216C52.8629 138.735 58.6921 137.959 64.5469 137.44C65.7508 137.332 69.6318 137.91 70.4071 137.261C71.4936 136.35 69.6769 132.478 69.2797 131.565C67.2405 126.887 64.7979 122.457 62.3427 117.99C62.0577 117.471 60.6377 114.156 60.1037 114.131C58.0738 114.034 56.5356 117.918 55.757 119.172C52.3586 124.643 47.5489 132.048 45.6359 138.271'
        fill='currentColor'
      />
      <path
        d='M47.0011 139.216C52.8629 138.735 58.6921 137.959 64.5469 137.44C65.7508 137.332 69.6318 137.91 70.4071 137.261C71.4936 136.35 69.6769 132.478 69.2797 131.565C67.2405 126.887 64.7979 122.457 62.3427 117.99C62.0577 117.471 60.6377 114.156 60.1037 114.131C58.0738 114.034 56.5356 117.918 55.757 119.172C52.3586 124.643 47.5489 132.048 45.6359 138.271'
        stroke='currentColor'
        strokeWidth='2.93433'
        strokeMiterlimit='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M64.3965 127.298C81.8959 121.367 103.992 106.12 111.018 88.116C114.205 79.948 114.002 57.3981 100.319 58.1831C85.3279 59.0437 94.2075 81.4974 107.29 77.3375C118.858 73.659 123.179 61.2168 122.973 50.0472C122.61 30.3075 113.577 14.3064 97.6377 2.90498'
        stroke='currentColor'
        strokeWidth='2.93433'
        strokeMiterlimit='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </div>
);

export default CurlyArrow;
