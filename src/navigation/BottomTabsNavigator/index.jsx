import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';
import Menu from '../../screens/Menu';
import Home from '../../screens/Home';
import Invoice from '../../screens/Invoice';
import Notification from '../../screens/Notification';
import Turn from '../../screens/Turn';
import colors from '../../constants/colors';
const BottomTabs = createBottomTabNavigator();

export default BottomTabsNavigator = () => {
	return (
		<BottomTabs.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: styles.tabBar }}>
			<BottomTabs.Screen
				name="Menu"
				component={Menu}
				options={{
					tabBarIcon: () => (
						<View style={styles.Button}>
							<FontAwesome5 name="list" size={24} style={styles.shadowIcon} color={colors.white} />
							{/* <Text style={styles.textButton}>Menu</Text> */}
						</View>
					),
				}}
			/>
			<BottomTabs.Screen
				name="Notification"
				component={Notification}
				options={{
					tabBarIcon: () => (
						<View style={styles.Button}>
							<FontAwesome5 name="bell" size={24} style={styles.shadowIcon} color={colors.white} />
							{/* <Text style={styles.textButton}>Notification</Text> */}
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
							<MaterialCommunityIcons name="home-outline" size={27} style={styles.shadowIcon} color={colors.white} />
							{/* <Text style={styles.textButton}>Home</Text> */}
						</View>
					),
				}}
			/>
			<BottomTabs.Screen
				name="Invoice"
				component={Invoice}
				options={{
					tabBarIcon: () => (
						<View style={styles.Button}>
							<FontAwesome5 name="file-alt" size={24} style={styles.shadowIcon} color={colors.white} />
							{/* <Text style={styles.textButton}>Invoice</Text> */}
						</View>
					),
				}}
			/>
			<BottomTabs.Screen
				name="Turn"
				component={Turn}
				options={{
					tabBarIcon: () => (
						<View style={styles.Button}>
							<FontAwesome5 name="calendar-alt" size={24} style={styles.shadowIcon} color={colors.white} />
							{/* <Text style={styles.textButton}>Turn</Text> */}
						</View>
					),
				}}
			/>
		</BottomTabs.Navigator>
	);
};
