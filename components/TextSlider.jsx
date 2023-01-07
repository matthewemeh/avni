import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

import ArrowRight from './icons/ArrowRight';

import { getMonthName, toggleClass } from '../public/utils';

const TextSlider = ({ pretext, title, date, _id, extraStyles, reset }) => {
  const [maxTextLength, setMaxTextLength] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [pretexts, setPretexts] = useState([]);
  const articleRef = useRef();
  const MAX_PRETEXTS = 3;

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
    setPretexts(tempPretexts);
    setSlideIndex(0);
  };

  const moveLeft = element => {
    element.style.left = '-100%';
  };

  const moveDown = element => {
    element.style.top = '67%';
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
    const pretextTags = document.querySelectorAll('.pretext');
    const firstTag = pretextTags[slideIndex];

    pretextTags.forEach((pretextTag, index) => {
      if (slideIndex === index) moveLeft(pretextTag);
      else moveUp(pretextTag);

      setTimeout(() => moveDown(firstTag), 1000);
      setTimeout(() => toggleClass(firstTag, 'w-full', 'w-0'), 1500);
      setTimeout(() => moveRight(firstTag), 2000);
      setTimeout(() => toggleClass(firstTag, 'w-full', 'w-0'), 2500);
    });
  };

  useEffect(getPretexts, [pretext, maxTextLength]);

  useEffect(() => {
    if (pretexts.length < MAX_PRETEXTS) return;

    const timer = setInterval(() => {
      moveText();
      setSlideIndex((slideIndex + 1) % MAX_PRETEXTS);
    }, 4000);
    return () => clearInterval(timer);
  }, [slideIndex, pretexts, pretext]);

  // componentDidMount
  useEffect(() => setMaxTextLength(Number(articleRef.current.clientWidth / 11.5)), []);

  return (
    <div
      style={extraStyles}
      className='text-[20px] leading-[45px] my-[125px] transition-all duration-500'
    >
      {date && !isNaN(date) && (
        <small className='block text-dove-gray text-[14px] leading-[17px]'>
          {`${date.getDate()}`.padStart(2, '0')} {getMonthName(date.getMonth())}{' '}
          {date?.getFullYear()} |{' '}
          <span className='text-outer-space dark:text-alto-light'>{title}</span>
        </small>
      )}

      <article
        ref={articleRef}
        className='my-[50px] h-[60%] min-h-[182px] overflow-hidden relative grid grid-rows-3 grid-cols-1'
      >
        {pretexts.slice(0, MAX_PRETEXTS).map((pretext, index) => (
          <p
            key={index}
            style={{ left: 0, top: `${(index / MAX_PRETEXTS) * 100}%` }}
            className={`pretext overflow-hidden whitespace-nowrap w-full absolute text-[20px] leading-[45px] transition-all duration-500 laptops:text-[16px] ${
              index === (slideIndex + 1) % MAX_PRETEXTS ? 'opacity-100' : 'opacity-30'
            }`}
          >
            {pretext}
          </p>
        ))}
      </article>

      <Link
        href={`/articles/${_id}`}
        className='flex items-center gap-x-2 text-[14px] leading-[17px]'
      >
        Read the article <ArrowRight />
      </Link>

      <button onClick={reset} className='underline w-max h-max text-[14px] leading-[17px]'>
        Skip to begin
      </button>
    </div>
  );
};

export default TextSlider;
