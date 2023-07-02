import { Text, View } from 'react-native';
import styles from './styles';
import CardCategory from '../../components/CardCategory';
import { useDispatch, useSelector } from 'react-redux';
import { loadRecipe, selectRecipe } from '../../store/actions/recipe.action';
import { loadIngredients } from '../../store/actions/ingredients.action';
import { recetas } from '../../data/recipes';
import { useEffect } from 'react';
import Carrousel from '../../components/Carrousel';

const Home = ({ navigation }) => {
	const dispatch = useDispatch();
	const recipe = recetas.BreakFast.map((item) => {
		if (item.id === 17) return item;
	});
	const ingredients = useSelector((state) => state.ingredient.Ingredients);
	useEffect(() => {
		dispatch(loadIngredients());
	}, [dispatch]);
	const selectCategory = (selectCat) => {
		dispatch(loadRecipe('App', selectCat));
		navigation.navigate('ListRecipeApp');
	};

	return (
		<View style={styles.container}>
			<Carrousel />

			<View style={styles.view}>
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
			</View>
		</View>
	);
};

export default Home;
