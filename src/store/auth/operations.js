import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from 'store/store';
import { BASE_URL } from 'utils/GlobalUtils';

export const workKavaAdminInnstance = axios.create({
  baseURL: `${BASE_URL}/api`
});

const setAuthHeader = token => {
  workKavaAdminInnstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  workKavaAdminInnstance.defaults.headers.common.Authorization = '';
};

workKavaAdminInnstance.interceptors.response.use(
  responce => responce,
  async error => {
    if (error.response.status === 401 && !error.config._retry) {
      try {
        error.config._retry = true;
        await store.dispatch(refreshToken());
        const newToken = store.getState().auth.accessToken;
        error.config.headers.Authorization = `Bearer ${newToken}`;
        setAuthHeader(newToken);
        return workKavaAdminInnstance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

// export const register = createAsyncThunk(
//   'auth/register',
//   async (credentials, thunkAPI) => {
//     try {
//       await workKavaAdminInnstance.post('/auth/register', credentials);
//     } catch (error) {
//       return thunkAPI.rejectWithValue({
//         message: error.response.data.message,
//         status: error.response.status
//       });
//     }
//   }
// );

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await workKavaAdminInnstance.post(
        '/auth/signin',
        credentials
      );
      setAuthHeader(data.tokens.accessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        status: error.response.status
      });
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue({
        message: 'Unable to fetch user',
        status: ''
      });
    }

    try {
      setAuthHeader(persistedToken);
      const { data } = await workKavaAdminInnstance.get('/auth/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        status: error.response.status
      });
    }
  }
);

export const refreshToken = createAsyncThunk(
  'auth/refreshtoken',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.refreshToken;

    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }

    setAuthHeader(persistToken);
    try {
      const { data } = await workKavaAdminInnstance.post('/auth/refresh');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        status: error.response.status
      });
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'auth/updateAvatar',
  async (avatarFile, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('avatarURL', avatarFile);
      const { data } = await workKavaAdminInnstance.patch(
        '/auth/avatars',
        formData
      );
      return data.avatarURL;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        status: error.response.status
      });
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (userData, { dispatch, rejectWithValue }) => {
    if (userData.avatar) {
      try {
        await dispatch(updateAvatar(userData.avatar)).unwrap();
      } catch (error) {
        return rejectWithValue({
          message: error.response.data.message,
          status: error.response.status
        });
      }
    }
    try {
      const { data } = await workKavaAdminInnstance.patch('/users', userData);
      return data;
    } catch (error) {
      return rejectWithValue({
        message: error.response.data.message,
        status: error.response.status
      });
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await workKavaAdminInnstance.get('/auth/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue({
      message: error.response.data.message,
      status: error.response.status
    });
  }
});
