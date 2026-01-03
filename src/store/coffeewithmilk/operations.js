import { createAsyncThunk } from '@reduxjs/toolkit';
import { workKavaAdminInnstance } from 'store/auth/operations';

export const getCoffeeWithMilks = createAsyncThunk(
  'coffeewithmilks/get',
  async (_, thunkAPI) => {
    try {
      const { data } = await workKavaAdminInnstance.get(
        '/coffee-with-milk/all'
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCoffeeWithMilk = createAsyncThunk(
  'coffeewithmilks/create',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await workKavaAdminInnstance.post(
        '/coffee-with-milk',
        credentials
      );

      const id = data.coffee_with_milk._id;

      const { img, webpImg } = credentials;
      const imageData = { img, webpImg };
      const keys = Object.keys(imageData);
      const formData = new FormData();
      formData.set('id', id);
      keys.forEach(el => {
        formData.append(el, imageData[el]);
      });
      const { data: images } = await workKavaAdminInnstance.post(
        '/coffee-with-milk/images',
        formData
      );

      return { ...data, ...images };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateCoffeeWithMilk = createAsyncThunk(
  'coffeewithmilks/updateCoffeeWithMilk',
  async (coffeeWithMilkData, thunkAPI) => {
    const credentials = coffeeWithMilkData.data;
    try {
      const { data } = await workKavaAdminInnstance.patch(
        `/coffee-with-milk/${coffeeWithMilkData.id}`,
        credentials
      );

      const id = data.updated._id;

      const { img, webpImg } = credentials;
      const imageData = { img, webpImg };

      const keys = Object.keys(imageData);

      if (!img && !webpImg) {
        return data;
      } else {
        const formData = new FormData();
        formData.set('id', id);
        keys.forEach(el => {
          if (imageData[el]) formData.append(el, imageData[el]);
        });
        const { data: images } = await workKavaAdminInnstance.post(
          '/coffee-with-milk/images',
          formData
        );

        return { ...data, ...images };
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        status: error.response.status
      });
    }
  }
);

export const deleteCoffeeWithMilk = createAsyncThunk(
  'coffeewithmilks/deleteCoffeeWithMilk',
  async (id, thunkAPI) => {
    try {
      const { data } = await workKavaAdminInnstance.delete(
        `/coffee-with-milk/${id}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        status: error.response.status
      });
    }
  }
);
