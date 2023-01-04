import Link from 'next/link';
import { useState, useEffect } from 'react';

import ArrowRight from './icons/ArrowRight';

import { getMonthName } from '../public/utils';

const TextSlider = ({ pretext, title, date, _id, extraStyles, reset }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [pretexts, setPretexts] = useState([]);

  const getPretexts = () => {
    let tempPretext = '';
    let tempPretexts = [];
    const pretextLength = pretext.length;
    const maxTextLength = parseInt(window.screen.availWidth / 32);

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
      if (slideIndex === index) {
        moveLeft(pretextTag);
        moveDown(pretextTag);
      } else moveUp(pretextTag);

      setTimeout(() => moveRight(firstTag), 1000);
    });
  };

  useEffect(getPretexts, [pretext]);

  useEffect(() => {
    const timer = setInterval(() => {
      moveText();
      setSlideIndex((slideIndex + 1) % pretexts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slideIndex, pretexts, pretext]);

  return (
    <div
      style={extraStyles}
      className='font-medium text-[20px] leading-[45px] tracking-[0.36px] my-[125px] transition-all duration-500'
    >
      {date && !isNaN(date) && (
        <small className='block text-dove-gray text-[14px] leading-4'>
          {`${date.getDate()}`.padStart(2, '0')} {getMonthName(date.getMonth())}{' '}
          {date?.getFullYear()} |{' '}
          <span className='text-outer-space dark:text-alto-light'>{title}</span>
        </small>
      )}

      <article className='my-[50px] h-[60%] overflow-hidden relative grid grid-rows-3 grid-cols-1'>
        {pretexts.map((pretext, index) => (
          <p
            key={index}
            style={{ left: 0, top: `${(index / pretexts.length) * 100}%` }}
            className={`pretext absolute text-[20px] leading-[45px] transition-all duration-500 ${
              index === (slideIndex + 1) % 3 ? 'opacity-100' : 'opacity-30'
            }`}
          >
            {pretext}
          </p>
        ))}
      </article>

      <Link href={`/articles/${_id}`} className='flex items-center gap-x-2 text-[14px] leading-4'>
        Read the article <ArrowRight />
      </Link>

      <button onClick={reset} className='underline w-max h-max text-[14px] leading-4'>
        Skip to begin
      </button>
    </div>
  );
};

export default TextSlider;
