import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card';
import BackgroundImage from '../../components/BackgroundImage';
import { useCallback, useEffect, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../../constants/colors';
import { addShopping } from '../../store/actions/recipe.action';
import { useFocusEffect } from '@react-navigation/native';
import { loadIngredients } from '../../store/actions/ingredients.action';

const RecipeDetail = () => {
	const dispatch = useDispatch();
	const Recipe = useSelector((state) => state.recipe.select);
	const ingredients = useSelector((state) => state.ingredient.Ingredients);
	useFocusEffect(
		useCallback(() => {
			dispatch(loadIngredients());
		}, [dispatch])
	);
	const ListingredientsUser = useSelector((state) => state.ingredient.IngredientsUser);
	if (!Recipe[0].ingredients) {
		Recipe[0].ingredients = ListingredientsUser;
	}
	console.log(Recipe[0].ingredients);
	const [listIngredients, setListIngredients] = useState([]);
	const generateListIngredient = () => {
		const generatedList = Recipe[0].ingredients.map((element) => {
			const matchedIngredient = ingredients.find((ingredient) => element.id === ingredient.id);

			if (matchedIngredient) {
				return (
					<View style={styles.ViewIngredients} key={matchedIngredient.id}>
						<Text style={styles.nameIngredients}>{matchedIngredient.name}:</Text>
						<Text style={styles.quantityIngredients}>{element.quantity}</Text>
					</View>
				);
			}
			return null;
		});
		setListIngredients(generatedList);
	};
	const addCartRecipe = (id, type) => {
		dispatch(addShopping(parseInt(id), type));
		Alert.alert('Perfecto!', 'se cargaron los ingredientes al carrito', [{ text: 'ok' }]);
	};
	useEffect(() => {
		generateListIngredient();
	}, [Recipe]);

	if (Recipe && Recipe.length > 0) {
		return (
			<BackgroundImage>
				<ScrollView
					style={styles.container}
					contentContainerStyle={{
						flexGrow: 1,
						justifyContent: 'center',
						alignItems: 'center',
						paddingBottom: 60,
					}}
				>
					<Card>
						<View style={styles.view}>
							<View style={styles.boxHeader}>
								<View style={styles.boxTitle}>
									<Text style={styles.title}>{Recipe[0].title}</Text>
								</View>
								<View style={styles.boxStar}>
									<TouchableOpacity
										style={styles.buttonStar}
										onPress={() => {
											addCartRecipe(Recipe[0].id, Recipe[0].type);
										}}
									>
										<FontAwesome5
											name="shopping-cart"
											size={24}
											style={styles.shadowIcon}
											color={colors.black}
										/>
									</TouchableOpacity>
								</View>
							</View>

							<Image style={styles.image} source={{ uri: Recipe[0].image }} />
							<View style={styles.viewDescription}>
								<Text style={styles.description}>{Recipe[0].description}</Text>
								<Text style={styles.description}>Ingrdientes:</Text>
								<ScrollView
									style={styles.boxIngredients}
									contentContainerStyle={{
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									{listIngredients}
								</ScrollView>
							</View>
							<View style={styles.viewDescription}>
								<ScrollView style={styles.boxSteps}>
									<Text style={styles.steps}>{Recipe[0].steps}</Text>
								</ScrollView>
							</View>
						</View>
					</Card>
				</ScrollView>
			</BackgroundImage>
		);
	}
	return null;
};

export default RecipeDetail;
