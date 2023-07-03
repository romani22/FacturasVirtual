import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: '100%',
  },
  preview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.darkBlue,
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    backgroundColor: colors.fourth,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: colors.gray,
    borderBottomWidth: 3,
  },
  textButton: {
    color: colors.white,
  },
});

export default styles;
