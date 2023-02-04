import Head from 'next/head';
import Link from 'next/link';
import { useState, useRef, useContext, useEffect } from 'react';

import { AppContext } from './_app';

import AlbumWall from '../components/AlbumWall';
import SpaceCard from '../components/SpaceCard';
import LinkBubble from '../components/LinkBubble';
import RoomSlider from '../components/RoomSlider';
import HomeSearch from '../components/HomeSearch';
import Navigation from '../components/Navigation';
import ProductCard from '../components/ProductCard';
import ServiceCard from '../components/ServiceCard';
import HeaderBanner from '../components/HeaderBanner';
import CategoryCard from '../components/CategoryCard';
import ThemeSaleCard from '../components/ThemeSaleCard';
import HomeFooter from '../components/footers/HomeFooter';

import Cart from '../components/icons/Cart';
import User from '../components/icons/User';
import Heart from '../components/icons/Heart';
import ArrowRight from '../components/icons/ArrowRight';
import CaretUpFilled from '../components/icons/CaretUpFilled';
import HorizontalScrollBar from '../components/HorizontalScrollBar';

import themeRoom1 from '../public/assets/pngs/theme-room1.png';
import themeRoom2 from '../public/assets/pngs/theme-room2.png';
import productImage1 from '../public/assets/pngs/product1.png';
import productImage2 from '../public/assets/pngs/product2.png';
import productImage3 from '../public/assets/pngs/product3.png';

