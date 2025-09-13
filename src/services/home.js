import { lang } from 'lang/lang';
import {
  BURGERS_PATH,
  COFFE_CLASSIC_PATH,
  COFFE_WITH_MILK_PATH,
  DESSERTS_PATH,
  ROLLS_PATH
} from 'utils/GlobalUtils';

export const getTitle = (path, local) => {
  const title =
    path === COFFE_CLASSIC_PATH
      ? lang[local].coffee_classic_title
      : path === COFFE_WITH_MILK_PATH
      ? lang[local].coffee_with_milk_title
      : path === DESSERTS_PATH
      ? lang[local].desserts_title
      : path === BURGERS_PATH
      ? lang[local].burgers_title
      : path === ROLLS_PATH
      ? lang[local].rolls_title
      : lang[local].hot_dogs_title;
  return title;
};
