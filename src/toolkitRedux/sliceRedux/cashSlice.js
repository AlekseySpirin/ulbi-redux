import {createSlice} from "@reduxjs/toolkit";

const cashSlice = createSlice({
	name: 'cash',
	initialState: {
		cash: 0
	},
	reducers: {
		addCash(state, action) {
			state.cash = state.cash + action.payload;
		},
		getCash(state, action) {
			state.cash = state.cash - action.payload;
		},
	}
});

export default cashSlice.reducer

export const {addCash, getCash} = cashSlice.actions
