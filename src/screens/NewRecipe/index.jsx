import { View, ScrollView, TextInput, Text, Alert } from 'react-native';
import styles from './styles';
import ImageSelector from '../../components/ImageSelector';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { addRecipe } from '../../store/actions/recipe.action';
import Button from '../../components/Button';
const NewRecipe = ({ navigation }) => {
	const dispatch = useDispatch();
	const [titleNew, setTitle] = useState('');
	const [imageNew, setImage] = useState('');
	const [descriptionNew, setDescription] = useState('');
	const [stepCookNew, setStepCook] = useState('');

	const handleTitleChange = (text) => setTitle(text);
	const handleDescriptionChange = (text) => setDescription(text);
	const handleStepChange = (text) => setStepCook(text);

	const handleSave = () => {
		dispatch(addRecipe(titleNew, imageNew, descriptionNew, stepCookNew));
		setImage('');
		setTitle('');
		setDescription('');
		setStepCook('');
		navigation.navigate('Lista');
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
					textStyle={styles.textButton}
					buttonStyle={styles.button}
					actionPress={handleSave}
				/>
			</View>
		</ScrollView>
	);
};

export default NewRecipe;
