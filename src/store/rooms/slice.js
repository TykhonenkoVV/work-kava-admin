import { createSlice } from '@reduxjs/toolkit';
import { addRoom, deleteRoom, getRooms, updateRoom } from './operations';

const initialState = {
  rooms: [],
  isLoading: false,
  error: null
};

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getRooms.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getRooms.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.rooms = payload.rooms;
        state.error = null;
      })
      .addCase(getRooms.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addRoom.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addRoom.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.rooms.push(payload.updated);
        state.error = null;
      })
      .addCase(addRoom.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateRoom.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateRoom.fulfilled, (state, { payload }) => {
        const index = state.rooms.findIndex(
          room => room._id === payload.updated._id
        );
        state.rooms[index] = payload.updated;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateRoom.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteRoom.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteRoom.fulfilled, (state, { payload }) => {
        state.rooms = state.rooms.filter(
          room => room._id !== payload.deleted._id
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteRoom.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  }
});

export const roomsReducer = roomsSlice.reducer;
