import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, Text, View, Alert, Image, Button } from 'react-native';
import React, { useState } from 'react';
import colors from '../../constants/colors';
import styles from '../../screens/NewRecipe/styles';

const ImageSelector = (props) => {
	const [pickedUri, setPickedUri] = useState();

	const verifyPermissons = async () => {
		const { status } = await ImagePicker.requestCameraPermissionsAsync();
		if (status != 'granted') {
			Alert.alert(
				'Los permisos son insuficientes',
				'necesitamos dar permiso de la camara para usar la aplicación...',
				[{ text: 'ok' }]
			);
			return false;
		}
		return true;
	};

	const handlerTakeImage = async () => {
		const hasPermission = await verifyPermissons();
		if (!hasPermission) return;
		const image = await ImagePicker.launchCameraAsync({
			allowsEditing: true,
			aspect: [16, 9],
			quality: 0.8,
		});
		console.log(image);
		setPickedUri(image.assets[0].uri);
		props.onImage(image.assets[0].uri);
	};

	return (
		<View style={styles.container}>
			<View style={styles.preview}>
				{!pickedUri ? (
					<Text>No hay imagen seleccionada...</Text>
				) : (
					<Image style={styles.image} source={{ uri: pickedUri }} />
				)}
			</View>
			<Button title="Tomar Foto" color={colors.blue} onPress={handlerTakeImage} />
		</View>
	);
};

export default ImageSelector;
