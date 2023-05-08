import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import colors from './src/constants/colors';
import Home from './src/screens/Home';
import { useState } from 'react';

export default function App() {
	const [login, setLogin] = useState(false);
	const confirmLogin = (confirm) => {
		setLogin(confirm);
	};

	let content = <Login sessionConfirm={confirmLogin} />;
	if (login) {
		content = <Home />;
	}

	return <View style={styles.container}>{content}</View>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
