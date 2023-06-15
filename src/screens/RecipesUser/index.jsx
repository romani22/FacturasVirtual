import { View, Text, FlatList, Image } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import RecipeItem from '../../components/RecipeItem';
import { selectRecipe } from '../../store/actions/recipe.action';

const RecipesUser = ({ navigation }) => {
	const recipes = useSelector((state) => state.recipe.recipe);
	const dispatch = useDispatch();
	const renderItem = ({ item }) => (
		<RecipeItem
			title={item.title}
			image={item.image}
			description={item.description}
			onSelect={() => {
				changeViewDetail(item.id);
			}}
		/>
	);
	const changeViewDetail = (id) => {
		dispatch(selectRecipe(id));
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
