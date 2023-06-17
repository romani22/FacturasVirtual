import * as FileSystem from 'expo-file-system';
import { insertRecipe, fetchRecipe } from '../../../db';

export const ADD_RECIPE = 'ADD_RECIPE';
export const SELECT_RECIPED = 'SELECT_RECIPED';
export const LOAD_RECIPED = 'LOAD_RECIPED';

export const addRecipe = (title, image, description, steps) => {
	return async (dispatch) => {
		const fileName = image.split('/').pop();
		const Path = FileSystem.documentDirectory + fileName;
		try {
			FileSystem.moveAsync({
				from: image,
				to: Path,
			});
			const result = await insertRecipe(title, image, description, steps);
			dispatch({ type: ADD_RECIPE, payload: { title, image: Path, description, steps } });
		} catch (error) {
			throw error;
		}
	};
};
export const selectRecipe = (id) => ({
	type: 'SELECT_RECIPED',
	payload: id,
});

export const loadRecipe = () => {
	return async (dispatch) => {
		try {
			const result = await fetchRecipe();
			dispatch({ type: LOAD_RECIPED, payload: result.rows._array });
		} catch (error) {
			throw error;
		}
	};
};
