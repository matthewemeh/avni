import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import TextSlider from './TextSlider';
import ArticlePoint from './ArticlePoint';
import CampaignPreview from './CampaignPreview';

import { isInViewport } from '../public/utils';

import AvniImage from '../public/assets/pngs/avni-white-bg-blue.png';

const ArticlePreview = ({ articles }) => {
  const previewRef = useRef();
  const [articleIndex, setArticleIndex] = useState(0);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [campaignVisible, setCampaignVisible] = useState(true);

  const next = () => {
    const nextArticleIndex = (articleIndex + 1) % articles.length;

    setCurrentArticle(articles[nextArticleIndex]);
    setArticleIndex(nextArticleIndex);
  };

  const startCampaignTimeout = () => {
    if (isInViewport(previewRef.current)) {
      setTimeout(() => setCampaignVisible(false), 12000);
    }
  };

  // componentDidMount
  useEffect(() => window.addEventListener('scroll', startCampaignTimeout), []);

  // remove scroll listener once preview has been shown
  useEffect(() => {
    if (!campaignVisible) window.removeEventListener('scroll', startCampaignTimeout);
  }, [campaignVisible]);

  return (
    <section className='mt-[26px] mb-[180px] w-full h-max grid grid-cols-2 laptops:mt-0 phones:grid-cols-1 phones:grid-rows-[repeat(2,auto)] phones:mt-0 phones:mb-20'>
      <TextSlider
        extraStyles={{
          gridRowStart: '1',
          gridColumnStart: '1',
          opacity: currentArticle ? '1' : '0',
          visibility: currentArticle ? 'visible' : 'hidden',
        }}
        next={next}
        key={articleIndex}
        slideClass='pretext'
        _id={currentArticle?._id || ''}
        title={currentArticle?.title || ''}
        pretext={currentArticle?.article || ''}
        date={new Date(currentArticle?.createdAt)}
      />

      <CampaignPreview visible={campaignVisible} />

      <div
        ref={previewRef}
        className={`col-start-1 row-start-1 mr-10 flex flex-col gap-y-[50px] items-center justify-center relative bottom-16 transition-all duration-500 phones:mr-0 laptops:-bottom-4 phones:bottom-0 phones:h-max ${
          (currentArticle || campaignVisible) && 'opacity-0 invisible'
        }`}
      >
        <div className='w-full flex items-center justify-around gap-x-[30px] gap-y-[30px] laptops:grid laptops:grid-rows-2 laptops:grid-cols-2 laptops:gap-x-0 phones:bottom-0 phones:grid-cols-1'>
          {articles.map(({ title, _id }) => (
            <ArticlePoint
              key={_id}
              text={title}
              onClick={() => setCurrentArticle(articles.find(article => article._id === _id))}
            />
          ))}
        </div>

        <p className='font-medium text-[14px] leading-[17px] text-dove-gray text-center'>
          Click a campaign topic to begin with
        </p>
      </div>

      <div className='relative h-max col-start-2 row-start-1 phones:mt-20 phones:row-start-2 phones:col-start-1 phones:w-max phones:mx-auto'>
        <Image
          quality={40}
          priority={true}
          src={currentArticle?.image || AvniImage}
          alt={`Avni news article${currentArticle?.title ? ` - ${currentArticle.title}` : ''}`}
          className='w-[470px] h-[470px] ml-auto brightness-[0.8] laptops:w-[380px] laptops:h-[380px] phones:w-[339px] phones:mx-auto phones:h-[380px] small-phones:max-w-[90vw]'
        />

        <button
          className={`w-[50px] h-[50px] bg-white bg-[url(/assets/svgs/pause2.svg)] bg-center bg-no-repeat absolute bottom-4 right-4 grid place-items-center rounded-full transition-all duration-500 laptops:scale-[0.72] phones:scale-[0.68] ${
            currentArticle || 'opacity-0 invisible'
          }`}
        />
      </div>
    </section>
  );
};

export default ArticlePreview;
