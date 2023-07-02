import { View, Text, FlatList, Image } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import RecipeItem from '../../components/RecipeItem';
import { loadRecipe, selectRecipe } from '../../store/actions/recipe.action';
import { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { selectIngredientXRecipe } from '../../store/actions/ingredients.action';

const RecipesUser = ({ navigation }) => {
	const dispatch = useDispatch();
	const recipes = useSelector((state) => state.recipe.recipe);
	useFocusEffect(
		useCallback(() => {
			dispatch(loadRecipe('user'));
		}, [dispatch])
	);
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
	const changeViewDetail = async (id) => {
		await dispatch(selectRecipe(id, 'user'));
		await dispatch(selectIngredientXRecipe(id));
		navigation.navigate('RecipeDetail');
	};
	const changeviewAdd = () => {
		navigation.navigate('newRecipe');
	};
	return (
		<View style={styles.container}>
			<View style={styles.containerTitle}>
				<Text style={styles.titleRecipe}>Listado Creadas</Text>
				<Button
					title={'+'}
					buttonStyle={styles.buttonContainer}
					textStyle={styles.buttonText}
					actionPress={() => changeviewAdd()}
				/>
			</View>
			<FlatList data={recipes} keyExtractor={(item) => item.id} renderItem={renderItem} />
		</View>
	);
};

export default RecipesUser;
