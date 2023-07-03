import {
	addIngredientUser,
	deleteIngredients,
	selectAllIngredientsDb,
	selectIngredientXidRecipe,
} from '../../../db';
import { ingredients } from '../../data/ingredients';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const SELECT_INGREDIENT = 'SELECT_INGREDIENT';
export const LOAD_INGREDIENT = 'LOAD_INGREDIENT';
export const LOAD_INGREDIENT_USER = 'LOAD_INGREDIENT_USER';
export const DELETE_INGREDIENTS_RECIPE_USER = 'DELETE_INGREDIENTS_RECIPE_USER';
export const SELECT_ALL_INGREDIENT = 'SELECT_ALL_INGREDIENT';

export const loadIngredients = () => {
	return async (dispatch) => {
		try {
			result = ingredients;
			dispatch({ type: LOAD_INGREDIENT, payload: result });
		} catch (error) {
			throw error;
		}
	};
};

export const addIngredientsUser = (idIngredient, idRecipe, Quantity) => {
	return async (dispatch) => {
		try {
			const result = await addIngredientUser(idIngredient, idRecipe, Quantity);
			console.log(result, 'creacion de ingrediente');
			dispatch({ type: ADD_INGREDIENT, payload: result.rows });
		} catch (error) {
			throw error;
		}
	};
};

export const selectIngredientXRecipe = (id) => {
	return async (dispatch) => {
		try {
			result = await selectIngredientXidRecipe(id);
			dispatch({ type: SELECT_INGREDIENT, payload: result.rows._array });
			return result.rows._array;
		} catch (error) {
			throw error;
		}
	};
};

export const deleteIngredientsXRecipe = (idRecipeUSer) => {
	return async (dispatch) => {
		try {
			const result = await deleteIngredients(idRecipeUSer);
			dispatch({ type: DELETE_INGREDIENTS_RECIPE_USER, playload: result.rows._array });
		} catch (error) {
			throw error;
		}
	};
};

export const selectAllIngredients = () => {
	return async (dispatch) => {
		try {
			result = await selectAllIngredientsDb();
			dispatch({ type: SELECT_ALL_INGREDIENT, payload: result.rows._array });
			return result;
		} catch (error) {
			throw error;
		}
	};
};
