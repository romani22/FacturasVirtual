import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login';

const Stack = createNativeStackNavigator();

export default AuthNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="Login"
			screenOptions={{
				headerShadowVisible: false,
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
		</Stack.Navigator>
	);
};
