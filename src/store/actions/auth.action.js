import { Alert } from 'react-native';
import { URL_AUTH_SINGUP } from '../../constants/dataBase';
import { URL_AUTH_SINGIN } from '../../constants/dataBase';

export const SINGUP = 'SINGUP';
export const SINGIN = 'SINGIN';

export const singUp = (email, password) => {
	console.log(email, password);
	return async (dispatch) => {
		try {
			const response = await fetch(URL_AUTH_SINGUP, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
					password,
					returnSecureToken: true,
				}),
			});
			const data = await response.json();
			dispatch({
				type: SINGUP,
				token: data.idToken,
				userId: data.localId,
			});
		} catch (error) {
			console.log(error);
		}
	};
};
export const signIn = (email, password) => {
	return async (dispatch) => {
		try {
			const response = await fetch(URL_AUTH_SINGIN, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
					password,
					returnSecureToken: true,
				}),
			});
			const data = await response.json();
			if (data.error) {
				Alert.alert('Atención!', 'El email y/o la contraseña no es correcta', [{ text: 'OK' }]);
				return;
			}
			dispatch({
				type: SINGIN,
				token: data.idToken,
				userId: data.localId,
				register: data.registered,
			});
		} catch (error) {
			console.log(error);
		}
	};
};
