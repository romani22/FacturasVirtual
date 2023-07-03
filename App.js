import { ImageBackground, StyleSheet, View } from 'react-native';
import colors from './src/constants/colors';
import AppNavigation from './src/navigation/AppNavigation';
import { Provider } from 'react-redux';
import store from './src/store';

import { init, init2, init3 } from './db';

init()
  .then(() => console.log('DataBase Initialized'))
  .catch((err) => {
    console.log('DataBase fail connect');
    console.log(err.message);
  });

init2()
  .then(() => console.log('DataBase2 Initialized'))
  .catch((err) => {
    console.log('DataBase fail connect');
    console.log(err.message);
  });
init3()
  .then(() => console.log('DataBase3 Initialized'))
  .catch((err) => {
    console.log('DataBase fail connect');
    console.log(err.message);
  });
export default function App() {
  return (
    <View style={styles.view}>
      <ImageBackground
        source={require('./src/assets/img/comidaFondoNegro.jpg')}
        style={styles.background}
      >
        <Provider store={store}>
          <AppNavigation />
        </Provider>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  view: {
    flex: 1,
    resizeMode: 'cover',
  },
});
