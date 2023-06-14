import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import InvoiceReducer from './reducers/invoices.reducers';
import AuthReducer from './reducers/auth.reducers';
import RecipeReducers from './reducers/recipe.reducers';

const RootReducer = combineReducers({
	invoices: InvoiceReducer,
	auth: AuthReducer,
	recipe: RecipeReducers,
});

export default createStore(RootReducer, applyMiddleware(thunk));
