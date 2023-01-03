export const toggleClass = (el, ...classes) => {
  classes.forEach(className => el.classList.toggle(className));
};

export const addClass = (el, ...classes) => {
  classes.forEach(className => el.classList.add(className));
};

export const removeClass = (el, ...classes) => {
  classes.forEach(className => el.classList.remove(className));
};

export const scrollTop = () => window.scrollTo({ top: 0 });

const month = {
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

export const getMonthName = monthIndex => month[monthIndex];
