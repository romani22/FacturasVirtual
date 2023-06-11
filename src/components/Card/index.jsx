import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';

const Card = ({ customeStyle, children }) => {
	return <View style={{ ...styles.container, ...customeStyle }}>{children}</View>;
};

export default Card;
