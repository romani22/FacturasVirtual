import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';
const ListShopp = ({ name, ListIngredients, idList, actionPress }) => {
	const renderItem = ({ item }) => {
		return (
			<View style={styles.boxIngredient}>
				<Text style={styles.textIngredient}>{item.name}:</Text>
				<Text>{item.quantity}</Text>
			</View>
		);
	};
	return (
		<View style={styles.container}>
			<View style={styles.Card}>
				<View style={styles.containerHeader}>
					<Text style={styles.title}>{name}</Text>
					<TouchableOpacity onPress={actionPress}>
						<Entypo name="cross" size={15} style={styles.shadowIcon} color={colors.black} />
					</TouchableOpacity>
				</View>

				<FlatList
					style={styles.Listado}
					data={ListIngredients}
					keyExtractor={(item) => item.name}
					renderItem={renderItem}
				/>
			</View>
		</View>
	);
};

export default ListShopp;
