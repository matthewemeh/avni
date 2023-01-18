import Link from 'next/link';
import { useState, useEffect, useRef, useMemo } from 'react';

import ArrowRight from './icons/ArrowRight';

import { getMonthName } from '../public/utils';

const TextSlider = ({ pretext, title, date, _id, isCampaigns, extraStyles, next, slideClass }) => {
  const MAX_PRETEXTS = 4;
  const articleRef = useRef();
  const [slideIndex, setSlideIndex] = useState(0);
  const [maxTextLength, setMaxTextLength] = useState(0);

  const getPretexts = () => {
    let tempPretext = '';
    let tempPretexts = [];
    const pretextLength = pretext.length;

    for (let i = 0; i < pretextLength; i++) {
      const isLastChar = i === pretextLength - 1;

      tempPretext += pretext[i];
      if (tempPretext.length > maxTextLength || pretext[i] === '.' || isLastChar) {
        tempPretexts.push(tempPretext);
        tempPretext = '';
      }
    }
    setSlideIndex(0);

    return [...tempPretexts.slice(0, 3), tempPretexts[0]];
  };

  const pretexts = useMemo(getPretexts, [pretext, maxTextLength]);

  const moveLeft = element => {
    element.style.left = '-100%';
  };

  const moveDown = element => {
    element.style.top = '100%';
  };

  const moveRight = element => {
    element.style.left = '0%';
  };

  const moveUp = element => {
    const topPercent = element.style.top;
    const oldYPos = parseInt(topPercent.substring(0, topPercent.length - 1)); // get top percent and remove %
    const newYPosPercent = `${oldYPos - 33}%`;
    element.style.top = newYPosPercent;
  };

  const moveText = () => {
    const pretextTags = document.querySelectorAll(`.${slideClass}`);
    const firstTag = pretextTags[slideIndex];
    const secondTag = pretextTags[(slideIndex + 1) % MAX_PRETEXTS];
    const lastTag = pretextTags[(slideIndex + 4) % MAX_PRETEXTS];

    pretextTags.forEach((pretextTag, index) => {
      moveUp(pretextTag);

      setTimeout(() => {
        if (slideIndex === index) moveLeft(pretextTag);
      }, 500);
      setTimeout(() => moveDown(firstTag), 1000);
      setTimeout(() => moveRight(firstTag), 2000);
      setTimeout(() => (lastTag.innerText = secondTag.innerText), 2500);
    });
  };

  useEffect(() => {
    if (pretexts.length < MAX_PRETEXTS) return;

    const timer = setInterval(() => {
      moveText();
      setSlideIndex((slideIndex + 1) % MAX_PRETEXTS);
    }, 4000);
    return () => clearInterval(timer);
  }, [slideIndex, pretexts]);

  // componentDidMount
  useEffect(() => setMaxTextLength(Number(articleRef.current.clientWidth / 11.5)), []);

  return (
    <div
      style={extraStyles}
      className='text-[20px] leading-[45px] my-[125px] laptops:my-0 transition-all duration-500'
    >
      {date && !isNaN(date) && (
        <small className='block text-dove-gray text-[14px] leading-[17px]'>
          {`${date.getDate()}`.padStart(2, '0')} {getMonthName(date.getMonth())}{' '}
          {date?.getFullYear()} |{' '}
          <span className='text-outer-space dark:text-alto-light'>{title}</span>
        </small>
      )}

      {isCampaigns && (
        <small className='block text-dove-gray text-[14px] leading-[17px]'>{title}</small>
      )}

      <article
        ref={articleRef}
        className='my-[50px] overflow-hidden h-2/5 min-h-[182px] relative grid grid-rows-3 grid-cols-1 laptops:text-[16px]'
      >
        {pretexts.map((pretext, index) => (
          <p
            key={index}
            style={{ left: 0, top: `${(index / 3) * 100}%` }}
            className={`${slideClass} overflow-hidden whitespace-nowrap w-full absolute transition-all duration-500 ${
              index === (slideIndex + 1) % MAX_PRETEXTS ? 'opacity-100' : 'opacity-30'
            }`}
          >
            {pretext}
          </p>
        ))}
      </article>

      {isCampaigns || (
        <div className='text-[14px] leading-[17px] flex flex-col gap-y-4 phones:flex-row'>
          <Link href={`/articles/${_id}`} className='flex items-center gap-x-2 w-max'>
            Read the article <ArrowRight />
          </Link>

          <button
            onClick={next}
            className='flex items-center justify-center gap-x-3 w-[37px] h-[37px] bg-outer-space text-white rounded-full ml-auto mr-4 dark:bg-white dark:text-shark transition-all duration-200 hover:w-[88px] hover:pl-[43px] phones:w-[88px] phones:pl-0'
          >
            <p className='select-none -ml-[43px] phones:ml-0'>Next</p>
            <ArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default TextSlider;
