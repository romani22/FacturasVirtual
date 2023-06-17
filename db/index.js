import { SQLite, openDatabase } from 'expo-sqlite';

const db = openDatabase('recipes.db');

export const init = () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'CREATE TABLE IF NOT EXISTS recipes (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, image TEXT NOT NULL, description TEXT NOT NULL, step TEXT NOT NULL)',
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

export const insertRecipe = (title, image, description, step) => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'INSERT INTO recipes (title, image, description, step) VALUES (?,?,?,?);',
				[title, image, description, step],
				(_, result) => resolve(result),
				(_, err) => reject(err)
			);
		});
	});
	return promise;
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
