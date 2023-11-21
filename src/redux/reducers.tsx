// reducers.js
import { combineReducers } from '@reduxjs/toolkit';
import roomTypesReducer from './roomTypes';

const rootReducer = combineReducers({
  roomTypes: roomTypesReducer,
  // Add more reducers here
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
