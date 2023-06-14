import { ADD_RECIPE } from '../actions/recipe.action';
import Recipe from '../../models/Recipe';

const initialState = {
	recipe: [],
};

const RecipeReducers = (state = initialState, action) => {
	switch (action.type) {
		case ADD_RECIPE:
			const newRecipe = new Recipe(
				Date.now(),
				action.payload.title,
				action.payload.image,
				action.payload.description,
				action.payload.steps
			);
			return { ...state, recipe: state.recipe.concat(newRecipe) };
		default:
			return state;
	}
};
export default RecipeReducers;
