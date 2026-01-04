import { useSelector } from 'react-redux';
import { updateAdmin } from 'store/auth/operations';
import { selectIsRefreshing } from 'store/auth/selectors';
import {
  addBurger,
  deleteBurger,
  getBurgers,
  updateBurger
} from 'store/burgers/operations';
import { selectBurgers, selectIsLoadingBurgrs } from 'store/burgers/selectors';
import {
  addCoffeeClassic,
  deleteCoffeeClassic,
  getCoffeeClassics,
  updateCoffeeClassic
} from 'store/coffeeclassic/operations';
import {
  selectCoffeeClassic,
  selectIsLoadingCoffeeClassic
} from 'store/coffeeclassic/selectors';
import {
  addCoffeeWithMilk,
  deleteCoffeeWithMilk,
  getCoffeeWithMilks,
  updateCoffeeWithMilk
} from 'store/coffeewithmilk/operations';
import {
  selectCoffeeWithMilk,
  selectIsLoadingCoffeeWithMilk
} from 'store/coffeewithmilk/selectors';
import {
  addDessert,
  deleteDessert,
  getDesserts,
  updateDessert
} from 'store/dessers/operations';
import {
  selectDesserts,
  selectIsLoadingDesserts
} from 'store/dessers/selectors';
import {
  addHotDog,
  deleteHotDog,
  getHotDogs,
  updateHotDog
} from 'store/hotdogs/operations';
import { selectHotDogs, selectIsLoadingHotDogs } from 'store/hotdogs/selektors';
import {
  addRoll,
  deleteRoll,
  getRolls,
  updateRoll
} from 'store/rolls/operations';
import { selectIsLoadingRolls, selectRolls } from 'store/rolls/selectors';
import {
  addRoom,
  deleteRoom,
  getRooms,
  updateRoom
} from 'store/rooms/operations';
import { selectIsLoadingRooms, selectRooms } from 'store/rooms/selectors';
import {
  BURGERS_PATH,
  COFFE_CLASSIC_PATH,
  COFFE_WITH_MILK_PATH,
  DELETE_OPERATION,
  DESSERTS_PATH,
  GET_OPERATION,
  HOT_DOGS_PATH,
  PATCH_OPERATION,
  POST_OPERATION,
  ROLLS_PATH,
  ROOMS_PATH
} from 'utils/GlobalUtils';

export const useProductState = (path, method) => {
  let isLoading;
  let collection;
  let operation;

  const isLoadingCoffeeClassic = useSelector(selectIsLoadingCoffeeClassic);
  const isLoadingCoffeeWithMilk = useSelector(selectIsLoadingCoffeeWithMilk);
  const isLoadingDesserts = useSelector(selectIsLoadingDesserts);
  const isLoadingBurgers = useSelector(selectIsLoadingBurgrs);
  const isLoadingRolls = useSelector(selectIsLoadingRolls);
  const isLoadingHotDogs = useSelector(selectIsLoadingHotDogs);
  const isLoadingRooms = useSelector(selectIsLoadingRooms);
  const isRefreshing = useSelector(selectIsRefreshing);

  const coffeeClassics = useSelector(selectCoffeeClassic);
  const coffeeWithMilks = useSelector(selectCoffeeWithMilk);
  const desserts = useSelector(selectDesserts);
  const burgers = useSelector(selectBurgers);
  const rolls = useSelector(selectRolls);
  const hotDogs = useSelector(selectHotDogs);
  const rooms = useSelector(selectRooms);

  if (path === COFFE_CLASSIC_PATH) {
    isLoading = isLoadingCoffeeClassic;
    collection = coffeeClassics;
    if (method === GET_OPERATION) {
      operation = getCoffeeClassics;
    }
    if (method === POST_OPERATION) {
      operation = addCoffeeClassic;
    }
    if (method === PATCH_OPERATION) {
      operation = updateCoffeeClassic;
    }
    if (method === DELETE_OPERATION) {
      operation = deleteCoffeeClassic;
    }
  }
  if (path === COFFE_WITH_MILK_PATH) {
    isLoading = isLoadingCoffeeWithMilk;
    collection = coffeeWithMilks;
    if (method === GET_OPERATION) {
      operation = getCoffeeWithMilks;
    }
    if (method === POST_OPERATION) {
      operation = addCoffeeWithMilk;
    }
    if (method === PATCH_OPERATION) {
      operation = updateCoffeeWithMilk;
    }
    if (method === DELETE_OPERATION) {
      operation = deleteCoffeeWithMilk;
    }
  }
  if (path === DESSERTS_PATH) {
    isLoading = isLoadingDesserts;
    collection = desserts;
    if (method === GET_OPERATION) {
      operation = getDesserts;
    }
    if (method === POST_OPERATION) {
      operation = addDessert;
    }
    if (method === PATCH_OPERATION) {
      operation = updateDessert;
    }
    if (method === DELETE_OPERATION) {
      operation = deleteDessert;
    }
  }
  if (path === BURGERS_PATH) {
    isLoading = isLoadingBurgers;
    collection = burgers;
    if (method === GET_OPERATION) {
      operation = getBurgers;
    }
    if (method === POST_OPERATION) {
      operation = addBurger;
    }
    if (method === PATCH_OPERATION) {
      operation = updateBurger;
    }
    if (method === DELETE_OPERATION) {
      operation = deleteBurger;
    }
  }
  if (path === ROLLS_PATH) {
    isLoading = isLoadingRolls;
    collection = rolls;
    if (method === GET_OPERATION) {
      operation = getRolls;
    }
    if (method === POST_OPERATION) {
      operation = addRoll;
    }
    if (method === PATCH_OPERATION) {
      operation = updateRoll;
    }
    if (method === DELETE_OPERATION) {
      operation = deleteRoll;
    }
  }
  if (path === HOT_DOGS_PATH) {
    isLoading = isLoadingHotDogs;
    collection = hotDogs;
    if (method === GET_OPERATION) {
      operation = getHotDogs;
    }
    if (method === POST_OPERATION) {
      operation = addHotDog;
    }
    if (method === PATCH_OPERATION) {
      operation = updateHotDog;
    }
    if (method === DELETE_OPERATION) {
      operation = deleteHotDog;
    }
  }
  if (path === ROOMS_PATH) {
    isLoading = isLoadingRooms;
    collection = rooms;
    if (method === GET_OPERATION) {
      operation = getRooms;
    }
    if (method === POST_OPERATION) {
      operation = addRoom;
    }
    if (method === PATCH_OPERATION) {
      operation = updateRoom;
    }
    if (method === DELETE_OPERATION) {
      operation = deleteRoom;
    }
  }
  if (path === null) {
    isLoading = isRefreshing;
    if (method === PATCH_OPERATION) operation = updateAdmin;
  }

  return { isLoading, collection, operation };
};
