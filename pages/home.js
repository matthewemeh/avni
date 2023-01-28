import Head from 'next/head';
import Link from 'next/link';
import { useState, useRef } from 'react';

import AlbumWall from '../components/AlbumWall';
import SpaceCard from '../components/SpaceCard';
import LinkBubble from '../components/LinkBubble';
import RoomSlider from '../components/RoomSlider';
import HomeSearch from '../components/HomeSearch';
import Navigation from '../components/Navigation';
import ProductCard from '../components/ProductCard';
import ServiceCard from '../components/ServiceCard';
import CategoryCard from '../components/CategoryCard';
import ThemeSaleCard from '../components/ThemeSaleCard';
import HomeFooter from '../components/footers/HomeFooter';

import User from '../components/icons/User';
import ArrowRight from '../components/icons/ArrowRight';
import CaretUpFilled from '../components/icons/CaretUpFilled';

import themeRoom1 from '../public/assets/pngs/theme-room1.png';
import themeRoom2 from '../public/assets/pngs/theme-room2.png';
import productImage1 from '../public/assets/pngs/product1.png';
import productImage2 from '../public/assets/pngs/product2.png';
import productImage3 from '../public/assets/pngs/product3.png';

import { addClass, removeClass, scrollScreenTo } from '../public/utils';

const PRODUCTS = [
  {
    _id: 1,
    price: 2.99,
    name: 'GURLI',
    image: productImage1,
    type: 'Cushion cover',
    createdAt: '2023-01-21T10:13:00.000Z',
    updatedAt: '2023-01-21T10:13:00.000Z',
  },
  {
    _id: 2,
    price: 2.99,
    name: 'GURLI',
    image: productImage2,
    type: 'Cushion cover',
    createdAt: '2022-12-30T10:13:00.000Z',
    updatedAt: '2022-12-30T10:13:00.000Z',
  },
  {
    _id: 3,
    price: 2.99,
    name: 'GURLI',
    image: productImage3,
    type: 'Cushion cover',
    createdAt: '2022-12-11T10:13:00.000Z',
    updatedAt: '2022-12-11T10:13:00.000Z',
  },
  {
    _id: 4,
    price: 2.99,
    name: 'GURLI',
    image: productImage1,
    type: 'Cushion cover',
    createdAt: '2022-12-11T10:13:00.000Z',
    updatedAt: '2022-12-11T10:13:00.000Z',
  },
];

const CATEGORIES = [
  {
    _id: 1,
    categoryName: 'armchairs',
    bgImage: 'bg-[url(/assets/pngs/product3.png)]',
  },
  {
    _id: 2,
    categoryName: 'tables',
    bgImage: 'bg-[url(/assets/pngs/table.png)]',
  },
  {
    _id: 3,
    categoryName: 'beds',
    bgImage: 'bg-[url(/assets/pngs/bed.png)]',
  },
  {
    _id: 4,
    categoryName: 'wardrobes',
    bgImage: 'bg-[url(/assets/pngs/wardrobe.png)]',
  },
];

const THEME_SALES = [
  {
    _id: 1,
    image: themeRoom1,
    title: 'Gurli Gurli Gurli Gurli',
    description:
      'Find gifts from a few euros. Ideal with the holidays just around the corner. Shop now.',
  },
  {
    _id: 2,
    image: themeRoom2,
    title: 'Gurli Gurli Gurli Gurli',
    description:
      'Find gifts from a few euros. Ideal with the holidays just around the corner. Shop now.',
  },
  {
    _id: 3,
    image: themeRoom1,
    title: 'Gurli Gurli Gurli Gurli',
    description:
      'Find gifts from a few euros. Ideal with the holidays just around the corner. Shop now.',
  },
  {
    _id: 4,
    image: themeRoom2,
    title: 'Gurli Gurli Gurli Gurli',
    description:
      'Find gifts from a few euros. Ideal with the holidays just around the corner. Shop now.',
  },
];

