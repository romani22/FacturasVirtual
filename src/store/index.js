import { createStore, combineReducers } from 'redux';

import UserReducer from './reducers/users.reducers';
import InvoiceReducer from './reducers/invoices.reducers';

const RootReducer = combineReducers({
	user: UserReducer,
	invoices: InvoiceReducer,
});

export default createStore(RootReducer);
