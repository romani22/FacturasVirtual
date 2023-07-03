import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import CardCategory from '../../components/CardCategory';
import { useDispatch, useSelector } from 'react-redux';
import { loadRecipe, selectRecipe } from '../../store/actions/recipe.action';
import { loadIngredients } from '../../store/actions/ingredients.action';
import { recetas } from '../../data/recipes';
import { useEffect, useState } from 'react';
import Carrousel from '../../components/Carrousel';
import Card from '../../components/Card';
const Home = ({ navigation }) => {
	const dispatch = useDispatch();
	const [popular, setPopular] = useState([]);
	const [recomendada, setRecomendada] = useState([]);

	const popularRecipe = () => {
		const randomNumbers = Array.from({ length: 4 }, () => Math.floor(Math.random() * 30) + 1);
		let recipesPopular = [];
		for (const category in recetas) {
			for (const iterator of recetas[category]) {
				if (randomNumbers.find((item) => item == iterator.id)) {
					recipesPopular.push(iterator);
				}
			}
		}
		setPopular(recipesPopular);
	};
	const recomendadaRecipe = () => {
		const randomNumbers = Array.from({ length: 4 }, () => Math.floor(Math.random() * 30) + 1);
		let recipesRecomendada = [];
		for (const category in recetas) {
			for (const iterator of recetas[category]) {
				if (randomNumbers.find((item) => item == iterator.id)) {
					recipesRecomendada.push(iterator);
				}
			}
		}
		setRecomendada(recipesRecomendada);
	};
	const ingredients = useSelector((state) => state.ingredient.Ingredients);
	useEffect(() => {
		popularRecipe();
		recomendadaRecipe();
		dispatch(loadIngredients());
	}, [dispatch]);

	const changeViewDetail = (id) => {
		dispatch(selectRecipe(id, 'App'));
		dispatch(loadIngredients());
		navigation.navigate('RecipeDetail');
	};

	const renderPopular = ({ item }) => {
		return (
			<TouchableOpacity
				onPress={() => {
					changeViewDetail(item.id);
				}}
			>
				<Image style={[styles.image]} source={{ uri: item.image.toString() }} />
				<Text>{item.title}</Text>
			</TouchableOpacity>
		);
	};
	const renderRecomendada = ({ item }) => {
		return (
			<View style={styles.boxTouchable}>
				<TouchableOpacity
					style={styles.boxRecipe}
					onPress={() => {
						changeViewDetail(item.id);
					}}
				>
					<Image style={[styles.image]} source={{ uri: item.image.toString() }} />
					<Text>{item.title}</Text>
				</TouchableOpacity>
			</View>
		);
	};
	return (
		<View style={styles.container}>
			<Carrousel />

			<Card customeStyle={styles.card}>
				<FlatList data={popular} keyExtractor={(item) => item.id} renderItem={renderPopular} />
			</Card>
			<Card customeStyle={styles.card}>
				<FlatList
					data={recomendada}
					keyExtractor={(item) => item.id}
					renderItem={renderRecomendada}
				/>
			</Card>
			{/* <View style={styles.view}>
				<CardCategory
					title="Entradas"
					styleTitle={styles.title}
					actionPress={() => selectCategory('Entry')}
					Sourceimage={
						'https://mejorconsalud.as.com/wp-content/uploads/2016/02/Elegir-aperitivos-bajos-en-calor%C3%ADas.jpg'
					}
				/>
			</View>
			<View style={styles.view}>
				<CardCategory
					title="Platos Principales"
					styleTitle={styles.title}
					actionPress={() => selectCategory('DishMain')}
					Sourceimage={
						'https://hips.hearstapps.com/hmg-prod/images/salmon-con-trigueros-y-judias-1562929760.jpg?crop=1.00xw:0.335xh;0,0.377xh&resize=1200:*'
					}
				/>
			</View> */}
		</View>
	);
};

export default Home;
