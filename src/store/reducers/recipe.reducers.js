import { ADD_RECIPE, SELECT_RECIPED, LOAD_RECIPED } from '../actions/recipe.action';
import Recipe from '../../models/Recipe';

const initialState = {
	recipe: [],
	selected: '',
};

const RecipeReducers = (state = initialState, action) => {
	switch (action.type) {
		case ADD_RECIPE:
			const newRecipe = new Recipe(
				action.payload.id,
				action.payload.title,
				action.payload.image,
				action.payload.description,
				action.payload.steps
			);
			return { ...state, recipe: state.recipe.concat(newRecipe) };
		case SELECT_RECIPED:
			return { ...state, selected: action.payload };
		case LOAD_RECIPED:
			return {
				...state,
				recipe: action.payload.map(
					(item) => new Recipe(item.id, item.title, item.image, item.description, item.steps)
				),
			};
		default:
			return state;
	}
};
export default RecipeReducers;
