import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  TextTitle: {
    paddingTop: 35,
    paddingBottom: 15,
    fontSize: 25,
    backgroundColor: colors.fifty,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.white,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  containerScroll: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 15,
  },
  view: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
  },
  input: {
    width: '90%',
    backgroundColor: '#bcc4be84',
    borderRadius: 15,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  button: {
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: colors.gray,
    borderBottomWidth: 3,
    marginBottom: 10,
    paddingVertical: 8,
  },
  Buttontext: {
    color: colors.white,
  },
  viewListIngredient: { flexDirection: 'row' },
  ViewIngredients: { flexDirection: 'row' },
  boxIngredients: { flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' },
  quantityIngredients: { fontSize: 16 },
  nameIngredients: {
    fontSize: 16,
    fontWeight: '800',
    marginRight: 4,
  },
});

export default styles;
