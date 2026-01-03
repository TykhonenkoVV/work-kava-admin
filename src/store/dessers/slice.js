import { createSlice } from '@reduxjs/toolkit';
import {
  addDessert,
  deleteDessert,
  getDesserts,
  updateDessert
} from './operations';

const initialState = {
  desserts: [],
  isLoading: false,
  error: null
};

const dessertsSlice = createSlice({
  name: 'desserts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getDesserts.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getDesserts.fulfilled, (state, { payload }) => {
        state.desserts = payload.desserts;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getDesserts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addDessert.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addDessert.fulfilled, (state, { payload }) => {
        state.desserts.push(payload.updated);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addDessert.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateDessert.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateDessert.fulfilled, (state, { payload }) => {
        const index = state.desserts.findIndex(
          dessert => dessert._id === payload.updated._id
        );
        state.desserts[index] = payload.updated;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateDessert.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteDessert.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteDessert.fulfilled, (state, { payload }) => {
        state.desserts = state.desserts.filter(
          dessert => dessert._id !== payload.deleted._id
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteDessert.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  }
});

export const dessertsReducer = dessertsSlice.reducer;
