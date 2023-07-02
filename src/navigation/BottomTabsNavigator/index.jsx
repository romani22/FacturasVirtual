import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import {
	MaterialCommunityIcons,
	MaterialIcons,
	FontAwesome5,
	FontAwesome,
} from '@expo/vector-icons';

import styles from './styles';
import RecipesUser from '../../screens/RecipesUser';
import Home from '../../screens/Home';
import NewRecipe from '../../screens/NewRecipe';
import colors from '../../constants/colors';
import RecipeDetail from '../../screens/RecipeDetail';
import UserConfig from '../../screens/UserConfig';
import RecipesApp from '../../screens/RecipesApp';
import Categories from '../../screens/Categories';
import Ingredients from '../../screens/Ingredients';
const BottomTabs = createBottomTabNavigator();

export default BottomTabsNavigator = () => {
	return (
		<BottomTabs.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: styles.tabBar,
			}}
		>
			<BottomTabs.Screen
				name="Lista"
				component={RecipesUser}
				options={{
					tabBarIcon: () => (
						<View style={styles.Button}>
							<FontAwesome5
								name="user"
								size={24}
								style={styles.shadowIcon}
								color={colors.white}
							/>
						</View>
					),
				}}
			/>
			{/* <BottomTabs.Screen
				name="Ingredients"
				component={Ingredients}
				options={{
					tabBarIcon: () => (
						<View style={styles.Button}>
							<FontAwesome5
								name="list"
								size={24}
								style={styles.shadowIcon}
								color={colors.white}
							/>
						</View>
					),
				}}
			/> */}
			<BottomTabs.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: () => (
						<View style={styles.Button}>
							<MaterialCommunityIcons
								name="home-outline"
								size={27}
								style={styles.shadowIcon}
								color={colors.white}
							/>
						</View>
					),
				}}
			/>
			<BottomTabs.Screen
				name="Categories"
				component={Categories}
				options={{
					tabBarIcon: () => (
						<View style={styles.Button}>
							<MaterialIcons
								name="category"
								size={24}
								style={styles.shadowIcon}
								color={colors.white}
							/>
						</View>
					),
				}}
			/>
			<BottomTabs.Screen
				name="Shopping"
				component={UserConfig}
				options={{
					tabBarIcon: () => (
						<View style={styles.Button}>
							<FontAwesome
								name="shopping-cart"
								size={24}
								style={styles.shadowIcon}
								color={colors.white}
							/>
						</View>
					),
				}}
			/>
			<BottomTabs.Screen
				name="newRecipe"
				component={NewRecipe}
				options={{ title: 'nueva receta', tabBarButton: () => null }}
			/>
			<BottomTabs.Screen
				name="RecipeDetail"
				component={RecipeDetail}
				options={{ title: 'Detalle de la Receta', tabBarButton: () => null }}
			/>
			<BottomTabs.Screen
				name="ListRecipeApp"
				component={RecipesApp}
				options={{ title: 'Listado de Receta de la app', tabBarButton: () => null }}
			/>
		</BottomTabs.Navigator>
	);
};
