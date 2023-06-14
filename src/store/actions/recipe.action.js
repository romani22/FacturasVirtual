import * as FileSystem from 'expo-file-system';

export const ADD_RECIPE = 'ADD_RECIPE';

export const addRecipe = (title, image, description, steps) => {
	return async (dispatch) => {
		const fileName = image.split('/').pop();
		const Path = FileSystem.documentDirectory + fileName;

		try {
			FileSystem.moveAsync({
				from: image,
				to: Path,
			});
		} catch (error) {
			console.log(error.menssage);
			throw error;
		}
		dispatch({ type: ADD_RECIPE, payload: { title, image: Path, description, steps } });
	};
};
