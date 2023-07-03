import {
	LOAD_INGREDIENT,
	ADD_INGREDIENT,
	LOAD_INGREDIENT_USER,
	SELECT_INGREDIENT,
	DELETE_INGREDIENTS_RECIPE_USER,
	SELECT_ALL_INGREDIENT,
} from '../actions/ingredients.action';

const initialState = {
	Ingredients: [],
	IngredientsUser: [],
	select: [],
};

const IngredientsReducers = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_INGREDIENT:
			return {
				...state,
				Ingredients: action.payload,
			};
		case LOAD_INGREDIENT_USER:
			return {
				...state,
				IngredientsUser: action.payload,
			};
		case SELECT_INGREDIENT:
			return {
				...state,
				IngredientsUser: action.payload,
			};
		case SELECT_ALL_INGREDIENT:
			return {
				...state,
				IngredientsUser: action.payload,
			};
		case ADD_INGREDIENT:
			return {
				...state,
			};
		case DELETE_INGREDIENTS_RECIPE_USER:
			return { ...state };
		default:
			return state;
	}
};
export default IngredientsReducers;
