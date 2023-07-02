import React from 'react';
import { ImageBackground, View } from 'react-native';
import styles from './styles';

const BackgroundImage = ({ children }) => (
	<View style={styles.view}>
		<ImageBackground
			source={require('../../assets/img/comidaFondoNegro.jpg')}
			style={styles.background}
		>
			{children}
		</ImageBackground>
	</View>
);

export default BackgroundImage;
