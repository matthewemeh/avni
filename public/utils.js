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
