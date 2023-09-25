import {addManyCustomers} from "../toolkitRedux/sliceRedux/customersSlice";

export const fetchCustomers = () => {
	return dispatch => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(json => dispatch(addManyCustomers(json)))
	}
}
