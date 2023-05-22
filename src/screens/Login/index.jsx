import { View, Text } from 'react-native';
import { useState } from 'react';
import styles from './styles';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import { useFonts } from 'expo-font';
import Button from '../../components/Button';
import colors from '../../constants/colors';
const Login = ({ navigation }) => {
	const [loaded] = useFonts({
		'Sigmar-Regular': require('../../assets/fonts/Sigmar-Regular.ttf'),
	});
	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');

	const handleUser = (user) => {
		setUser(user);
	};
	const handlePassword = (pass) => {
		setPassword(pass);
	};
	const handleCheckLogin = () => {
		if (user == 'prueba' && password == '1234') {
			navigation.navigate('BottomTabsNavigator', {
				user: user,
			});
			setUser('');
			setPassword('');
		} else {
			null;
		}
	};

	if (!loaded) {
		return null;
	}
	return (
		<View style={styles.container}>
			<Card>
				<Logo />
				<Text style={styles.titleLogin}>INICIAR SESIÓN</Text>
				<Input blurOnSubmit autoCapitalize="none" autoCorrect={false} keyboardType="email-address" placeholder="escribe prueba" value={user} onChangeText={handleUser} />
				<Input
					blurOnSubmit
					autoCapitalize="none"
					autoCorrect={false}
					keyboardType="default"
					placeholder="escribe 1234"
					otherStyles={{ marginTop: 20 }}
					value={password}
					onChangeText={handlePassword}
				/>
				<Button title={'Ingresar'} buttonStyle={styles.buttonLogin} textStyle={{ color: colors.white }} actionPress={() => handleCheckLogin()} />
			</Card>
		</View>
	);
};

export default Login;
