import { createSlice } from '@reduxjs/toolkit';
import {
  addBurger,
  deleteBurger,
  getBurgers,
  updateBurger
} from './operations';

const initialState = {
  burgers: [],
  isLoading: false,
  error: null
};

const burgersSlice = createSlice({
  name: 'burgers',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getBurgers.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBurgers.fulfilled, (state, { payload }) => {
        state.burgers = payload.burgers;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getBurgers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addBurger.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addBurger.fulfilled, (state, { payload }) => {
        state.burgers.push(payload.updated);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addBurger.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateBurger.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateBurger.fulfilled, (state, { payload }) => {
        const index = state.burgers.findIndex(
          burger => burger._id === payload.updated._id
        );
        state.burgers[index] = payload.updated;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateBurger.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteBurger.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteBurger.fulfilled, (state, { payload }) => {
        state.burgers = state.burgers.filter(
          burger => burger._id !== payload.deleted._id
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteBurger.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  }
});

export const burgersReducer = burgersSlice.reducer;
