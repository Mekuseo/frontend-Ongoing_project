import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string[] = []; // Set the initial state as an empty array

const roomTypesSlice = createSlice({
  name: 'roomTypes',
  initialState, // Use the initial state defined above
  reducers: {
    addRoomType: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
  },
});

export const { addRoomType } = roomTypesSlice.actions;
export default roomTypesSlice.reducer;
