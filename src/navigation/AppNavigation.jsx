import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../constants/colors';
import Home from '../screens/Home';
import Login from '../screens/Login';
import BottomTabsNavigator from './BottomTabsNavigator';

const AppNavigation = () => {
	const Stack = createNativeStackNavigator();
	return (
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
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="BottomTabsNavigator"
				component={BottomTabsNavigator}
				options={{
					headerShown: false,
				}}
			></Stack.Screen>
		</Stack.Navigator>
	);
};

export default AppNavigation;
