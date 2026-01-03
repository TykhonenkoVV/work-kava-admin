import { createSlice } from '@reduxjs/toolkit';
import { addRoll, deleteRoll, getRolls, updateRoll } from './operations';

const initialState = {
  rolls: [],
  isLoading: false,
  error: null
};

const rollsSlice = createSlice({
  name: 'rolls',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getRolls.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getRolls.fulfilled, (state, { payload }) => {
        state.rolls = payload.rolls;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getRolls.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addRoll.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addRoll.fulfilled, (state, { payload }) => {
        state.rolls.push(payload.updated);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addRoll.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateRoll.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateRoll.fulfilled, (state, { payload }) => {
        const index = state.rolls.findIndex(
          roll => roll._id === payload.updated._id
        );
        state.rolls[index] = payload.updated;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateRoll.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteRoll.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteRoll.fulfilled, (state, { payload }) => {
        state.rolls = state.rolls.filter(
          roll => roll._id !== payload.deleted._id
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteRoll.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  }
});

export const rollsReducer = rollsSlice.reducer;
