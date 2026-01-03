import { useSelector } from 'react-redux';
import { selectBurgrError } from 'store/burgers/selectors';
import { selectCoffeeClassicError } from 'store/coffeeclassic/selectors';
import { selectCoffeeWithMilkError } from 'store/coffeewithmilk/selectors';
import { selectDessertError } from 'store/dessers/selectors';
import { selectHotDogError } from 'store/hotdogs/selektors';
import { selectRollError } from 'store/rolls/selectors';
import { selectRoomError } from 'store/rooms/selectors';
import {
  BURGERS_PATH,
  COFFE_CLASSIC_PATH,
  COFFE_WITH_MILK_PATH,
  DESSERTS_PATH,
  HOT_DOGS_PATH,
  ROLLS_PATH,
  ROOMS_PATH
} from 'utils/GlobalUtils';

export const useProductError = () => {
  const cofeeClassicError = useSelector(selectCoffeeClassicError);
  const coffeeWithMilkError = useSelector(selectCoffeeWithMilkError);
  const dessertError = useSelector(selectDessertError);
  const burgerError = useSelector(selectBurgrError);
  const hotDogError = useSelector(selectHotDogError);
  const rollError = useSelector(selectRollError);
  const roomsError = useSelector(selectRoomError);

  return {
    [COFFE_CLASSIC_PATH]: cofeeClassicError,
    [COFFE_WITH_MILK_PATH]: coffeeWithMilkError,
    [DESSERTS_PATH]: dessertError,
    [BURGERS_PATH]: burgerError,
    [HOT_DOGS_PATH]: hotDogError,
    [ROLLS_PATH]: rollError,
    [ROOMS_PATH]: roomsError
  };
};