const SPACE_IDEAS = [
  { _id: 1, bgImage: 'bg-[url(/assets/pngs/space1.png)]', title: 'Maximizing your space' },
  { _id: 2, bgImage: 'bg-[url(/assets/pngs/space2.png)]', title: 'Personalizing your workspace' },
  { _id: 3, bgImage: 'bg-[url(/assets/pngs/space1.png)]', title: 'Maximizing your space' },
  { _id: 4, bgImage: 'bg-[url(/assets/pngs/space2.png)]', title: 'Personalizing your workspace' },
];

const SERVICES = [
  {
    href: '/',
    title: 'Smart Search & Personalized Filter',
    description:
      'We use the smart technology to understand the intent and context of your search and filter for your specifications',
  },
  {
    href: '/',
    title: 'AR & AI',
    description:
      "We've adopted augmented reality and artificial intelligence to enhance your overall shopping experience",
  },
  {
    href: '/',
    title: 'Customer Service',
    description: 'Find out the solutions to your questions',
  },
  {
    href: '/',
    title: 'Pickups & Delivery',
    description: 'We primarily use delivery service to get your goods safely home.',
  },
];

const Home = ({ products }) => {
  const headerRef = useRef();

  const [currentSection, setCurrentSection] = useState('home');

  const subNavButtons = [
    { text: 'home', top: 0 },
    { text: 'categories', top: 1670 },
    { text: 'themes', top: 900 },
    { text: 'rooms', top: 3175 },
    { text: 'sales', top: 2300 },
  ];

  const headerTexts = ['Delivery only', 'Customer Service', 'Campaign'];

  const onChangeSection = (top, newSection) => {
    scrollScreenTo(top);
    setCurrentSection(newSection);
  };

  return (
    <>
      <Head>
        <title>Avni - Home</title>
        <meta name='description' content='Generated by create next app' />
      </Head>

      <Navigation
        onMenuOpened={() => {
          // move previously translated sub nav bar to the left (by 400px)
          removeClass(headerRef.current, '-translate-x-1/2');
          addClass(headerRef.current, '-translate-x-[calc(50%+400px)]');
        }}
        onMenuClosed={() => {
          // move previously translated sub nav bar to original position
          addClass(headerRef.current, '-translate-x-1/2');
          removeClass(headerRef.current, '-translate-x-[calc(50%+400px)]');
        }}
        extraNavOverlayStyles={{ zIndex: '100' }}
        extraNavStyles={{ top: '35px', height: '170px', alignItems: 'start', paddingTop: '40px' }}
      />

      <div className='fixed top-0 w-full z-[65] bg-wild-sand text-outer-space text-[12px] leading-[15px] font-medium tracking-[0.36px] h-[35px] flex items-center justify-center gap-[30px]'>
        {headerTexts.map(text => (
          <div
            key={text}
            className='flex gap-x-[10px] items-center justify-center h-full px-[10px]'
          >
            <div className='border-2 w-3 h-3 rounded-full border-azure-radiance' />
            <p>{text}</p>
          </div>
        ))}
      </div>

      <main className='font-medium tracking-[0.36px] mx-[15%] mt-[290px] scroll-smooth laptops:mt-[281px]'>
        <header
          ref={headerRef}
          className='text-[12px] leading-[15px] w-[65%] left-1/2 -translate-x-1/2 fixed top-16 z-[70] transition-all duration-500'
        >
          <div className='flex gap-x-[25px] items-center justify-between h-[46px] mx-auto'>
            <HomeSearch />

            <button className='bg-[url(/assets/svgs/cart.svg)] bg-center bg-no-repeat bg-wild-sand min-w-[46px] h-full rounded-full' />

            <button className='bg-[url(/assets/svgs/heart.svg)] bg-center bg-no-repeat bg-wild-sand min-w-[46px] h-full rounded-full' />
          </div>

          <div className='flex gap-5 items-start pt-5 mt-6 whitespace-nowrap border-t-[1px] border-wild-sand mx-auto'>
            {subNavButtons.map(({ text, top }) => (
              <button
                key={text}
                onClick={() => onChangeSection(top, text)}
                className={`capitalize border-[1px] h-[39px] px-[25px] bg-wild-sand rounded-[40px] text-outer-space first:dark:border-woodsmoke ${
                  text === currentSection ? 'border-outer-space' : 'border-transparent'
                }`}
              >
                {text}
              </button>
            ))}

            <Link
              href='/'
              className='flex items-center justify-center gap-x-[10px] py-3 px-5 ml-auto rounded-[30px] border-[1px] border-alto-light laptops:w-[39px] laptops:h-[39px] laptops:rounded-full laptops:px-3'
            >
              <User />
              <p className='laptops:hidden'>Sign in or Sign up</p>
            </Link>
          </div>
        </header>

        <section className='mx-[4%]'>
          <h1 className='text-[24px] leading-[29px] mt-[90px] text-black dark:text-wild-sand laptops:text-[22px] laptops:leading-[27px]'>
            Welcome back!
          </h1>

          <h2 className='text-[14px] leading-[21px] text-light-dove-gray mt-[17px] laptops:text-[12px]'>
            We are on a mission to get your perfect piece! Anticipate the smile that comes at your
            items&apos; arrival 😁
          </h2>

          <h3 className='text-[18px] leading-[22px] mt-[50px] laptops:mt-10 laptops:text-[16px] laptops:leading-5'>
            Award winning products
          </h3>
          <LinkBubble extraStyles={{ marginLeft: '0' }} href='/' text='View all' />
        </section>

        <section className='relative mt-[84px] laptops:mt-[75px]'>
          <div className='x-scroll flex gap-x-[5px] overflow-x-scroll pb-[30px]'>
            {products.map(({ name, type, price, image, _id }) => (
              <ProductCard
                key={_id}
                productName={name}
                productType={type}
                productPrice={price}
                productImage={image}
              />
            ))}
          </div>

          <button
            onClick={null}
            className='absolute z-50 top-1/2 -translate-y-1/2 -right-[27px] box-content border-[10px] border-white grid place-items-center text-white bg-zorba w-[35px] h-[35px] rounded-full dark:border-shark dark:bg-white dark:text-zorba'
          >
            <ArrowRight />
          </button>
        </section>

        <section className='mt-[200px] h-[560px] grid grid-cols-[40%_24%_36%] grid-flow-col grid-rows-[repeat(560,1px)] laptops:h-[488px]'>
          <div className='bg-alto bg-[url(/assets/pngs/decoration1.png)] bg-cover bg-center bg-no-repeat row-start-1 row-end-[560] flex items-center justify-center flex-col gap-y-[100px]'>
            <div className='ripple' />
            <div className='ripple' />
          </div>

          <div className='bg-zorba row-start-1 row-end-[338] font-bold px-[15%] flex flex-col gap-y-5 items-center justify-center laptops:px-[10%]'>
            <p className='text-[16px] leading-5 text-[rgba(255,255,255,0.5)] laptops:text-[14px] laptops:leading-[17px]'>
              Trending Product Categories
            </p>
            <p className='text-[14px] leading-[17px] text-white laptops:text-[12px] laptops:leading-[15px] laptops:font-semibold'>
              Get inspired with what others are buying...
            </p>
          </div>
          <div className='bg-silver-chalice grid place-items-center row-start-[338] row-end-[560] bg-[url(/assets/pngs/decoration2.png)] bg-no-repeat bg-cover bg-center'>
            <div className='ripple' />
          </div>

          <div className='bg-dorado bg-[url(/assets/pngs/decoration3.png)] bg-cover bg-center bg-no-repeat row-start-1 row-end-[196] flex items-center justify-center gap-x-[20%]'>
            <div className='ripple' />
            <div className='ripple' />
          </div>
          <div className='bg-boulder bg-[url(/assets/pngs/decoration4.png)] bg-cover bg-center bg-no-repeat row-start-[196] row-end-[560] grid place-items-center'>
            <div className='ripple' />
          </div>
        </section>

        <section className='mt-[200px] text-center'>
          <h4 className='text-[18px] leading-[22px]'>Categories</h4>

          <div className='relative mt-[84px]'>
            <div className='x-scroll flex gap-x-[5px] overflow-x-scroll pb-[30px]'>
              {CATEGORIES.map(({ _id, categoryName, bgImage }) => (
                <CategoryCard key={_id} categoryName={categoryName} bgImage={bgImage} />
              ))}
            </div>

            <button
              onClick={null}
              className='absolute z-50 top-1/2 -translate-y-1/2 -right-[27px] box-content border-[10px] border-white grid place-items-center text-white bg-zorba w-[35px] h-[35px] rounded-full dark:border-shark dark:bg-white dark:text-zorba'
            >
              <ArrowRight />
            </button>
          </div>
        </section>

        <section className='mt-[200px] text-center'>
          <h5 className='text-[18px] leading-[22px]'>Theme sales</h5>

          <div className='relative mt-[84px]'>
            <div className='x-scroll flex gap-x-[5px] overflow-x-scroll pb-[30px]'>
              {THEME_SALES.map(({ _id, image, title, description }) => (
                <ThemeSaleCard
                  key={_id}
                  themeTitle={title}
                  themeImage={image}
                  themeDescription={description}
                />
              ))}
            </div>

            <button
              onClick={null}
              className='absolute z-50 top-1/2 -translate-y-1/2 -right-[27px] box-content border-[10px] border-white grid place-items-center text-white bg-zorba w-[35px] h-[35px] rounded-full dark:border-shark dark:bg-white dark:text-zorba'
            >
              <ArrowRight />
            </button>
          </div>
        </section>

        <section className='mt-[200px] text-center'>
          <h5 className='text-[18px] leading-[22px]'>Rooms</h5>

          <div className='relative mt-[84px]'>
            <RoomSlider />

            <button
              onClick={null}
              className='absolute z-50 top-1/2 -translate-y-1/2 -right-[27px] box-content border-[10px] border-white grid place-items-center text-white bg-zorba w-[35px] h-[35px] rounded-full dark:border-shark dark:bg-white dark:text-zorba'
            >
              <ArrowRight />
            </button>
          </div>
        </section>

        <section className='mt-[200px] text-center'>
          <h6>Ideas for your space</h6>

          <div className='relative mt-[84px]'>
            <div className='x-scroll flex gap-x-[5px] overflow-x-scroll pb-[30px]'>
              {SPACE_IDEAS.map(({ _id, bgImage, title }) => (
                <SpaceCard key={_id} bgImage={bgImage} title={title} />
              ))}
            </div>

            <button
              onClick={null}
              className='absolute z-50 top-1/2 -translate-y-1/2 -right-[27px] box-content border-[10px] border-white grid place-items-center text-white bg-zorba w-[35px] h-[35px] rounded-full dark:border-shark dark:bg-white dark:text-zorba'
            >
              <ArrowRight />
            </button>
          </div>
        </section>

        <section className='mt-[200px] grid grid-rows-[repeat(2,134px)] grid-cols-2 grid-flow-row gap-x-[21px] gap-y-[17px] laptops:grid-rows-[154px_134px] laptops:gap-[14px]'>
          {SERVICES.map(({ title, href, description }) => (
            <ServiceCard key={title} title={title} description={description} href={href} />
          ))}
        </section>

        <section className='mt-[200px] text-center pb-[60px]'>
          <h6 className='text-[18px] leading-[22px]'>Social Reviews</h6>

          <p className='mt-[18px] text-light-dove-gray text-[14px] leading-[21px] dark:text-[rgba(255,255,255,0.6)]'>
            Get featured in our social album.
            <br />
            How does our furniture look in your space? Share your images using the hashtag
            #avnifurniture or tag @furniture.avniverse
          </p>

          <AlbumWall />

          <Link
            href='/'
            className='inline-block mt-[45px] py-3 px-5 text-[12px] leading-[15px] rounded-[30px] border-[1px] border-alto-light'
          >
            View more
          </Link>
        </section>

        <button
          onClick={scrollScreenTo}
          className='bg-outer-space w-10 h-10 top-5 relative left-[calc(100%+30px)] rounded-full grid place-items-center text-wild-sand dark:bg-wild-sand dark:text-outer-space phones:w-10 phones:h-10 phones:left-[90%]'
        >
          <CaretUpFilled />
        </button>

        <HomeFooter />
      </main>
    </>
  );
};

export async function getServerSideProps() {
  // fetch proucts data from API
  return {
    props: { products: PRODUCTS },
  };
}

export default Home;
