import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import { ingredients } from '../../data/ingredients';
const SelectorIngredients = ({ actionPress, ingredientsSelected }) => {
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedIngredients, setSelectedIngredients] = useState([]);
	const allIngredients = ingredients;
	useEffect(() => {
		ingredientsSelected.forEach((item) => {
			toggleIngredientSelection(item.id, item.quantity);
		});
	}, [ingredientsSelected]);
	const toggleIngredientSelection = (ingredientId, quantity) => {
		setSelectedIngredients((prevSelected) => {
			const updatedSelected = { ...prevSelected };
			if (updatedSelected[ingredientId]) {
				if (updatedSelected[ingredientId] == quantity) {
					delete updatedSelected[ingredientId];
				} else {
					updatedSelected[ingredientId] = quantity;
				}
			} else {
				if (quantity > 0) {
					updatedSelected[ingredientId] = quantity;
				} else {
					delete updatedSelected[ingredientId];
				}
			}
			return updatedSelected;
		});
	};
	const filteredIngredients = allIngredients.filter((ingredient) =>
		ingredient.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<View style={styles.container}>
			<View style={styles.containerHeader}>
				<Text style={styles.title}>SELECCIONE LOS INGREDIENTES</Text>
			</View>
			<View style={styles.containerBody}>
				<TextInput
					style={styles.searchInput}
					placeholder="Buscar por nombre"
					value={searchQuery}
					onChangeText={(text) => setSearchQuery(text)}
				/>

				<FlatList
					data={filteredIngredients}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => (
						<View style={styles.ingredientItem}>
							<TouchableOpacity
								onPress={() => toggleIngredientSelection(item.id, 1)}
								style={[
									styles.checkbox,
									selectedIngredients[item.id] && styles.checkboxSelected,
								]}
							/>
							<Text style={styles.ingredientName}>{item.name}</Text>
							<TextInput
								style={styles.quantityInput}
								placeholder="Cantidad"
								keyboardType="default"
								value={
									selectedIngredients[item.id]
										? selectedIngredients[item.id].toString()
										: ''
								}
								onChangeText={(text) => toggleIngredientSelection(item.id, parseInt(text))}
							/>
						</View>
					)}
				/>
			</View>

			<TouchableOpacity
				onPress={() => {
					actionPress(selectedIngredients);
				}}
				style={styles.saveButton}
			>
				<Text style={styles.saveButtonText}>Guardar</Text>
			</TouchableOpacity>
		</View>
	);
};

export default SelectorIngredients;
