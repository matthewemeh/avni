import { ExtraStyle } from '@/public/interfaces';
import { MouseEvent, useEffect, useRef, useState } from 'react';

interface Props {
  onScroll: () => void;
  linkedContainerID: string;
  extraTrackStyles?: ExtraStyle;
  extraThumbStyles?: ExtraStyle;
}

const HorizontalScrollBar: React.FC<Props> = ({
  onScroll,
  extraTrackStyles,
  extraThumbStyles,
  linkedContainerID,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [scrollbarWidthPercent, setScrollbarWidthPercent] = useState(0);

  useEffect(() => {
    // disable this custom scrollbar on firefox browsers
    const browserIsFirefox: boolean = navigator.userAgent.indexOf('Firefox') !== -1;

    if (browserIsFirefox) {
      trackRef.current!.style.display = 'none';
      return;
    }

    const container: HTMLDivElement = document.querySelector(`#${linkedContainerID}`)!;

    // set width for thumb...
    const conatinerWidth: number = container.clientWidth || 0;
    const conatinerScrollWidth: number = container.scrollWidth || 1;
    const widthScale: number = conatinerWidth / conatinerScrollWidth;
    const newWidthPercent: number = widthScale * 100;
    setScrollbarWidthPercent(newWidthPercent);

    thumbRef.current!.style.width = `${newWidthPercent}%`;

    // ...then add scroll listener to linked container
    container.onscroll = () => {
      const newScrollLeft = container.scrollLeft || 0;
      thumbRef.current!.style.left = `${newScrollLeft * widthScale}px`;

      if (onScroll) onScroll();
    };
  }, [linkedContainerID]);

  // componentDidUnmount
  useEffect(() => {
    return () => {
      window.onmouseup = null;
    };
  }, []);

  const onDrag = (e: globalThis.MouseEvent) => {
    const { movementX } = e;
    const conatiner: HTMLDivElement = document.querySelector(`#${linkedContainerID}`)!;

    const oldScrollLeft: number = conatiner.scrollLeft;
    // const newScrollLeft = oldScrollLeft + scrollbarWidthPercent * movementX;
    const newScrollLeft: number = oldScrollLeft + 200 * movementX;

    conatiner.scrollLeft = newScrollLeft;
  };

  const onThumbMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true);

    thumbRef.current!.style.height = '7px';

    window.addEventListener('mousemove', onDrag);
    window.onmouseup = thumbRef.current!.onmouseup = () => {
      setIsMouseDown(false);

      thumbRef.current!.style.height = '2px';
      window.removeEventListener('mousemove', onDrag);
    };

    e.stopPropagation();
  };

  const onThumbMouseUp = (e: MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(false);

    thumbRef.current!.style.height = '5px';

    e.stopPropagation();
  };

  const onTrackMouseEnter = () => {
    thumbRef.current!.style.height = '5px';
  };

  const onTrackMouseLeave = () => {
    if (!isMouseDown) thumbRef.current!.style.height = '2px';
  };

  return (
    <div
      ref={trackRef}
      style={extraTrackStyles}
      onMouseEnter={onTrackMouseEnter}
      onMouseLeave={onTrackMouseLeave}
      className='relative mt-[30px] w-full h-[2px] bg-alto-dark transition-all duration-300'
    >
      <div
        ref={thumbRef}
        style={extraThumbStyles}
        onMouseUp={onThumbMouseUp}
        onMouseDown={onThumbMouseDown}
        className='absolute h-full bg-cod-gray ease-linear'
      />
    </div>
  );
};

export default HorizontalScrollBar;
