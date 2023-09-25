// import {createSlice} from "@reduxjs/toolkit";
//
// const toolkitSlice = createSlice({
// 	name: 'toolkit',
// 	initialState: {
// 		cash: 0,
// 		customers: []
// 	},
// 	reducers: {
// 		addCash(state, action) {
// 			state.cash = state.cash + action.payload;
// 		},
// 		getCash(state, action) {
// 			state.cash = state.cash - action.payload;
// 		},
// 		addCustomers(state, action) {
// 			state.customers.push(action.payload)
// 		},
// 		addManyCustomers(state, action) {
// 			state.customers.push(...action.payload)
// 		},
// 		removeCustomers(state, action) {
// 			state.customers = state.customers.filter(customer => customer.id !== action.payload);
// 		}
// 	}
//
// });
//
// export default toolkitSlice.reducer;
// export const {
// 	addCash,
// 	getCash,
// 	addCustomers,
// 	addManyCustomers,
// 	removeCustomers
// } = toolkitSlice.actions;
