import React, { useEffect, useRef, useState } from 'react';
import { View, Image, Animated, Dimensions } from 'react-native';
import styles from './styles';

const Carrousel = () => {
	const [imageIndex, setImageIndex] = useState(0);
	const translateXAnim = useState(new Animated.Value(0))[0];
	const windowWidth = Dimensions.get('window').width;

	useEffect(() => {
		const moveImage = () => {
			const newIndex = imageIndex === 1 ? -1 : imageIndex + 1;
			Animated.timing(translateXAnim, {
				toValue: -1 * newIndex * windowWidth,
				duration: 500,
				useNativeDriver: true,
			}).start(() => {
				setImageIndex(newIndex);
			});
		};
		const interval = setInterval(moveImage, 2000);
		return () => clearInterval(interval);
	}, [imageIndex, translateXAnim, windowWidth]);
	return (
		<View style={styles.container}>
			<Animated.View
				style={[
					styles.carouselContainer,
					{
						transform: [{ translateX: translateXAnim }],
						width: windowWidth * 3,
					},
				]}
			>
				<View style={styles.boxImg}>
					<Image
						style={[styles.image]}
						source={{ uri: 'https://i.blogs.es/eb0590/huevos-benedictinos/840_560.jpg' }}
					/>
				</View>
				<View style={styles.boxImg}>
					<Image
						style={[styles.image]}
						source={{
							uri: 'https://www.cilantroandcitronella.com/wp-content/uploads/2016/08/red-curry_1_05.jpg',
						}}
					/>
				</View>
				<View style={styles.boxImg}>
					<Image
						style={[styles.image]}
						source={{ uri: 'https://i.blogs.es/8819e1/carbonara-rec/1366_2000.jpg' }}
					/>
				</View>
			</Animated.View>
		</View>
	);
};

export default Carrousel;
