import { createAsyncThunk } from '@reduxjs/toolkit';
import { workKavaInnstance } from 'store/auth/operations';

export const getDesserts = createAsyncThunk(
  'desserts/get',
  async (_, thunkAPI) => {
    try {
      const { data } = await workKavaInnstance.get('/desserts/all');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addDessert = createAsyncThunk(
  'desserts/create',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await workKavaInnstance.post('/desserts', credentials);

      const id = data.dessert._id;

      const { img, webpImg } = credentials;
      const imageData = { img, webpImg };
      const keys = Object.keys(imageData);
      const formData = new FormData();
      formData.set('id', id);
      keys.forEach(el => {
        formData.append(el, imageData[el]);
      });
      const { data: images } = await workKavaInnstance.post(
        '/desserts/images',
        formData
      );

      return { ...data, ...images };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateDessert = createAsyncThunk(
  'desserts/updateDessert',
  async (dessertData, thunkAPI) => {
    const credentials = dessertData.data;
    try {
      const { data } = await workKavaInnstance.patch(
        `/desserts/${dessertData.id}`,
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
        const { data: images } = await workKavaInnstance.post(
          '/desserts/images',
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

export const deleteDessert = createAsyncThunk(
  'desserts/deleteDessert',
  async (id, thunkAPI) => {
    try {
      const { data } = await workKavaInnstance.delete(`/desserts/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        status: error.response.status
      });
    }
  }
);
