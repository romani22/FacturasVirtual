import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from './reducers/auth.reducers';
import RecipeReducers from './reducers/recipe.reducers';
import IngredientsReducers from './reducers/ingredients.reducers';

const RootReducer = combineReducers({
	auth: AuthReducer,
	recipe: RecipeReducers,
	ingredient: IngredientsReducers,
});

export default createStore(RootReducer, applyMiddleware(thunk));
