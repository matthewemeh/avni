import { useState } from 'react';
import Image from 'next/image';

import TextSlider from './TextSlider';
import ArticlePoint from './ArticlePoint';
import CampaignPreview from './CampaignPreview';

import AvniImage from '../public/assets/pngs/avni-white-bg-blue.png';

const ArticlePreview = ({ articles }) => {
  const [currentArticle, setCurrentArticle] = useState(null);
  const [campaignVisible, setCampaignVisible] = useState(true);

  const reset = () => setCurrentArticle(null);

  setTimeout(() => setCampaignVisible(false), 12000);

  return (
    <section className='mt-[26px] mb-36 w-full h-max grid grid-cols-2 laptops:mt-16 phones:grid-cols-1 phones:grid-rows-[repeat(2,auto)] phones:mt-0 phones:mb-20'>
      <TextSlider
        extraStyles={{
          gridRowStart: '1',
          gridColumnStart: '1',
          opacity: currentArticle ? '1' : '0',
          visibility: currentArticle ? 'visible' : 'hidden',
        }}
        reset={reset}
        slideClass='pretext'
        _id={currentArticle?._id || ''}
        title={currentArticle?.title || ''}
        pretext={currentArticle?.article || ''}
        date={new Date(currentArticle?.createdAt)}
      />

      <CampaignPreview visible={campaignVisible} />

      <div
        className={`col-start-1 row-start-1 mr-10 flex flex-col gap-y-[50px] items-center justify-center laptops:relative laptops:top-[15%] transition-all duration-500 phones:mr-0 phones:top-0 phones:h-max ${
          (currentArticle || campaignVisible) && 'opacity-0 invisible'
        }`}
      >
        <div className='w-full flex items-center justify-around gap-x-[30px] laptops:grid laptops:grid-rows-2 laptops:grid-cols-2 laptops:gap-y-6 laptops:gap-x-0 phones:bottom-0 phones:grid-cols-1'>
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

      <div className='relative h-max col-start-2 row-start-1 phones:mt-20 phones:row-start-2 phones:col-start-1'>
        <Image
          alt='avni news article'
          src={currentArticle?.image || AvniImage}
          className='w-[498px] h-[460px] ml-auto laptops:w-[365px] laptops:h-[410px] phones:w-[339px] phones:mx-auto phones:h-[380px]'
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
