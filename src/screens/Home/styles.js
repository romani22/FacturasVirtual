import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  image: {
    width: '80%',
    height: 150,
    borderRadius: 35,
    backgroundColor: colors.primary,
  },
  boxScrollView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#45372f',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: colors.white,
    marginBottom: 10,
  },
  boxCarrousel: {
    flex: 1,
    height: 200,
    shadowColor: colors.danger,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 6,
  },
  boxRecipe: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
  card: {
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
    shadowColor: colors.black,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    elevation: 5,
    backgroundColor: '#7f6452',
    overflow: 'hidden',
  },
  boxTouchable: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  degradesTitle: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    height: 60,
    top: 130,
  },
  titlePrinc: {
    fontSize: 30,
    color: colors.white,
    textAlign: 'center',
    fontFamily: 'Sigmar-Regular',
  },
  carouselContainer: {
    flexDirection: 'row',
  },
  titleRecipe: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default styles;
