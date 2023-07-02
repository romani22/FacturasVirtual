import { FlatList, Text, View } from 'react-native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { loadIngredients } from '../../store/actions/ingredients.action';

const Ingredients = () => {
	const dispatch = useDispatch();
	const ingredients = useSelector((state) => state.ingredient.Ingredients);
	useFocusEffect(
		useCallback(() => {
			dispatch(loadIngredients());
		}, [dispatch])
	);
	const renderItem = ({ item }) => {
		if (item.id < 50) {
			return (
				<View>
					<Text>{item.name}</Text>
				</View>
			);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.containerTitle}>
				<Text style={styles.titleRecipe}>Listado App</Text>
			</View>
			<FlatList data={ingredients} keyExtractor={(item) => item.id} renderItem={renderItem} />
		</View>
	);
};

export default Ingredients;
