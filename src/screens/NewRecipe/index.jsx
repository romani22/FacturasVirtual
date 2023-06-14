import { View, ScrollView, TextInput, Text, Alert } from 'react-native';
import styles from './styles';
import ImageSelector from '../../components/ImageSelector';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addRecipe } from '../../store/actions/recipe.action';
import Button from '../../components/Button';
const NewRecipe = ({ navigation }) => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');
	const [image, setImage] = useState('');
	const [description, setDescription] = useState('');
	const [stepCook, setStepCook] = useState('');

	const handleTitleChange = (text) => setTitle(text);
	const handleDescriptionChange = (text) => setDescription(text);
	const handleStepChange = (text) => setStepCook(text);

	const handleSave = () => {
		if (title === '' || image === '')
			return Alert.alert('Atención!', 'debe completar todo los campos', [{ text: 'ok' }]);
		dispatch(addRecipe(title, image, description, stepCook));
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
						value={title}
						onChangeText={handleTitleChange}
					/>
				</View>
				<View style={styles.view}>
					<ImageSelector onImage={setImage} />
				</View>
				<View style={styles.view}>
					<TextInput
						style={styles.input}
						value={description}
						multiline
						placeholder="Escriba una descripción de la Receta"
						onChangeText={handleDescriptionChange}
					/>
				</View>
				<View style={styles.view}>
					<TextInput
						style={styles.input}
						value={stepCook}
						multiline
						placeholder="Escriba los pasos para realizar la Receta"
						onChangeText={handleStepChange}
					/>
				</View>
				<Button
					title={'Guardar direccion'}
					textStyle={styles.textButton}
					buttonStyle={styles.button}
					actionPress={handleSave}
				/>
			</View>
		</ScrollView>
	);
};

export default NewRecipe;
