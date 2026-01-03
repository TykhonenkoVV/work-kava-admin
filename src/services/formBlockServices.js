export const currency = locale => {
  const values = {
    en: 36,
    de: 8364,
    ua: 8372
  };
  return values[locale];
};

// const toCapitalize = s => {
//   return String(s[0]).toUpperCase() + String(s).slice(1);
// };

const symbol = s => {
  return String.fromCharCode(s);
};

export const text = (l, title) => {
  if (title === 'standart' || title === 'xl') {
    return `${l.toUpperCase()} (${symbol(currency(l))})`;
  } else {
    return l.toUpperCase();
  }
};
