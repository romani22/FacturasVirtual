import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';

const RecipeItem = ({ title, image, description, onSelect }) => {
	console.log(image);
	return (
		<TouchableOpacity style={styles.placeItem} onPress={onSelect}>
			<Image style={styles.image} source={{ uri: image }} />
			<View style={styles.info}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.description}>{description}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default RecipeItem;
