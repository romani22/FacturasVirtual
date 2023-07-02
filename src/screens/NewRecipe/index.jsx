import { View, ScrollView, TextInput, Text, Modal } from 'react-native';
import styles from './styles';
import ImageSelector from '../../components/ImageSelector';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { addRecipe } from '../../store/actions/recipe.action';
import Button from '../../components/Button';
import SelectorIngredients from '../../components/SelectorIngredients';
import ListIngredientsUser from '../../components/ListIngredientsUser';
import { addIngredientsUser } from '../../store/actions/ingredients.action';
const NewRecipe = ({ navigation }) => {
	const dispatch = useDispatch();
	const [titleNew, setTitle] = useState('');
	const [imageNew, setImage] = useState('');
	const [descriptionNew, setDescription] = useState('');
	const [stepCookNew, setStepCook] = useState('');
	const [listIngredients, setListIngredients] = useState([]);

	const handleTitleChange = (text) => setTitle(text);
	const handleDescriptionChange = (text) => setDescription(text);
	const handleStepChange = (text) => setStepCook(text);

	const handleSave = async () => {
		const result = await dispatch(
			addRecipe(titleNew, 'user', imageNew, descriptionNew, stepCookNew)
		);
		const newRecipeId = 1;
		listIngredients.forEach(async (item) => {
			await dispatch(addIngredientsUser(item.id, newRecipeId, item.quantity));
		});
		setImage('');
		setTitle('');
		setDescription('');
		setStepCook('');
		setListIngredients([]);
		navigation.navigate('Lista');
	};
	const ingredientsSelected = (ingre) => {
		let ArrayIngredients = [];
		Object.keys(ingre).forEach((element) => {
			ArrayIngredients.push({ id: element, quantity: ingre[element] });
		});
		setListIngredients(ArrayIngredients);
		setModalVisible(false);
	};
	const [modalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(!modalVisible);
	};

	return (
		<ScrollView centerContent={true} contentContainerStyle={styles.scrollViewContent}>
			<View style={styles.container}>
				<Text style={styles.TextTitle}>Nueva Receta...</Text>
				<View style={styles.view}>
					<TextInput
						style={styles.input}
						placeholder="Escriba el nombre de su Receta"
						value={titleNew}
						onChangeText={handleTitleChange}
					/>
				</View>
				<View style={styles.view}>
					<ImageSelector onImage={setImage} valor={imageNew} />
				</View>

				<View style={styles.view}>
					<TextInput
						style={styles.input}
						value={descriptionNew}
						multiline
						placeholder="Escriba una descripción de la Receta"
						onChangeText={handleDescriptionChange}
					/>
				</View>
				<View style={styles.viewListIngredient}>
					<View style={styles.boxIngredients}>
						<ListIngredientsUser ingredientsSelected={listIngredients} />
					</View>
					<Button
						title={'+'}
						textStyle={styles.Buttontext}
						buttonStyle={styles.button}
						actionPress={toggleModal}
					/>
				</View>
				<View style={styles.view}>
					<TextInput
						style={styles.input}
						value={stepCookNew}
						multiline
						placeholder="Escriba los pasos para realizar la Receta"
						onChangeText={handleStepChange}
					/>
				</View>
				<Button
					title={'Guardar Receta'}
					textStyle={styles.Buttontext}
					buttonStyle={styles.button}
					actionPress={handleSave}
				/>
				<Modal
					visible={modalVisible}
					animationType="slide"
					onRequestClose={() => setModalVisible(false)}
				>
					<SelectorIngredients
						actionPress={ingredientsSelected}
						ingredientsSelected={listIngredients}
					/>
				</Modal>
			</View>
		</ScrollView>
	);
};

export default NewRecipe;
