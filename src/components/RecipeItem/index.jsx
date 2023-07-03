import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
const RecipeItem = ({ title, image, description, onSelect, id, styleCustom }) => {
  return (
    <TouchableOpacity
      key={id}
      style={{ ...styles.placeItem, ...styleCustom }}
      onPress={onSelect}
    >
      <Image
        style={styles.image}
        source={{ uri: image }}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeItem;
