import { ADD_RECIPE, SELECT_RECIPED } from '../actions/recipe.action';
import Recipe from '../../models/Recipe';

const initialState = {
	recipe: [],
	selected: 'hola',
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
		case SELECT_RECIPED:
			console.log(action.payload);
			return { ...state, selected: action.payload };
		default:
			return state;
	}
};
export default RecipeReducers;
