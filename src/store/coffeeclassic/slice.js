import { createSlice } from '@reduxjs/toolkit';
import {
  addCoffeeClassic,
  deleteCoffeeClassic,
  getCoffeeClassics,
  updateCoffeeClassic
} from './operations';

const initialState = {
  coffeeClassics: [],
  isLoading: false,
  error: null
};

const coffeeClassicSlice = createSlice({
  name: 'coffeeclassics',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCoffeeClassics.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCoffeeClassics.fulfilled, (state, { payload }) => {
        state.coffeeClassics = payload.coffee_classic;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCoffeeClassics.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addCoffeeClassic.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addCoffeeClassic.fulfilled, (state, { payload }) => {
        state.coffeeClassics.push(payload.updated);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addCoffeeClassic.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateCoffeeClassic.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateCoffeeClassic.fulfilled, (state, { payload }) => {
        const index = state.coffeeClassics.findIndex(
          coffeeClassic => coffeeClassic._id === payload.updated._id
        );
        state.coffeeClassics[index] = payload.updated;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateCoffeeClassic.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteCoffeeClassic.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteCoffeeClassic.fulfilled, (state, { payload }) => {
        state.coffeeClassics = state.coffeeClassics.filter(
          coffeeClassic => coffeeClassic._id !== payload.deleted._id
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteCoffeeClassic.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  }
});

export const coffeeClassicReducer = coffeeClassicSlice.reducer;
