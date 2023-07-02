import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';

const CardCategory = ({ Sourceimage, title, styleTitle, actionPress }) => {
	const imageSource = { uri: Sourceimage };
	return (
		<TouchableOpacity style={styles.container} onPress={actionPress}>
			<Image source={imageSource} style={styles.categoryIcon} />
			<Text style={styleTitle}>{title}</Text>
		</TouchableOpacity>
	);
};

export default CardCategory;