import { addClass, removeClass, scrollScreenTo, showAlert } from '../public/utils';

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
  const [scrollPosY, setScrollPosY] = useState(0);
  const [currentSection, setCurrentSection] = useState('home');
  const [scrolledDirection, setScrolledDirection] = useState('up');
  const { MOBILE_BREAKPOINT, SMALL_MOBILE_BREAKPOINT, screenWidth } = useContext(AppContext);
  const subNavButtons = [
    { text: 'home', top: 0 },
    { text: 'categories', top: 1670 },
    { text: 'themes', top: 900 },
    { text: 'rooms', top: 3175 },
    { text: 'sales', top: 2300 },
  ];

  const onChangeSection = (top, newSection) => {
    scrollScreenTo(top);
    setCurrentSection(newSection);
  };

  const handleScroll = () => {
    const newScrollPosY = window.scrollY || document.documentElement.scrollTop;

    if (newScrollPosY > scrollPosY) {
      // user is scrolling down
      addClass(headerRef.current, '-top-36');
      removeClass(headerRef.current, 'top-[60px]');
      setScrolledDirection('down');
    } else {
      // user is scrolling up
      addClass(headerRef.current, 'top-[60px]');
      removeClass(headerRef.current, '-top-36');
      setScrolledDirection('up');
    }

    setScrollPosY(newScrollPosY);
  };

  const showButton = (index, containerID) => {
    if (screenWidth <= SMALL_MOBILE_BREAKPOINT) return;

    const container = document.querySelector(`#${containerID}`);
    const containerWidth = container.clientWidth;
    const currentScrollLeft = container.scrollLeft;
    const containerScrollWidth = container.scrollWidth;

    const reachedStart = currentScrollLeft === 0;
    const reachedEnd = Math.abs(containerScrollWidth - currentScrollLeft - containerWidth) < 1;

    const scrollRightButtons = document.querySelectorAll('.scroll-right-button');
    const scrollLeftButtons = document.querySelectorAll('.scroll-left-button');
    const targetRightButton = scrollRightButtons[index];
    const targetLeftButton = scrollLeftButtons[index];

    if (reachedEnd) {
      addClass(targetRightButton, 'right-0', 'opacity-0', 'invisible');
      removeClass(targetRightButton, '-right-[27px]', 'opacity-100', 'visible');
    } else {
      removeClass(targetRightButton, 'right-0', 'opacity-0', 'invisible');
      addClass(targetRightButton, '-right-[27px]', 'opacity-100', 'visible');
    }

    if (reachedStart) {
      addClass(targetLeftButton, 'left-0', 'opacity-0', 'invisible');
      removeClass(targetLeftButton, '-left-[27px]', 'opacity-100', 'visible');
    } else {
      removeClass(targetLeftButton, 'left-0', 'opacity-0', 'invisible');
      addClass(targetLeftButton, '-left-[27px]', 'opacity-100', 'visible');
    }
  };

  const hideButton = index => {
    if (screenWidth <= SMALL_MOBILE_BREAKPOINT) return;

    const scrollRightButtons = document.querySelectorAll('.scroll-right-button');
    const scrollLeftButtons = document.querySelectorAll('.scroll-left-button');
    const targetRightButton = scrollRightButtons[index];
    const targetLeftButton = scrollLeftButtons[index];

    addClass(targetRightButton, 'right-0', 'opacity-0', 'invisible');
    removeClass(targetRightButton, '-right-[27px]', 'opacity-100', 'visible');

    addClass(targetLeftButton, 'left-0', 'opacity-0', 'invisible');
    removeClass(targetLeftButton, '-left-[27px]', 'opacity-100', 'visible');
  };

  const scrollNextItems = containerID => {
    const container = document.querySelector(`#${containerID}`);

    const containerWidth = container.clientWidth;
    const currentScrollLeft = container.scrollLeft;
    const newScrollLeft = currentScrollLeft + containerWidth;

    container.scrollTo({ left: newScrollLeft });
  };

  const scrollPreviousItems = containerID => {
    const container = document.querySelector(`#${containerID}`);

    const containerWidth = container.clientWidth;
    const currentScrollLeft = container.scrollLeft;
    const newScrollLeft = currentScrollLeft - containerWidth;

    container.scrollTo({ left: newScrollLeft });
  };

  useEffect(() => (window.onscroll = handleScroll), [scrollPosY]);

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
        extraNavStyles={{
          top: '35px',
          alignItems: 'start',
          paddingTop: screenWidth > MOBILE_BREAKPOINT ? '40px' : '30px',
          paddingRight: screenWidth > MOBILE_BREAKPOINT ? '65px' : '25px',
          height:
            scrolledDirection === 'up'
              ? screenWidth > MOBILE_BREAKPOINT
                ? '170px'
                : '90px'
              : '90px',
        }}
      />

      <HeaderBanner />

      <main className='font-medium -top tracking-[0.36px] mx-[15%] mt-[250px] scroll-smooth laptops:mt-[281px] phones:mx-[5%] phones:mt-[137px]'>
        <header
          ref={headerRef}
          className='text-[12px] leading-[15px] w-[65%] left-1/2 -translate-x-1/2 fixed top-[60px] z-[70] transition-all duration-500 phones:static phones:-translate-x-0 phones:w-full phones:border-b-[1px] phones:border-wild-sand'
        >
          <div className='flex gap-x-[25px] items-center justify-between h-[46px] mx-auto'>
            <HomeSearch />

            <button className='bg-wild-sand text-[14px] leading-[17px] flex items-center justify-center gap-x-[10px] min-w-[46px] h-full rounded-full text-outer-space phones:dark:text-white phones:absolute phones:bg-transparent phones:top-[80px] phones:h-[30px] phones:min-w-max phones:w-[30px]'>
              <Cart />
              <p className='text-black hidden dark:text-white phones:block'>Cart</p>
            </button>

            <button className='bg-wild-sand text-[14px] leading-[17px] flex items-center justify-center gap-x-[10px] min-w-[46px] h-full rounded-full text-outer-space phones:dark:text-white phones:absolute phones:bg-transparent phones:top-[80px] phones:left-[72px] phones:h-[30px] phones:min-w-max phones:w-[30px]'>
              <Heart />
              <p className='text-black hidden dark:text-white phones:block'>Favourites</p>
            </button>
          </div>

          <div className='flex gap-5 items-start pt-5 mt-6 whitespace-nowrap border-t-[1px] border-wild-sand mx-auto phones:border-transparent'>
            {subNavButtons.map(({ text, top }) => (
              <button
                key={text}
                onClick={() => onChangeSection(top, text)}
                className={`capitalize border-[1px] h-[39px] px-[25px] bg-wild-sand rounded-[40px] text-outer-space first:dark:border-woodsmoke phones:hidden ${
                  text === currentSection ? 'border-outer-space' : 'border-transparent'
                }`}
              >
                {text}
              </button>
            ))}

            <Link
              href='/'
              className='flex items-center justify-center gap-x-[10px] py-3 px-5 ml-auto rounded-[30px] border-[1px] border-alto-light laptops:w-[39px] laptops:h-[39px] laptops:rounded-full laptops:px-3 phones:w-11 phones:h-11 phones:relative phones:bottom-[90px] phones:bg-wild-sand phones:border-wild-sand phones:dark:bg-woodsmoke'
            >
              <User />
              <p className='laptops:hidden'>Sign in or Sign up</p>
            </Link>
          </div>
        </header>

        <section className='mx-[4%] phones:-mt-12 phones:mx-0'>
          <h1 className='text-[24px] leading-[29px] mt-[90px] text-black dark:text-wild-sand laptops:text-[22px] laptops:leading-[27px] phones:text-[20px] phones:leading-[24px]'>
            Welcome back!
          </h1>

          <h2 className='text-[14px] leading-[21px] text-light-dove-gray mt-[17px] laptops:text-[12px]'>
            We are on a mission to get your perfect piece! Anticipate the smile that comes at your
            items&apos; arrival 😁
          </h2>

          <h3 className='text-[18px] leading-[22px] mt-[30px] laptops:mt-10 laptops:text-[16px] laptops:leading-5 phones:text-[14px] phones:leading-[17px]'>
            Award winning products
          </h3>
          <LinkBubble extraStyles={{ marginLeft: '0' }} href='/' text='View all' />
        </section>

        <section className='relative mt-[30px] laptops:mt-[75px]'>
          <div
            id='products'
            onMouseLeave={() => hideButton(0)}
            onMouseEnter={() => showButton(0, 'products')}
            className='x-scroll flex gap-x-[5px] overflow-x-scroll scroll-smooth'
          >
            {[...products, ...products].map(({ name, type, price, image, _id }, index) => (
              <ProductCard
                key={index}
                productName={name}
                productType={type}
                productPrice={price}
                productImage={image}
              />
            ))}
          </div>

          <HorizontalScrollBar
            linkedContainerID='products'
            onScroll={() => showButton(0, 'products')}
          />

          <button
            onMouseLeave={() => hideButton(0)}
            onMouseEnter={() => showButton(0, 'products')}
            onClick={() => scrollPreviousItems('products')}
            onMouseUp={() => setTimeout(() => showButton(0, 'products'), 500)}
            className='scroll-left-button -rotate-180 absolute z-50 top-1/2 -translate-y-1/2 left-0 opacity-0 invisible box-content border-[10px] border-white grid place-items-center text-white bg-zorba w-[35px] h-[35px] rounded-full transition-all duration-500 dark:border-shark dark:bg-white dark:text-zorba small-phones:hidden'
          >
            <ArrowRight />
          </button>
          <button
            onMouseLeave={() => hideButton(0)}
            onMouseEnter={() => showButton(0, 'products')}
            onClick={() => scrollNextItems('products')}
            onMouseUp={() => setTimeout(() => showButton(0, 'products'), 500)}
            className='scroll-right-button absolute z-50 top-1/2 -translate-y-1/2 right-0 opacity-0 invisible box-content border-[10px] border-white grid place-items-center text-white bg-zorba w-[35px] h-[35px] rounded-full transition-all duration-500 dark:border-shark dark:bg-white dark:text-zorba small-phones:hidden'
          >
            <ArrowRight />
          </button>
        </section>

        <section className='mt-[200px] h-[560px] grid grid-cols-[40%_24%_36%] grid-flow-col grid-rows-[repeat(560,1px)] laptops:h-[488px] phones:mt-[84px] phones:grid-cols-none phones:grid-rows-[137px_487px_224px_216px_424px] phones:justify-center phones:h-max phones:gap-y-5'>
          <div className='bg-alto bg-[url(/assets/pngs/decoration1.png)] bg-cover bg-center bg-no-repeat row-start-1 row-end-[560] flex items-center justify-center flex-col gap-y-[100px] phones:row-start-2 phones:row-end-auto'>
            <div style={{ animationName: 'ripple-black' }} className='ripple' />
            <div style={{ animationName: 'ripple-black' }} className='ripple' />
          </div>

          <div className='bg-zorba row-start-1 row-end-[338] font-bold px-[15%] flex flex-col gap-y-5 items-center justify-center laptops:px-[10%] phones:row-start-1 phones:row-end-auto phones:col-end-1 phones:py-10 phones:px-9'>
            <p className='text-[16px] leading-5 text-[rgba(255,255,255,0.5)] laptops:text-[14px] laptops:leading-[17px]'>
              Trending Product Categories
            </p>
            <p className='text-[14px] leading-[17px] text-[rgba(255,255,255,0.5)] laptops:text-[12px] laptops:leading-[15px] laptops:font-semibold'>
              Get inspired with what others are buying...
            </p>
          </div>

          <div className='bg-silver-chalice grid place-items-center row-start-[338] row-end-[560] bg-[url(/assets/pngs/decoration2.png)] bg-no-repeat bg-cover bg-center phones:row-start-4 phones:row-end-auto'>
            <div style={{ animationName: 'ripple-black' }} className='ripple' />
          </div>

          <div className='bg-dorado bg-[url(/assets/pngs/decoration3.png)] bg-cover bg-center bg-no-repeat row-start-1 row-end-[196] flex items-center justify-center gap-x-[20%] phones:row-start-3 phones:col-end-1 phones:row-end-auto'>
            <div style={{ animationName: 'ripple-black' }} className='ripple' />
            <div style={{ animationName: 'ripple-black' }} className='ripple' />
          </div>

          <div className='bg-boulder bg-[url(/assets/pngs/decoration4.png)] bg-cover bg-center bg-no-repeat row-start-[196] row-end-[560] grid place-items-center phones:row-start-5 phones:row-end-auto'>
            <div style={{ animationName: 'ripple-black' }} className='ripple' />
          </div>
        </section>

        <section className='mt-[200px] text-center phones:text-left phones:mt-[84px]'>
          <h4 className='text-[18px] leading-[22px]'>Categories</h4>

          <div className='relative mt-[84px] phones:mt-[30px]'>
            <div
              id='categories'
              onMouseLeave={() => hideButton(1)}
              onMouseEnter={() => showButton(1, 'categories')}
              className='x-scroll flex gap-x-[5px] overflow-x-scroll scroll-smooth'
            >
              {CATEGORIES.map(({ _id, categoryName, bgImage }) => (
                <CategoryCard key={_id} categoryName={categoryName} bgImage={bgImage} />
              ))}
            </div>

            <HorizontalScrollBar
              linkedContainerID='categories'
              onScroll={() => showButton(1, 'categories')}
            />

            <button
              onMouseLeave={() => hideButton(1)}
              onMouseEnter={() => showButton(1, 'categories')}
              onClick={() => scrollPreviousItems('categories')}
              onMouseUp={() => setTimeout(() => showButton(1, 'categories'), 500)}
              className='scroll-left-button -rotate-180 absolute z-50 top-1/2 -translate-y-1/2 left-0 opacity-0 invisible box-content border-[10px] border-white grid place-items-center text-white bg-zorba w-[35px] h-[35px] rounded-full transition-all duration-500 dark:border-shark dark:bg-white dark:text-zorba small-phones:hidden'
            >
              <ArrowRight />
            </button>
            <button
              onMouseLeave={() => hideButton(1)}
              onMouseEnter={() => showButton(1, 'categories')}
              onClick={() => scrollNextItems('categories')}
              onMouseUp={() => setTimeout(() => showButton(1, 'categories'), 500)}
              className='scroll-right-button absolute z-50 top-1/2 -translate-y-1/2 right-0 opacity-0 invisible box-content border-[10px] border-white grid place-items-center text-white bg-zorba w-[35px] h-[35px] rounded-full transition-all duration-500 dark:border-shark dark:bg-white dark:text-zorba small-phones:hidden'
            >
              <ArrowRight />
            </button>
          </div>
        </section>

        <section className='mt-[200px] text-center phones:text-left phones:mt-[84px]'>
          <h5 className='text-[18px] leading-[22px]'>Theme sales</h5>

          <div className='relative mt-[84px] phones:mt-[30px]'>
            <div
              id='themes'
              onMouseLeave={() => hideButton(2)}
              onMouseEnter={() => showButton(2, 'themes')}
              className='x-scroll flex gap-x-[5px] overflow-x-scroll scroll-smooth'
            >
              {THEME_SALES.map(({ _id, image, title, description }) => (
                <ThemeSaleCard
                  key={_id}
                  themeTitle={title}
                  themeImage={image}
                  themeDescription={description}
                />
              ))}
            </div>

            <HorizontalScrollBar
              linkedContainerID='themes'
              onScroll={() => showButton(2, 'themes')}
            />

            <button
              onMouseLeave={() => hideButton(2)}
              onMouseEnter={() => showButton(2, 'themes')}
              onClick={() => scrollPreviousItems('themes')}
              onMouseUp={() => setTimeout(() => showButton(2, 'themes'), 500)}
              className='scroll-left-button -rotate-180 absolute z-50 top-1/2 -translate-y-1/2 left-0 opacity-0 invisible box-content border-[10px] border-white grid place-items-center text-white bg-zorba w-[35px] h-[35px] rounded-full transition-all duration-500 dark:border-shark dark:bg-white dark:text-zorba small-phones:hidden'
            >
              <ArrowRight />
            </button>
            <button
              onMouseLeave={() => hideButton(2)}
              onMouseEnter={() => showButton(2, 'themes')}
              onClick={() => scrollNextItems('themes')}
              onMouseUp={() => setTimeout(() => showButton(2, 'themes'), 500)}
              className='scroll-right-button absolute z-50 top-1/2 -translate-y-1/2 right-0 opacity-0 invisible box-content border-[10px] border-white grid place-items-center text-white bg-zorba w-[35px] h-[35px] rounded-full transition-all duration-500 dark:border-shark dark:bg-white dark:text-zorba small-phones:hidden'
            >
              <ArrowRight />
            </button>
          </div>
        </section>

        <section className='mt-[200px] text-center phones:text-left phones:mt-[84px]'>
          <h5 className='text-[18px] leading-[22px]'>Rooms</h5>

          <div className='relative mt-[84px] phones:mt-14'>
            <RoomSlider showButton={showButton} hideButton={hideButton} />

            <HorizontalScrollBar
              linkedContainerID='rooms'
              onScroll={() => showButton(3, 'rooms')}
            />

            <button
              onMouseLeave={() => hideButton(3)}
              onMouseEnter={() => showButton(3, 'rooms')}
              onClick={() => scrollPreviousItems('rooms')}
              onMouseUp={() => setTimeout(() => showButton(3, 'rooms'), 500)}
              className='scroll-left-button -rotate-180 absolute z-50 top-1/2 -translate-y-1/2 left-0 opacity-0 invisible box-content border-[10px] border-white grid place-items-center text-white bg-zorba w-[35px] h-[35px] rounded-full transition-all duration-500 dark:border-shark dark:bg-white dark:text-zorba small-phones:hidden'
            >
              <ArrowRight />
            </button>
            <button
              onMouseLeave={() => hideButton(3)}
              onMouseEnter={() => showButton(3, 'rooms')}
              onClick={() => scrollNextItems('rooms')}
              onMouseUp={() => setTimeout(() => showButton(3, 'rooms'), 500)}
              className='scroll-right-button absolute z-50 top-1/2 -translate-y-1/2 right-0 opacity-0 invisible box-content border-[10px] border-white grid place-items-center text-white bg-zorba w-[35px] h-[35px] rounded-full transition-all duration-500 dark:border-shark dark:bg-white dark:text-zorba small-phones:hidden'
            >
              <ArrowRight />
            </button>
          </div>
        </section>

        <section className='mt-[200px] text-center phones:text-left phones:mt-[84px]'>
          <h6>Ideas for your space</h6>

          <div className='relative mt-[84px] phones:mt-[30px]'>
            <div
              id='space-ideas'
              onMouseLeave={() => hideButton(4)}
              onMouseEnter={() => showButton(4, 'space-ideas')}
              className='x-scroll flex gap-x-[5px] overflow-x-scroll scroll-smooth'
            >
              {SPACE_IDEAS.map(({ _id, bgImage, title }) => (
                <SpaceCard key={_id} bgImage={bgImage} title={title} />
              ))}
            </div>

            <HorizontalScrollBar
              linkedContainerID='space-ideas'
              onScroll={() => showButton(4, 'space-ideas')}
            />

            <button
              onMouseLeave={() => hideButton(4)}
              onMouseEnter={() => showButton(4, 'space-ideas')}
              onClick={() => scrollPreviousItems('space-ideas')}
              onMouseUp={() => setTimeout(() => showButton(4, 'space-ideas'), 500)}
              className='scroll-left-button -rotate-180 absolute z-50 top-1/2 -translate-y-1/2 left-0 opacity-0 invisible box-content border-[10px] border-white grid place-items-center text-white bg-zorba w-[35px] h-[35px] rounded-full transition-all duration-500 dark:border-shark dark:bg-white dark:text-zorba small-phones:hidden'
            >
              <ArrowRight />
            </button>
            <button
              onMouseLeave={() => hideButton(4)}
              onMouseEnter={() => showButton(4, 'space-ideas')}
              onClick={() => scrollNextItems('space-ideas')}
              onMouseUp={() => setTimeout(() => showButton(4, 'space-ideas'), 500)}
              className='scroll-right-button absolute z-50 top-1/2 -translate-y-1/2 right-0 opacity-0 invisible box-content border-[10px] border-white grid place-items-center text-white bg-zorba w-[35px] h-[35px] rounded-full transition-all duration-500 dark:border-shark dark:bg-white dark:text-zorba small-phones:hidden'
            >
              <ArrowRight />
            </button>
          </div>
        </section>

        <section className='mt-[200px] grid grid-rows-[repeat(2,minmax(134px,auto))] grid-cols-2 gap-x-[21px] gap-y-[17px] laptops:grid-rows-[154px_134px] laptops:gap-[14px] phones:mt-[84px] phones:grid-cols-1 phones:gap-y-5 phones:grid-rows-[154px_134px_154px_132px]'>
          {SERVICES.map(({ title, href, description }) => (
            <ServiceCard key={title} title={title} description={description} href={href} />
          ))}
        </section>

        <section className='mt-[200px] text-center pb-[60px] phones:text-left phones:mt-[84px] phones:pb-16'>
          <h6 className='text-[18px] leading-[22px]'>Social Reviews</h6>

          <p className='mt-[18px] text-light-dove-gray text-[14px] leading-[21px] dark:text-[rgba(255,255,255,0.6)]'>
            Get featured in our social album.
            <br className='phones:hidden' />
            How does our furniture look in your space? Share your images using the hashtag
            #avnifurniture or tag @furniture.avniverse
          </p>

          <AlbumWall />

          <Link
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.instagram.com/avni.space/'
            className='block w-max mx-auto mt-[45px] py-3 px-5 text-[12px] leading-[15px] rounded-[30px] border-[1px] border-alto-light'
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
