import './App.css';
import {useDispatch, useSelector} from "react-redux";

// import {addCustomerAction, removeCustomerAction} from
// "./store/customerReducer"; import {fetchCustomers} from
// "./asyncAction/customers"; import MyTable from "./MyTable"; import
// {fetchCustomers} from "./asyncAction/customers";
import {addCash, getCash,} from "./toolkitRedux/sliceRedux/cashSlice";
import {
	addCustomers,
	removeCustomers
} from "./toolkitRedux/sliceRedux/customersSlice";
import {fetchCustomers} from "./asyncAction/customers";

function App() {
	
	const dispatch = useDispatch();
	
	const cash = useSelector(state => state.cash.cash);
	const customers = useSelector(state => state.customers.customers);
	
	const addCustomer = (name) => {
		const customer = {
			name,
			id: Date.now(),
		};
		dispatch(addCustomers(customer));
	};
	
	const removeCustomer = (customer) => {
		dispatch(removeCustomers(customer.id));
	};
	
	return (
		<div className="App">
			<div style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				height: '100vh'
			}}>
				<div style={{fontSize: '3rem'}}>{cash}</div>
				<div>
					<button onClick={() => dispatch(addCash(Number(prompt())))}>Пополнить
						счет
					</button>
					<button onClick={() => dispatch(getCash(Number(prompt())))}>Снять со
						счета
					</button>
					<button onClick={() => addCustomer((prompt()))}>Добавить клиента
					</button>
					<button onClick={() => dispatch(fetchCustomers())}>Получить
						клиентов
						из базы
					</button>
				</div>
				{customers.length > 0 ?
					<div>
						{customers.map((customer) => <div
							onClick={() => removeCustomer(customer)}
							key={customer.id}
						>{customer.name}</div>)}
					</div> :
					<span style={{
						fontSize: '2rem',
						marginTop: 20
					}}>Клиенты отсутствуют!</span>
				}
			</div>
			{/*<MyTable />*/}
		</div>
	);
}

export default App;
