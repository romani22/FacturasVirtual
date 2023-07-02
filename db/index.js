import { SQLite, openDatabase } from 'expo-sqlite';

const db = openDatabase('recipes.db');

export const init = () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'CREATE TABLE IF NOT EXISTS recipes (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, type TEXT NOT NULL, image TEXT NOT NULL, description TEXT NOT NULL, steps TEXT NOT NULL)',
				[],
				() => {
					resolve();
				},
				(_, err) => reject(err)
			);
		});
	});
	return promise;
};

export const insertRecipe = (title, type, image, description, steps) => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'INSERT INTO recipes (title, type, image, description , steps) VALUES (?,?,?,?,?);',
				[title, type, image || '', description, steps],
				(_, result) => {
					resolve(result);
				},
				(_, err) => {
					console.error('Error en la consulta SQL:', err);
					reject(err);
				}
			);
		});
	});
};

export const fetchRecipe = () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'SELECT * FROM recipes',
				[],
				(_, result) => resolve(result),
				(_, err) => reject(err)
			);
		});
	});
	return promise;
};

export const selectXidRecipe = (id) => {
	if (id !== null) {
		const promise = new Promise((resolve, reject) => {
			db.transaction((tx) => {
				tx.executeSql(
					'SELECT * FROM recipes WHERE id = ?;',
					[id],
					(_, result) => resolve(result),
					(_, err) => reject(err)
				);
			});
		});
		return promise;
	} else {
		resolve(null);
	}
};

// BASE DE DATOS PARA LAS RECETAS QUE SE CARGAN PARA HACER COMPRAS
export const init2 = () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'CREATE TABLE IF NOT EXISTS recipesShoppin (id INTEGER PRIMARY KEY NOT NULL, idShopping INTEGER NOT NULL, type TEXT NOT NULL)',
				[],
				() => {
					resolve();
				},
				(_, err) => reject(err)
			);
		});
	});
	return promise;
};

export const addShoppingRecipe = (idShopping, type) => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'INSERT INTO recipesShoppin (idShopping, type) VALUES (?, ? );',
				[idShopping, type],
				(_, result) => resolve(result),
				(_, err) => reject(err)
			);
		});
	});
	return promise;
};
export const fetchRecipeShopping = () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'SELECT * FROM recipesShoppin',
				[],
				(_, result) => resolve(result),
				(_, err) => reject(err)
			);
		});
	});
	return promise;
};

export const deleteRecipeShopping = (id) => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'DELETE FROM recipesShoppin WHERE id = ?',
				[id],
				(_, result) => resolve(result),
				(_, err) => reject(err)
			);
		});
	});
	return promise;
};

// BASE DE DATOS PARA LAS RECETAS QUE SE CARGAN PARA HACER COMPRAS
export const init3 = () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'CREATE TABLE IF NOT EXISTS IngredientsRecipes (id INTEGER PRIMARY KEY NOT NULL, idIngredient INTEGER NOT NULL, idRecipe INTEGER NOT NULL, Quantity TEXT NOT NULL )',
				[],
				() => {
					resolve();
				},
				(_, err) => reject(err)
			);
		});
	});
	return promise;
};

export const addIngredientUser = (idIngredient, idRecipe, Quantity) => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'INSERT INTO IngredientsRecipes (idIngredient, idRecipe, Quantity) VALUES (?,?,?);',
				[idIngredient, idRecipe, Quantity],
				(_, result) => resolve(result),
				(_, err) => reject(err)
			);
		});
	});
	return promise;
};

export const selectIngredientXidRecipe = (id) => {
	if (id !== null) {
		const promise = new Promise((resolve, reject) => {
			db.transaction((tx) => {
				tx.executeSql(
					'SELECT idIngredient as id, Quantity as quantity FROM IngredientsRecipes WHERE idRecipe = ?;',
					[id],
					(_, result) => resolve(result),
					(_, err) => reject(err)
				);
			});
		});
		return promise;
	} else {
		return Promise.resolve(null); // Resolves a promise with a null value.
	}
};
