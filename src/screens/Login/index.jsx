import { View, Text, ImageBackground, Alert } from 'react-native';
import { useCallback, useEffect, useReducer, useState } from 'react';
import styles from './styles';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import { useFonts } from 'expo-font';
import Button from '../../components/Button';
import colors from '../../constants/colors';

import { useSelector, useDispatch } from 'react-redux';
import { signIn, singUp } from '../../store/actions/auth.action';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
	if (action.type === FORM_INPUT_UPDATE) {
		const updatedValues = {
			...state.inputValues,
			[action.input]: action.value,
		};
		const updatedValidities = {
			...state.inputValidities,
			[action.input]: action.isValid,
		};
		let updatedFormIsValid = true;
		for (const key in updatedValidities) {
			updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
		}
		return {
			inputValues: updatedValues,
			inputValidities: updatedValidities,
			formIsValid: updatedFormIsValid,
		};
	}
	return state;
};

const Login = ({ navigation }) => {
	const [loaded] = useFonts({
		'Sigmar-Regular': require('../../assets/fonts/Sigmar-Regular.ttf'),
	});
	const dispatch = useDispatch();
	const [error, setError] = useState(null);

	useEffect(() => {
		if (error) {
			Alert.alert('A ocurrido un error', error, [{ text: 'ok' }]);
		}
	}, [error]);

	const [formState, dispatchFormState] = useReducer(formReducer, {
		inputValues: {
			email: '',
			password: '',
		},
		inputValidities: {
			email: false,
			password: false,
		},
		formIsValid: false,
	});

	const onInputChangeHandler = useCallback(
		(inputIdentifier, inputValue, inputValidity) => {
			dispatchFormState({
				type: FORM_INPUT_UPDATE,
				value: inputValue,
				isValid: inputValidity,
				input: inputIdentifier,
			});
		},
		[dispatchFormState]
	);

	const handleSingUp = () => {
		if (formState.formIsValid) {
			dispatch(singUp(formState.inputValues.email, formState.inputValues.password));
		} else {
			Alert.alert('Formulario invalido', 'Ingrese email y password validos', [{ text: 'OK' }]);
		}
	};
	const handleSingIn = () => {
		if (formState.formIsValid) {
			dispatch(signIn(formState.inputValues.email, formState.inputValues.password));
		} else {
			Alert.alert('Formulario invalido', 'Ingrese email y password validos', [{ text: 'OK' }]);
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
						id="email"
						label="Email"
						keyboardType="email-address"
						autoCorrect={false}
						email
						required
						autoCapitalize="none"
						errorText={'Por Favor ingrese un email valido'}
						initialValue=""
						onInputChange={onInputChangeHandler}
					/>

					<Input
						id="password"
						label="Password"
						keyboardType="default"
						required
						password
						secureTextEntry
						autoCapitalize="none"
						errorText="Por favor ingrese una contrasena valida"
						onInputChange={onInputChangeHandler}
						initialValue=""
					/>
					<View style={styles.boxButton}>
						<Button
							title={'Registrarse'}
							buttonStyle={styles.buttonSingUp}
							textStyle={{ color: colors.white }}
							actionPress={() => handleSingUp()}
						/>
						<Button
							title={'Ingresar'}
							buttonStyle={styles.buttonLogin}
							textStyle={{ color: colors.white }}
							actionPress={() => handleSingIn()}
						/>
					</View>
				</Card>
			</ImageBackground>
		</View>
	);
};

export default Login;
