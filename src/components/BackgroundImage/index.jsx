import React from 'react';
import { ImageBackground } from 'react-native';
import styles from './styles';

const BackgroundImage = ({ children }) => (
	<ImageBackground
		source={require('../../assets/img/comidaFondoNegro.jpg')}
		style={styles.background}
	>
		{children}
	</ImageBackground>
);

export default BackgroundImage;
