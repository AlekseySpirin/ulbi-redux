import {createSlice} from "@reduxjs/toolkit";

const customersSlice = createSlice({
	name: 'customers',
	initialState: {
		customers: []
	},
	reducers: {
		addCustomers(state, action) {
			state.customers.push(action.payload);
		},
		addManyCustomers(state, action) {
			state.customers.push(...action.payload);
		},
		removeCustomers(state, action) {
			state.customers = state.customers.filter(customer => customer.id !== action.payload);
		}
	}
});

export default customersSlice.reducer;

export const {
	addCustomers,
	addManyCustomers,
	removeCustomers
} = customersSlice.actions;
