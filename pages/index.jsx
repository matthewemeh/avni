import Head from 'next/head';
import Image from 'next/image';

import Slider from '../components/Slider';
import Footer from '../components/Footer';
import LinkBubble from '../components/LinkBubble';
import SpaceSlider from '../components/SpaceSlider';
import Testimonial from '../components/Testimonial';
import HistorySlider from '../components/HistorySlider';
import ArticlePreview from '../components/ArticlePreview';

import CurlyArrow from '../components/icons/CurlyArrow';
import CaretUpFilled from '../components/icons/CaretUpFilled';

import slide1 from '../public/assets/pngs/slide1.png';
import slide2 from '../public/assets/pngs/slide2.png';
import slide3 from '../public/assets/pngs/slide3.png';
import testVideo from '../public/assets/test-video.mp4';
import articleImage from '../public/assets/pngs/news-body.png';
import newsHeadMedia from '../public/assets/pngs/news-head.png';

import { scrollTop } from '../public/utils';

const SLIDES_DATA = [
  {
    _id: 1,
    image: slide1,
    video: null,
    title: 'Shop now',
    focalPoints: [
      { x: 20, y: 54 },
      { x: 35, y: 60 },
      { x: 70, y: 48 },
    ],
    themeColor: '#232b2b',
  },
  {
    _id: 2,
    image: null,
    video: testVideo,
    thumbnail: slide2,
    title: 'Why we are different',
    focalPoints: [],
    themeColor: '#b68e5c',
  },
  {
    _id: 3,
    image: slide3,
    video: null,
    title: 'Getting real with us',
    focalPoints: [
      { x: 12, y: 63 },
      { x: 50, y: 5 },
      { x: 85, y: 33 },
    ],
    themeColor: '#187789',
  },
];

const ARTICLES = [
  {
    _id: 1,
    createdAt: new Date('December 30, 2022 11:13:00'),
    updatedAt: new Date('December 30, 2022 11:13:00'),
    title: 'Deforestation',
    image: articleImage,
    article:
      'The production of wood-based furniture can contribute to deforestation, particularly if the wood is sourced from clearcut forests',
  },
  {
    _id: 2,
    createdAt: new Date('November 30, 2022 11:13:00'),
    updatedAt: new Date('December 10, 2022 11:13:00'),
    title: 'Eco-friendly furniture',
    image: articleImage,
    article:
      'We are conscious of the impact of furniture making on our environment. From Global warming, to Deforestation, to',
  },
  {
    _id: 3,
    createdAt: new Date('January 15, 2022 11:13:00'),
    updatedAt: new Date('January 16, 2022 11:13:00'),
    title: 'Global warming',
    image: articleImage,
    article:
      'We are conscious of the impact of furniture making on our environment. From Global warming, to Deforestation, to',
  },
];

export default function Home({ slidesData, articles }) {
  return (
    <>
      <Head>
        <title>Avni</title>
        <meta name='description' content='Generated by create next app' />
      </Head>

      <main className='font-medium tracking-[0.36px] overflow-hidden'>
        <header className='mt-20'>
          <h1 className='text-[42px] leading-[60px] text-center max-w-[387px] mx-auto laptops:text-[36px] laptops:max-w-[320px] phones:text-[32px] phones:leading-[50px]'>
            A mission to get your perfect piece
          </h1>

          <LinkBubble text='Go Shopping' href='/home' />
        </header>

        <div className='mx-[14%] mt-[5%] laptops:mx-[12%] phones:mx-[5%]'>
          <Slider slidesData={slidesData} />

          <Testimonial />

          <HistorySlider />

          <section className='mt-52'>
            <h3 className='text-[30px] leading-[45px] text-center laptops:text-[25px] phones:text-center phones:mx-auto phones:max-w-[60%]'>
              Furniture solution on a budget
            </h3>
            <div className='bg-[url(/assets/pngs/furniture1.png)] bg-cover mt-20 h-[560px] w-full bg-no-repeat bg-center flex items-end p-10 phones:p-5'>
              <p className='font-semibold text-[16px] leading-[100%] text-white laptops:text-[14px] phones:text-[16px] phones:leading-[25px]'>
                A budget furniture requirement of a new couple
              </p>
            </div>

            <div className='mt-52 bg-[url(/assets/pngs/furniture2.png)] w-full h-[560px] bg-cover bg-center bg-no-repeat flex items-end'>
              <div className='bg-[rgba(0,0,0,0.2)] backdrop-blur-[72px] flex items-center justify-between w-full py-14 px-[60px] gap-y-5 laptops:py-8 laptops:px-5 phones:flex-col'>
                <p className='font-semibold text-[32px] leading-10 max-w-[348px] text-white laptops:text-[20px] laptops:leading-[24px] laptops:max-w-[220px] phones:max-w-none'>
                  Ideas for a cool living space
                </p>
                <button className='bg-white rounded-full text-cod-gray font-medium text-[12px] leading-4 py-[15px] px-[30px] phones:py-[11px] phones:px-[25px]'>
                  Visit
                </button>
              </div>
            </div>
          </section>

          <SpaceSlider />

          <section className='mt-52'>
            <h3 className='text-[30px] leading-[45px] text-center laptops:text-[25px]'>
              Our environment and Us
            </h3>
            <p className='text-[14px] leading-[21px] text-center max-w-[632px] mx-auto mt-[18px] mb-[30px]'>
              We are conscious of the impact of furniture making on our environment. At Avni, our
              goal is to promote eco-friendly furniture for you, for us and for our environment.
            </p>

            <LinkBubble text="Here's how" href='/home' />

            <Image
              src={newsHeadMedia}
              alt='avni news header'
              className='w-full h-full mt-[84px] mb-[26px]'
            />
            <CurlyArrow extraStyles={{ marginLeft: 'auto', marginRight: '5%' }} />
          </section>

          <ArticlePreview articles={articles} />

          <button
            onClick={scrollTop}
            className='bg-outer-space w-8 h-8 col-start-2 relative left-full top-4 rounded-full grid place-items-center text-wild-sand dark:bg-wild-sand dark:text-outer-space phones:w-10 phones:h-10 phones:left-[90%]'
          >
            <CaretUpFilled />
          </button>

          <Footer />
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  // fetch data from API
  return {
    props: {
      slidesData: SLIDES_DATA,
      articles: ARTICLES.map(article => ({
        _id: article._id,
        title: article.title,
        image: article.image,
        article: article.article,
        createdAt: article.createdAt.toString(),
      })),
    },
    revalidate: 1,
  };
}
