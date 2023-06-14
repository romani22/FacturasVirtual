import { View, ScrollView, TextInput } from 'react-native';
import styles from './styles';
import ImageSelector from '../../components/ImageSelector';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addRecipe } from '../../store/actions/recipe.action';
import Button from '../../components/Button';
import colors from '../../constants/colors';
const NewRecipe = ({ navigation }) => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');
	const [image, setImage] = useState();
	const [description, setDescription] = useState('');
	const [stepCook, setStepCook] = useState('');

	const handleTitleChange = (text) => setTitle(text);
	const handleDescriptionChange = (text) => setDescription(text);
	const handleStepChange = (text) => setStepCook(text);

	const handleSave = () => {
		dispatch(addRecipe(title, image, description, stepCook));
		navigation.navigate('Lista');
	};
	return (
		<ScrollView>
			<View style={styles.container}>
				<View style={styles.view}>
					<TextInput style={styles.input} value={title} onChangeText={handleTitleChange} />
				</View>
				<View style={styles.view}>
					<ImageSelector onImage={setImage} />
				</View>
				<View style={styles.view}>
					<TextInput
						style={styles.input}
						value={description}
						onChangeText={handleDescriptionChange}
					/>
				</View>
				<View style={styles.view}>
					<TextInput style={styles.input} value={stepCook} onChangeText={handleStepChange} />
				</View>
				<Button title={'Guardar direccion'} color={colors.blue} actionPress={handleSave} />
			</View>
		</ScrollView>
	);
};

export default NewRecipe;
