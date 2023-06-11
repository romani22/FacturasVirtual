import { createStore, combineReducers } from 'redux';

// import UserReducer from './reducers/users.reducers';
import InvoiceReducer from './reducers/invoices.reducers';
import AuthReducer from './reducers/auth.reducere';

const RootReducer = combineReducers({
	// user: UserReducer,
	invoices: InvoiceReducer,
	auth: AuthReducer,
});

export default createStore(RootReducer);
