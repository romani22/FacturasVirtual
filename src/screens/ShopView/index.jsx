import { View, FlatList, Alert, Text } from 'react-native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { deleteShopping, searchRecipeShopping } from '../../store/actions/recipe.action';
import { useEffect } from 'react';
import ListShopp from '../../components/ListShopp';

const ShopView = () => {
	const idShoppin = useSelector((state) => state.recipe.shoppinSelected);
	const dispatch = useDispatch();
	const searchIngredient = () => {
		dispatch(searchRecipeShopping());
	};
	useEffect(() => {
		searchIngredient();
	}, [idShoppin]);

	const deleteShoppinRecipe = async (id) => {
		await dispatch(deleteShopping(id));
		Alert.alert('Se Elimino correctamente');
		await searchIngredient();
	};
	const renderItem = ({ item }) => {
		return (
			<ListShopp
				idList={item.id}
				actionPress={() => {
					deleteShoppinRecipe(item.id);
				}}
				ListIngredients={item.ingredients}
				name={item.name}
			/>
		);
	};
	return (
		<View style={styles.container}>
			<View style={styles.boxTitle}>
				<Text style={styles.titleView}>LISTA DE COMPRA</Text>
			</View>
			<FlatList data={idShoppin} keyExtractor={(item) => item.id} renderItem={renderItem} />
		</View>
	);
};

export default ShopView;
