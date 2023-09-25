import {combineReducers, configureStore} from '@reduxjs/toolkit';
import cashSlice from "./sliceRedux/cashSlice";
import customersSlice from "./sliceRedux/customersSlice";

const rootReducer = combineReducers({
	cash: cashSlice,
	customers: customersSlice
});

export const store = configureStore({
	reducer: rootReducer,
});
