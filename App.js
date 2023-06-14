import { ImageBackground, StyleSheet } from 'react-native';
import colors from './src/constants/colors';
import AppNavigation from './src/navigation/AppNavigation';
import { Provider } from 'react-redux';
import store from './src/store';
import BackgroundImage from './src/components/BackgroundImage';
export default function App() {
	return (
		<BackgroundImage>
			<Provider store={store}>
				<AppNavigation />
			</Provider>
		</BackgroundImage>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
