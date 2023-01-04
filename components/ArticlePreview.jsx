import { useState } from 'react';
import Image from 'next/image';

import TextSlider from './TextSlider';

import AvniImage from '../public/assets/pngs/avni-white-bg-blue.png';
import ArticlePoint from './ArticlePoint';

const ArticlePreview = ({ articles }) => {
  const [currentArticle, setCurrentArticle] = useState(null);

  const reset = () => setCurrentArticle(null);

  return (
    <section className='mt-[26px] mb-8 w-full h-[734px] grid grid-cols-2'>
      <TextSlider
        extraStyles={{
          gridRowStart: '1',
          gridColumnStart: '1',
          opacity: currentArticle ? '1' : '0',
          visibility: currentArticle ? 'visible' : 'hidden',
        }}
        reset={reset}
        _id={currentArticle?._id || ''}
        title={currentArticle?.title || ''}
        pretext={currentArticle?.article || ''}
        date={new Date(currentArticle?.createdAt)}
      />

      <div
        className={`col-start-1 row-start-1 flex flex-col gap-y-[50px] items-center justify-center transition-all duration-500 ${
          currentArticle && 'opacity-0 invisible'
        }`}
      >
        <div className='w-full px-3 flex items-center justify-between gap-x-[5%]'>
          {articles.map(({ title, _id }) => (
            <ArticlePoint
              key={_id}
              text={title}
              onClick={() =>
                setCurrentArticle(articles.find(({ _id: articleID }) => articleID === _id))
              }
            />
          ))}
        </div>

        <p className='font-medium text-[14px] leading-4 tracking-[0.36px] text-dove-gray text-center'>
          Click a campaign topic to begin with
        </p>
      </div>

      <div className='relative h-max col-start-2 row-start-1'>
        <Image
          alt='avni news article'
          className='w-[498px] h-[560px]'
          src={currentArticle?.image || AvniImage}
        />

        <button
          className={`w-[50px] h-[50px] bg-white bg-[url(/assets/svgs/pause2.svg)] bg-center bg-no-repeat absolute bottom-4 right-4 grid place-items-center rounded-full transition-all duration-500 ${
            currentArticle || 'opacity-0 invisible'
          }`}
        />
      </div>
    </section>
  );
};

export default ArticlePreview;
