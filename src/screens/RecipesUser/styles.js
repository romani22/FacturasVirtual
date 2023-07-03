import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTitle: {
    paddingTop: 35,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  recipeBox: {
    backgroundColor: colors.white,
  },
  view: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleRecipe: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    margin: 10,
    padding: 8,
  },
  buttonText: {
    color: colors.black,
    fontSize: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.primary,
  },
  viewRecipeItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonX: {
    maxWidthwidth: '10%',
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
});

export default styles;
