import { StyleSheet } from 'react-native';
import colors from './src/constants/colors';
import AppNavigation from './src/navigation/AppNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store';
export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<AppNavigation />
			</NavigationContainer>
		</Provider>
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
