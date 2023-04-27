import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

import TextSlider from './TextSlider';
import ArticlePoint from './ArticlePoint';
import CampaignPreview from './CampaignPreview';

import AvniImage from '@/public/assets/pngs/avni-white-bg-blue.png';

import { Article } from '@/public/interfaces';
import { isInViewport } from '@/public/utils';

interface Props {
  articles: Article[];
}

const ArticlePreview: React.FC<Props> = ({ articles }) => {
  const previewRef = useRef<HTMLDivElement>(null);
  const [articleIndex, setArticleIndex] = useState(-1);
  const [currentArticle, setCurrentArticle] = useState<Article>(articles[0]);

  const onNext = () => {
    const nextArticleIndex = (articleIndex + 1) % articles.length;

    setCurrentArticle(articles[nextArticleIndex]);
    setArticleIndex(nextArticleIndex);
  };

  const startCampaignTimeout = () => {
    if (isInViewport(previewRef?.current)) setTimeout(onNext, 12000);
  };

  // componentDidMount
  useEffect(() => window.addEventListener('scroll', startCampaignTimeout), []);

  // remove scroll listener once preview has been shown
  useEffect(() => {
    if (articleIndex === 0) window.removeEventListener('scroll', startCampaignTimeout);
  }, [articleIndex]);

  return (
    <section className='mt-[26px] mb-[180px] w-full h-max grid grid-cols-2 laptops:mt-0 phones:grid-cols-1 phones:grid-rows-[repeat(2,auto)] phones:mt-0 phones:mb-20'>
      <TextSlider
        extraStyles={{
          gridRowStart: '1',
          gridColumnStart: '1',
          opacity: articleIndex >= 0 ? '1' : '0',
          visibility: articleIndex >= 0 ? 'visible' : 'hidden',
        }}
        onNext={onNext}
        key={articleIndex}
        slideClass='pretext'
        id={currentArticle.id}
        title={currentArticle.title}
        date={currentArticle.createdAt}
        pretext={currentArticle.article}
      />

      <CampaignPreview visible={articleIndex < 0} />

      <div
        ref={previewRef}
        className={`col-start-1 row-start-1 mr-10 flex flex-col gap-y-[50px] items-center justify-center relative bottom-16 transition-all duration-500 phones:mr-0 laptops:-bottom-4 phones:bottom-0 phones:h-max ${
          articleIndex >= 0 || 'opacity-0 invisible'
        }`}
      >
        <div className='w-full flex items-center justify-around gap-x-[30px] gap-y-[30px] laptops:grid laptops:grid-rows-2 laptops:grid-cols-2 laptops:gap-x-0 phones:bottom-0 phones:grid-cols-1'>
          {articles.map(({ title, id }) => (
            <ArticlePoint
              key={id}
              text={title}
              onClick={() => setCurrentArticle(articles.find(article => article.id === id)!)}
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
          alt={`Avni news article: ${currentArticle.title}`}
          src={articleIndex >= 0 ? currentArticle.image : AvniImage}
          className='w-[470px] h-[470px] ml-auto brightness-[0.8] laptops:w-[380px] laptops:h-[380px] phones:w-[339px] phones:mx-auto phones:h-[380px] small-phones:max-w-[90vw]'
        />

        <button
          className={`w-[50px] h-[50px] bg-white bg-[url(/assets/svgs/pause2.svg)] bg-center bg-no-repeat absolute bottom-4 right-4 grid place-items-center rounded-full transition-all duration-500 laptops:scale-[0.72] phones:scale-[0.68] ${
            articleIndex >= 0 || 'opacity-0 invisible'
          }`}
        />
      </div>
    </section>
  );
};

export default ArticlePreview;
