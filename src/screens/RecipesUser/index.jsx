import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import Card from '../../components/Card';

import { useSelector } from 'react-redux';

const RecipesUser = ({ navigation }) => {
	const recipes = useSelector((state) => state.recipe.recipe);
	const renderItem = ({ item }) => (
		<Card>
			{/* title={item.title}
			image={item.image}
			address={'cualquiera'}
			onSelect={() => navigator.navigate('Detalle', { placeId: item.id })} */}
		</Card>
	);
	const changeviewAdd = () => {
		navigation.navigate('newRecipe');
	};
	return (
		<View style={styles.container}>
			<View style={styles.view}>
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
		</View>
	);
};

export default RecipesUser;
