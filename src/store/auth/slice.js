import { createSlice } from '@reduxjs/toolkit';
import {
  // register,
  logIn,
  logOut,
  refreshToken,
  refreshAdmin,
  updateAdmin
} from './operations';
import { userLocale } from 'services/authServices';

const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');

const initialState = {
  user: {
    name: '',
    email: '',
    avatarURL: '',
    theme: darkThemeMq.matches ? 'dark' : 'light',
    locale: userLocale()
  },
  accessToken: null,
  refreshToken: null,
  isRegistered: false,
  isLoggedIn: false,
  isRefreshing: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state, { payload }) => {
      state.error = null;
    }
  },
  extraReducers: builder => {
    builder
      // .addCase(register.pending, (state, { payload }) => {
      //   state.isRegistered = false;
      //   state.error = null;
      // })
      // .addCase(register.fulfilled, (state, { payload }) => {
      //   state.isRegistered = true;
      //   state.error = null;
      // })
      // .addCase(register.rejected, (state, { payload }) => {
      //   state.isRegistered = false;
      //   state.error = payload;
      // })
      .addCase(logIn.pending, (state, { payload }) => {
        state.isRefreshing = true;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.admin;
        state.accessToken = payload.tokens.accessToken;
        state.refreshToken = payload.tokens.refreshToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.error = payload;
      })
      .addCase(logOut.pending, (state, { payload }) => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.user = {
          name: '',
          email: '',
          avatarURL: '',
          theme: darkThemeMq.matches ? 'dark' : 'light',
          locale: userLocale()
        };
        state.accessToken = null;
        state.refreshToken = null;
        state.isRegistered = false;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.error = payload;
      })
      .addCase(refreshAdmin.pending, state => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(refreshAdmin.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(refreshAdmin.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.error = payload;
      })
      .addCase(refreshToken.pending, (state, { payload }) => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(refreshToken.fulfilled, (state, { payload }) => {
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshToken.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.error = payload;
      })
      .addCase(updateAdmin.pending, state => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(updateAdmin.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(updateAdmin.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      });
  }
});

export const { clearError } = authSlice.actions;
export const authReducer = authSlice.reducer;
