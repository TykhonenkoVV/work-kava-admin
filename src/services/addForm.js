import { lang } from 'lang/lang';
import {
  BURGERS_PATH,
  COFFE_CLASSIC_PATH,
  COFFE_WITH_MILK_PATH,
  DESSERTS_PATH,
  HOT_DOGS_PATH,
  ROLLS_PATH,
  ROOMS_PATH
} from 'utils/GlobalUtils';

export const createData = path => {
  if (path === COFFE_CLASSIC_PATH)
    return {
      localeBlocks: ['title', 'standart'],
      globalBlocks: ['coffee', 'water'],
      images: ['img', 'webpImg']
    };
  if (path === COFFE_WITH_MILK_PATH)
    return {
      localeBlocks: ['title', 'standart'],
      globalBlocks: ['coffee', 'water', 'milk'],
      images: ['img', 'webpImg']
    };
  if (path === DESSERTS_PATH)
    return {
      localeBlocks: ['title', 'standart'],
      globalBlocks: ['weight'],
      images: ['img', 'webpImg']
    };
  if (path === BURGERS_PATH || path === HOT_DOGS_PATH || path === ROLLS_PATH)
    return {
      localeBlocks: ['title', 'standart', 'xl', 'ingredients'],
      images: ['img', 'webpImg']
    };
  if (path === ROOMS_PATH)
    return {
      localeBlocks: ['title', 'price', 'caption'],
      images: ['img', 'webpImg']
    };
};

export const newInit = data => {
  const keys = Object.keys(data);
  const arr = [];
  keys.forEach(e => data[e].forEach(el => arr.push(el)));
  const res = {};
  arr.map(e => (res[e] = null));
  res.archived = false;
  res.img = null;
  res.webpImg = null;

  return res;
};

export const createState = data => {
  let result = {};
  const keys = Object.keys(data);
  keys.forEach(key => {
    if (key === 'globalBlocks' || key === 'images') {
      data[key].forEach(el => (result[el] = ''));
    }
    if (key === 'localeBlocks') {
      if (!result.en) {
        result.en = {};
      }
      if (!result.de) {
        result.de = {};
      }
      if (!result.ua) {
        result.ua = {};
      }
      data.localeBlocks.forEach(el => {
        result.en[el] = '';
        result.de[el] = '';
        result.ua[el] = '';
      });
    }
  });
  return result;
};

export const validateFormData = (formData, errors, locale) => {
  const numbers = ['water', 'coffee', 'milk', 'standart', 'xl', 'price'];
  const images = ['img', 'webpImg'];
  let result = {};
  const keys = Object.keys(formData);

  keys.forEach(key => {
    const element = formData[key];
    const isObject = typeof element === 'object';
    const isEmpty = element === '';
    if (isObject && !images.includes(key)) {
      if (!result[key]) result[key] = {};
      const objectKeys = Object.keys(element);
      objectKeys.forEach(objectKey => {
        const keyIsEmpty = formData[key][objectKey] === '';
        if (keyIsEmpty) {
          if (!result[key]) result[key] = {};
          result[key][objectKey] = lang[locale].error_empty_field;
        } else if (numbers.includes(objectKey)) {
          if (isNaN(formData[key][objectKey])) {
            result[key][objectKey] = lang[locale].error_numeric_value;
          } else if (formData[key][objectKey] === 0)
            result[key][objectKey] = lang[locale].error_null_value;
        } else {
          if (result?.[key]?.[objectKey]) {
            delete result[key][objectKey];
          }
          if (result?.[key]) {
            const currentObjectKeys = Object?.keys(result[key]);
            if (currentObjectKeys.length === 0) delete result[key];
          }
        }
      });
    } else if (isEmpty) {
      if (images.includes(key)) result[key] = lang[locale].error_empty_file;
      else result[key] = lang[locale].error_empty_field;
    } else if (numbers.includes(key)) {
      if (isNaN(formData[key])) result[key] = lang[locale].error_numeric_value;
    } else if (result?.[key]) delete result[key];
  });

  if (Object.keys(result).length === 0) result = false;
  return result;
};

export const onChangeValue = (e, formData, product, dataId) => {
  const { name, value } = e.target;
  let result = {};
  const splited = name.split('_');
  const isLocated = splited.length === 2;
  const hasLocale = formData?.[splited[1]];
  if (dataId === 'edit-form') {
    if (isLocated) {
      if (
        value === product[splited[1]][splited[0]] ||
        Number(value) === product[splited[1]][splited[0]]
      ) {
        if (typeof formData === 'object' && Object.keys(formData).length > 0) {
          if (Object.keys(formData?.[splited[1]]).length < 2) {
            const newState = { ...formData };
            delete newState[splited[1]];
            result = newState;
          } else {
            const newState = { ...formData };
            delete newState[splited[1]][splited[0]];
            result = newState;
          }
        }
      } else {
        if (hasLocale) {
          let newValue = value;
          const isNumber = Number(value);
          if (!isNaN(value) && value !== '') newValue = isNumber;
          result = {
            ...formData,
            [splited[1]]: { ...formData[splited[1]], [splited[0]]: newValue }
          };
        } else {
          let newValue = value;
          const isNumber = Number(value);
          if (!isNaN(value) && value !== '') newValue = isNumber;
          result = {
            ...formData,
            [splited[1]]: { [splited[0]]: newValue }
          };
        }
      }
    } else if (value === product[name] || Number(value) === product[name]) {
      const newState = { ...formData };
      delete newState[name];
      result = newState;
    } else {
      let newValue = value;
      const isNumber = Number(value);
      if (!isNaN(value) && value !== '') newValue = isNumber;
      result = { ...formData, [name]: newValue };
    }
  } else {
    if (isLocated) {
      if (hasLocale) {
        let newValue = value;
        const isNumber = Number(value);
        if (!isNaN(value) && value !== '') newValue = isNumber;
        result = {
          ...formData,
          [splited[1]]: { ...formData[splited[1]], [splited[0]]: newValue }
        };
      } else {
        let newValue = value;
        const isNumber = Number(value);
        if (!isNaN(value) && value !== '') newValue = isNumber;
        result = {
          ...formData,
          [splited[1]]: { [splited[0]]: newValue }
        };
      }
    } else {
      let newValue = value;
      const isNumber = Number(value);
      if (!isNaN(value) && value !== '') newValue = isNumber;
      result = { ...formData, [name]: newValue };
    }
  }
  return result;
};
