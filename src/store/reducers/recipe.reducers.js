import {
	ADD_RECIPE,
	SELECT_RECIPED,
	LOAD_RECIPED,
	LOAD_RECIPEDSHOPPING,
	ADD_SHOPPING_RECIPE,
	DELETE_SHOPING,
} from '../actions/recipe.action';
import Recipe from '../../models/Recipe';

const initialState = {
	recipe: [],
	select: [],
	idShoppin: [],
	category: '',
};

const RecipeReducers = (state = initialState, action) => {
	switch (action.type) {
		case ADD_RECIPE:
			const newRecipe = new Recipe(
				action.payload.id,
				action.payload.title,
				action.payload.type,
				action.payload.image,
				action.payload.description,
				action.payload.steps
			);
			return { ...state, recipe: state.recipe.concat(newRecipe) };
		case SELECT_RECIPED:
			return {
				...state,
				select: action.payload,
			};
		case LOAD_RECIPED:
			return {
				...state,
				recipe: action.payload.map(
					(item) =>
						new Recipe(
							item.id.toString(),
							item.title,
							item.type,
							item.image,
							item.description,
							item.steps
						)
				),
				category: action.category,
			};

		case ADD_SHOPPING_RECIPE:
			return { ...state, idShoppin: action.payload };
		case LOAD_RECIPEDSHOPPING:
			return { ...state, idShoppin: action.payload };
		case DELETE_SHOPING:
			return { ...state };
		default:
			return state;
	}
};
export default RecipeReducers;
