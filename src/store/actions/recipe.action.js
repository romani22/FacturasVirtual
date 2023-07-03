import * as FileSystem from 'expo-file-system';
import {
	insertRecipe,
	fetchRecipe,
	selectXidRecipe,
	addShoppingRecipe,
	fetchRecipeShopping,
	deleteRecipeShopping,
	deleteRecipeXid,
} from '../../../db';
import { recetas } from '../../data/recipes';
export const ADD_RECIPE = 'ADD_RECIPE';
export const SELECT_RECIPED = 'SELECT_RECIPED';
export const LOAD_RECIPED = 'LOAD_RECIPED';
export const ADD_SHOPPING_RECIPE = 'ADD_SHOPPING_RECIPE';
export const LOAD_RECIPEDSHOPPING = 'LOAD_RECIPEDSHOPPING';
export const DELETE_SHOPING = 'DELETE_SHOPING';
export const DELETE_RECIPE_USER = 'DELETE_RECIPE_USER';

import { ingredients } from '../../data/ingredients';
import { selectIngredientXRecipe } from './ingredients.action';
export const addRecipe = (title, type, image, description, steps) => {
	return async (dispatch) => {
		let Path = '';
		if (image != '') {
			const fileName = image.split('/').pop();
			Path = FileSystem.documentDirectory + fileName;
		}

		try {
			if (Path) {
				await FileSystem.moveAsync({
					from: image,
					to: Path,
				});
			}

			const result = await insertRecipe(title, type, Path, description, steps);
			dispatch({ type: ADD_RECIPE, payload: { title, type, image: Path, description, steps } });
			return result;
		} catch (error) {
			throw error;
		}
	};
};
export const selectRecipe = (id, view) => {
	return async (dispatch) => {
		let result;
		try {
			switch (view) {
				case 'App':
					Object.keys(recetas).forEach((element, f) => {
						for (let i = 0; i < recetas[element].length; i++) {
							if (recetas[element][i].id == id) {
								result = [recetas[element][i]];
								break;
							}
						}
					});
					break;
				case 'user':
					const recipe = await selectXidRecipe(id);
					result = recipe.rows._array;
					break;
				default:
					break;
			}

			dispatch({ type: SELECT_RECIPED, payload: result });
		} catch (error) {
			throw error;
		}
	};
};

export const loadRecipe = (view, category) => {
	return async (dispatch) => {
		let result = [];
		try {
			switch (view) {
				case 'App':
					result = recetas[category];
					break;
				case 'user':
					const recipe = await fetchRecipe();
					result = recipe.rows._array;
					break;
				default:
					break;
			}
			dispatch({ type: LOAD_RECIPED, payload: result, category });
			return result;
		} catch (error) {
			throw error;
		}
	};
};
export const deleteRecipeUser = (idRecipeUSer) => {
	return async (dispatch) => {
		try {
			const result = await deleteRecipeXid(idRecipeUSer);
			dispatch({ type: DELETE_RECIPE_USER, playload: result.rows._array });
		} catch (error) {
			throw error;
		}
	};
};

export const addShopping = (idShopping, type) => {
	return async (dispatch) => {
		try {
			const result = await addShoppingRecipe(idShopping, type);
			dispatch({ type: ADD_SHOPPING_RECIPE, playload: { result } });
		} catch (error) {
			throw error;
		}
	};
};

export const searchRecipeShopping = () => {
	return async (dispatch) => {
		let result = [];
		let ingredientsid = [];
		try {
			const recipeShop = await fetchRecipeShopping();
			if (!recipeShop) {
				console.log('No hay Receta en la lista de compras');
				return false;
			}
			result = recipeShop.rows._array;

			for (const item of result) {
				switch (item.type) {
					case 'user':
						const recipe = await selectXidRecipe(item.idShopping);
						const UserIngredientes = await dispatch(selectIngredientXRecipe(item.idShopping));
						UserIngredientes.map((item) => {
							let dataIngre = ingredients.filter((ingre) => ingre.id === item.id);
							item.name = dataIngre[0].name;
						});
						ingredientsid.push({
							id: item.id,
							name: recipe.rows._array[0].title,
							ingredients: UserIngredientes,
						});

						break;
					case 'App':
						await Object.keys(recetas).forEach((element, f) => {
							for (let i = 0; i < recetas[element].length; i++) {
								if (recetas[element][i].id == item.idShopping) {
									ingredientsid.push({
										id: item.id,
										name: recetas[element][i]['title'],
										ingredients: recetas[element][i]['ingredients'],
									});
									break;
								}
							}
						});

						break;
					default:
						break;
				}
			}

			await ingredientsid.forEach((receta) => {
				receta.ingredients.map((ingredient, index) => {
					let idIngrediente = ingredient.id - 1;
					receta.ingredients[index].name = ingredients[idIngrediente].name;
				});
			});

			dispatch({ type: LOAD_RECIPEDSHOPPING, payload: ingredientsid });
		} catch (error) {
			throw error;
		}
	};
};

export const deleteShopping = (idShopping) => {
	return async (dispatch) => {
		try {
			const result = await deleteRecipeShopping(idShopping);
			dispatch({ type: DELETE_SHOPING, idShopping: { idShopping } });
		} catch (error) {
			throw error;
		}
	};
};
