import { createAsyncThunk } from '@reduxjs/toolkit';
import { workKavaAdminInnstance } from 'store/auth/operations';

// export const addCoffeeClassicImages = createAsyncThunk(
//   'coffeeclassics/addimages',
//   async (imageFiles, thunkAPI) => {
//     try {
//       const keys = Object.keys(imageFiles);
//       const formData = new FormData();
//       keys.forEach(el => {
//         formData.append(el, imageFiles[el]);
//       });

//       const { images: data } = await workKavaAdminInnstance.post(
//         '/coffeeclassics/images',
//         formData
//       );
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue({
//         message: error.response.data.message,
//         status: error.response.status
//       });
//     }
//   }
// );

export const getCoffeeClassics = createAsyncThunk(
  'coffeeclassics/get',
  async (_, thunkAPI) => {
    try {
      const { data } = await workKavaAdminInnstance.get('/coffee-classic/all');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCoffeeClassic = createAsyncThunk(
  'coffeeclassic/create',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await workKavaAdminInnstance.post(
        '/coffee-classic',
        credentials
      );

      const id = data.coffee_classic._id;

      const { img, webpImg } = credentials;
      const imageData = { img, webpImg };
      const keys = Object.keys(imageData);
      const formData = new FormData();
      formData.set('id', id);
      keys.forEach(el => {
        formData.append(el, imageData[el]);
      });
      const { data: images } = await workKavaAdminInnstance.post(
        '/coffee-classic/images',
        formData
      );

      return { ...data, ...images };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateCoffeeClassic = createAsyncThunk(
  'coffeeclassics/updateCoffeeClassic',
  async (coffeeClassicData, thunkAPI) => {
    const credentials = coffeeClassicData.data;
    try {
      const { data } = await workKavaAdminInnstance.patch(
        `/coffee-classic/${coffeeClassicData.id}`,
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
          '/coffee-classic/images',
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

export const deleteCoffeeClassic = createAsyncThunk(
  'coffeeclassics/deleteCoffeeClassic',
  async (id, thunkAPI) => {
    try {
      const { data } = await workKavaAdminInnstance.delete(
        `/coffee-classic/${id}`
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
