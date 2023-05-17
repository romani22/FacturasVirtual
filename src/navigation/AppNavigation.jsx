import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../constants/colors';
import Home from '../screens/Home';
import Login from '../screens/Login';

const AppNavigation = () => {
	const Stack = createNativeStackNavigator();
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Login"
				screenOptions={{
					headerStyle: {
						backgroundColor: colors.primary,
					},
					headerTintColor: colors.darkBlue,
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}
			>
				<Stack.Screen
					name="Login"
					component={Login}
					options={{
						title: 'Login',
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{
						title: 'Home',
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigation;
