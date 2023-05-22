import { StyleSheet } from 'react-native';
import colors from './src/constants/colors';
import AppNavigation from './src/navigation/AppNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
	return (
		<NavigationContainer>
			<AppNavigation />
		</NavigationContainer>
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
