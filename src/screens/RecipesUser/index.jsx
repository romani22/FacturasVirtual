import { View, Text, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import RecipeItem from '../../components/RecipeItem';
import { deleteRecipeUser, loadRecipe, selectRecipe } from '../../store/actions/recipe.action';
import { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { deleteIngredientsXRecipe, selectIngredientXRecipe } from '../../store/actions/ingredients.action';

import { Entypo } from '@expo/vector-icons';
import BackgroundImage from '../../components/BackgroundImage';
import colors from '../../constants/colors';
const RecipesUser = ({ navigation }) => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipe.recipe);
  useFocusEffect(
    useCallback(() => {
      dispatch(loadRecipe('user'));
    }, [dispatch])
  );
  const renderItem = ({ item }) => {
    return (
      <View
        style={styles.viewRecipeItem}
        key={item.id}
      >
        <RecipeItem
          styleCustom={styles.recipeBox}
          id={item.id}
          title={item.title}
          image={item.image}
          description={item.description}
          onSelect={() => {
            changeViewDetail(item.id);
          }}
        />
        <TouchableOpacity
          style={styles.buttonX}
          onPress={() => {
            recipeUserDelete(item.id);
          }}
        >
          <Entypo
            name='trash'
            size={18}
            style={styles.shadowIcon}
            color={colors.danger}
          />
        </TouchableOpacity>
      </View>
    );
  };
  const recipeUserDelete = async (id) => {
    await dispatch(deleteRecipeUser(id));
    await dispatch(deleteIngredientsXRecipe(id));
    Alert.alert('Se Elimino correctamente');
    await dispatch(loadRecipe('user'));
  };
  const changeViewDetail = async (id) => {
    await dispatch(selectRecipe(id, 'user'));
    await dispatch(selectIngredientXRecipe(id));
    await navigation.navigate('RecipeDetail');
  };
  const changeviewAdd = () => {
    navigation.navigate('newRecipe');
  };
  return (
    <BackgroundImage>
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.titleRecipe}>Listado Creadas</Text>

          <Button
            title={'+'}
            buttonStyle={styles.buttonContainer}
            textStyle={styles.buttonText}
            actionPress={() => changeviewAdd()}
          />
        </View>
        <FlatList
          data={recipes}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </BackgroundImage>
  );
};

export default RecipesUser;
