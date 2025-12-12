import { lang } from 'lang/lang';
import {
  BURGERS_PATH,
  COFFE_CLASSIC_PATH,
  COFFE_WITH_MILK_PATH,
  DESSERTS_PATH,
  ROLLS_PATH
} from 'utils/GlobalUtils';

export const getTitle = (path, locale) => {
  const title =
    path === COFFE_CLASSIC_PATH
      ? lang[locale].coffee_classic_title
      : path === COFFE_WITH_MILK_PATH
      ? lang[locale].coffee_with_milk_title
      : path === DESSERTS_PATH
      ? lang[locale].desserts_title
      : path === BURGERS_PATH
      ? lang[locale].burgers_title
      : path === ROLLS_PATH
      ? lang[locale].rolls_title
      : lang[locale].hot_dogs_title;
  return title;
};
