import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import styles from './styles';
import RecipesUser from '../../screens/RecipesUser';
import Home from '../../screens/Home';
import Invoice from '../../screens/Invoice';
import NewRecipe from '../../screens/NewRecipe';
import colors from '../../constants/colors';
import BackgroundImage from '../../components/BackgroundImage';
import RecipeDetail from '../../screens/RecipeDetail';
const BottomTabs = createBottomTabNavigator();

export default BottomTabsNavigator = () => {
	return (
		<BackgroundImage>
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
									name="list"
									size={24}
									style={styles.shadowIcon}
									color={colors.white}
								/>
							</View>
						),
					}}
				/>
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
					name="Search"
					component={Invoice}
					options={{
						tabBarIcon: () => (
							<View style={styles.Button}>
								<FontAwesome
									name="gears"
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
			</BottomTabs.Navigator>
		</BackgroundImage>
	);
};
