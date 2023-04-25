import { AlertProps } from './interfaces';

export const togglePassword = (element: React.RefObject<HTMLInputElement>) => {
  const inputElement = element.current;

  if (!inputElement) return;

  const oldType: string = inputElement.type;
  inputElement.type = oldType === 'password' ? 'text' : 'password';
};

export const toggleClass = (el: Element | null, ...classes: string[]) => {
  if (el) classes.forEach(className => el.classList.toggle(className));
};

export const addClass = (el: Element | null, ...classes: string[]) => {
  if (el) classes.forEach(className => el.classList.add(className));
};

export const removeClass = (el: Element | null, ...classes: string[]) => {
  if (el) classes.forEach(className => el.classList.remove(className));
};

export const scrollScreenTo = ({ x = 0, y = 0 }) => window.scrollTo({ top: y, left: x });

const month: { [key: number]: string } = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};

export const getMonthName = (monthIndex: number): string => month[monthIndex];

export const mod = (number: number, modNumber: number): number => {
  return number - modNumber * Math.floor(number / modNumber);
};

export const isInViewport = (element: Element | null): boolean => {
  if (!element) return false;

  const { top, left, bottom, right } = element.getBoundingClientRect();

  return (
    top >= 0 &&
    left >= 0 &&
    right <= (window.innerWidth || document.documentElement.clientWidth) &&
    bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

export const showAlert = ({
  msg,
  duration = 4000,
  textColor = '#fff',
  bgColor = '#181818',
}: AlertProps) => {
  const alert: HTMLDivElement = document.querySelector('#alert')!;

  // show alert only when alert box is initially hidden
  if (alert?.style?.bottom === '-100px') {
    alert.style.background = bgColor;
    alert.style.color = textColor;
    alert.innerHTML = msg;
    alert.style.bottom = '0px';

    setTimeout(() => {
      alert.style.bottom = '-100px';
    }, duration);
  }
};
