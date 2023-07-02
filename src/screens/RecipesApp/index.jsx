import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectRecipe } from '../../store/actions/recipe.action';
import RecipeItem from '../../components/RecipeItem';
import { loadIngredients } from '../../store/actions/ingredients.action';
import { useEffect, useState } from 'react';
import { nameRecipes } from '../../data/nameRecipes';
const RecipesApp = ({ navigation }) => {
	const dispatch = useDispatch();
	const recipes = useSelector((state) => state.recipe.recipe);
	const category = useSelector((state) => state.recipe.category);
	const [nameCategory, setNameCategory] = useState('');
	useEffect(() => {
		setNameCategory(nameRecipes[category]);
	}, [category]);
	const renderItem = ({ item }) => {
		return (
			<RecipeItem
				id={item.id}
				title={item.title}
				image={item.image}
				description={item.description}
				onSelect={() => {
					changeViewDetail(item.id);
				}}
			/>
		);
	};

	const changeViewDetail = (id) => {
		dispatch(selectRecipe(id, 'App'));
		dispatch(loadIngredients());
		navigation.navigate('RecipeDetail');
	};
	return (
		<View style={styles.container}>
			<View style={styles.containerTitle}>
				<Text style={styles.titleRecipe}>Listado de {nameCategory}</Text>
			</View>
			<FlatList data={recipes} keyExtractor={(item) => item.id} renderItem={renderItem} />
		</View>
	);
};

export default RecipesApp;
