import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import { ingredients } from '../../data/ingredients';

const ListIngredientsUser = ({ ingredientsSelected }) => {
	const [listIngredientes, setListIngredientes] = useState([]);
	useEffect(() => {
		renderItemIngredient(ingredientsSelected);
	}, [ingredientsSelected]);

	const renderItemIngredient = (ingredientsSelected) => {
		let ingredientesArray = [];
		ingredientsSelected.forEach((item) => {
			const matchedIngredient = ingredients.filter((ingredient) => {
				if (parseInt(ingredient.id) === parseInt(item.id)) {
					return ingredient;
				}
			});
			if (matchedIngredient) {
				ingredientesArray.push({
					id: item.id,
					name: matchedIngredient[0].name,
					quantity: item.quantity,
				});
			}
		});
		setListIngredientes(ingredientesArray);
	};

	return (
		<View style={styles.container}>
			<View style={styles.ViewIngredientsHeaders}>
				<Text style={styles.columnaHeader}>Ingrediente</Text>
				<Text style={styles.columnaHeader}>Cantidad</Text>
			</View>
			{listIngredientes
				? listIngredientes.map((item) => {
						return (
							<View style={styles.ViewIngredients} key={item.id}>
								<Text style={styles.nameIngredients}>{item.name}:</Text>
								<Text style={styles.quantityIngredients}>{item.quantity}</Text>
							</View>
						);
				  })
				: null}
		</View>
	);
};

export default ListIngredientsUser;
