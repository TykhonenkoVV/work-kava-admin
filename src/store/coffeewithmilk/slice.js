import { createSlice } from '@reduxjs/toolkit';
import {
  addCoffeeWithMilk,
  deleteCoffeeWithMilk,
  getCoffeeWithMilks,
  updateCoffeeWithMilk
} from './operations';

const initialState = {
  coffeeWithMilks: [],
  isLoading: false,
  error: null
};

const coffeeWithMilkSlice = createSlice({
  name: 'coffeewithmilks',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCoffeeWithMilks.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCoffeeWithMilks.fulfilled, (state, { payload }) => {
        state.coffeeWithMilks = payload.coffee_with_milk;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCoffeeWithMilks.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addCoffeeWithMilk.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addCoffeeWithMilk.fulfilled, (state, { payload }) => {
        state.coffeeWithMilks.push(payload.updated);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addCoffeeWithMilk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateCoffeeWithMilk.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateCoffeeWithMilk.fulfilled, (state, { payload }) => {
        const index = state.coffeeWithMilks.findIndex(
          coffeeWithMilk => coffeeWithMilk._id === payload.updated._id
        );
        state.coffeeWithMilks[index] = payload.updated;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateCoffeeWithMilk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteCoffeeWithMilk.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteCoffeeWithMilk.fulfilled, (state, { payload }) => {
        state.coffeeWithMilks = state.coffeeWithMilks.filter(
          coffeeWithMilk => coffeeWithMilk._id !== payload.deleted._id
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteCoffeeWithMilk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  }
});

export const coffeeWithMilkReducer = coffeeWithMilkSlice.reducer;
