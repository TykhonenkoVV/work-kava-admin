import { createAsyncThunk } from '@reduxjs/toolkit';
import { workKavaAdminInnstance } from 'store/auth/operations';

export const getRooms = createAsyncThunk('rooms/get', async (_, thunkAPI) => {
  try {
    const { data } = await workKavaAdminInnstance.get('/rooms/all');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addRoom = createAsyncThunk(
  'rooms/create',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await workKavaAdminInnstance.post('/rooms', credentials);

      const id = data.room._id;
      const path = data.room.en.title.replaceAll(' ', '-').toLowerCase();

      const { img, webpImg } = credentials;
      const imageData = { img, webpImg };
      const keys = Object.keys(imageData);
      const formData = new FormData();
      formData.set('id', id);
      formData.set('path', path);
      keys.forEach(el => {
        formData.append(el, imageData[el]);
      });
      const { data: images } = await workKavaAdminInnstance.post(
        '/rooms/images',
        formData
      );

      return { ...data, ...images };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateRoom = createAsyncThunk(
  'rooms/updateRoom',
  async (roomData, thunkAPI) => {
    const credentials = roomData.data;
    try {
      const { data } = await workKavaAdminInnstance.patch(
        `/rooms/${roomData.id}`,
        credentials
      );

      const id = data.updated._id;
      const path = data.updated.en.title.replaceAll(' ', '-').toLowerCase();

      const { img, webpImg } = credentials;
      const imageData = { img, webpImg };

      const keys = Object.keys(imageData);

      if (!img && !webpImg) {
        return data;
      } else {
        const formData = new FormData();
        formData.set('id', id);
        formData.set('path', path);
        keys.forEach(el => {
          if (imageData[el]) formData.append(el, imageData[el]);
        });
        const { data: images } = await workKavaAdminInnstance.post(
          '/rooms/images',
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

export const deleteRoom = createAsyncThunk(
  'rooms/deleteRoom',
  async (id, thunkAPI) => {
    try {
      const { data } = await workKavaAdminInnstance.delete(`/rooms/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        status: error.response.status
      });
    }
  }
);
