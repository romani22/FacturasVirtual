import { View, Text, ImageBackground } from 'react-native';
import { useEffect, useState } from 'react';
import styles from './styles';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import { useFonts } from 'expo-font';
import Button from '../../components/Button';
import colors from '../../constants/colors';

import { useSelector, useDispatch } from 'react-redux';
import { LoginUser } from '../../store/actions/user.action';

const Login = ({ navigation }) => {
	const logeo = useSelector((state) => state.auth.token);

	const dispatch = useDispatch();

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

	useEffect(() => {
		dispatch(LoginUser(user, password));
	}, [user, password]);

	const handleCheckLogin = () => {
		if (logeo) {
			navigation.navigate('BottomTabsNavigator');
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
			<ImageBackground
				source={require('../../assets/img/comidaFondoNegro.jpg')}
				style={styles.imgFondo}
			>
				<Card customeStyle={styles.CardLogin}>
					{/* <Logo /> */}
					<Text style={styles.titleLogin}>INICIAR SESIÓN</Text>
					<Input
						blurOnSubmit
						autoCapitalize="none"
						autoCorrect={false}
						keyboardType="email-address"
						placeholder="Escribe tu email"
						value={user}
						onChangeText={handleUser}
					/>
					<Input
						blurOnSubmit
						autoCapitalize="none"
						autoCorrect={false}
						keyboardType="default"
						placeholder="Escribe tu contraseña"
						otherStyles={{ marginTop: 20 }}
						value={password}
						onChangeText={handlePassword}
					/>
					<View style={styles.boxButton}>
						<Button
							title={'Registrarse'}
							buttonStyle={styles.buttonSingUp}
							textStyle={{ color: colors.white }}
							actionPress={() => handleCheckLogin()}
						/>
						<Button
							title={'Ingresar'}
							buttonStyle={styles.buttonLogin}
							textStyle={{ color: colors.white }}
							actionPress={() => handleCheckLogin()}
						/>
					</View>
				</Card>
			</ImageBackground>
		</View>
	);
};

export default Login;
