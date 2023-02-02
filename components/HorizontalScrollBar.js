import { useEffect, useRef, useState } from 'react';

const HorizontalScrollBar = ({ extraTrackStyles, extraThumbStyles, linkedContainerID }) => {
  const trackRef = useRef();
  const thumbRef = useRef();
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [scrollbarWidthPercent, setScrollbarWidthPercent] = useState(0);

  useEffect(() => {
    const conatiner = document.querySelector(`#${linkedContainerID}`);

    // set width for thumb...
    const conatinerWidth = conatiner.clientWidth || 0;
    const conatinerScrollWidth = conatiner.scrollWidth || 1;
    const widthScale = conatinerWidth / conatinerScrollWidth;
    const newWidthPercent = widthScale * 100;
    setScrollbarWidthPercent(newWidthPercent);

    thumbRef.current.style.width = `${newWidthPercent}%`;

    // ...then add scroll listener to linked container
    conatiner.addEventListener('scroll', () => {
      const newScrollLeft = conatiner.scrollLeft || 0;
      thumbRef.current.style.left = `${newScrollLeft * widthScale}px`;
    });
  }, [linkedContainerID]);

  const onDrag = e => {
    const { movementX } = e;
    const conatiner = document.querySelector(`#${linkedContainerID}`);

    const oldScrollLeft = conatiner.scrollLeft;
    const newScrollLeft = oldScrollLeft + scrollbarWidthPercent * movementX;

    conatiner.scrollLeft = newScrollLeft;
  };

  const onThumbMouseDown = e => {
    setIsMouseDown(true);

    trackRef.current.style.height = '7px';

    window.addEventListener('mousemove', onDrag);
    window.onmouseup = thumbRef.current.onmouseup = () => {
      setIsMouseDown(false);
      trackRef.current.style.height = '3px';
      window.removeEventListener('mousemove', onDrag);
    };

    e.stopPropagation();
  };

  const onThumbMouseUp = e => {
    trackRef.current.style.height = '5px';
    e.stopPropagation();
  };

  const onTrackMouseEnter = () => {
    trackRef.current.style.height = '5px';
  };

  const onTrackMouseLeave = () => {
    if (!isMouseDown) trackRef.current.style.height = '3px';
  };

  return (
    <div
      ref={trackRef}
      style={extraTrackStyles}
      onMouseEnter={onTrackMouseEnter}
      onMouseLeave={onTrackMouseLeave}
      className='relative mt-[30px] w-full h-[3px] bg-alto-dark transition-all duration-300 overflow-hidden'
    >
      <div
        ref={thumbRef}
        onMouseMove={e => console.log(e.clientX)}
        style={extraThumbStyles}
        onMouseUp={onThumbMouseUp}
        onMouseDown={onThumbMouseDown}
        className='absolute h-full bg-cod-gray transition-all duration-200 ease-linear'
      />
    </div>
  );
};

export default HorizontalScrollBar;
