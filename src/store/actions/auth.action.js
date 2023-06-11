import { URL_AUTH_SINGUP } from '../../constants/dataBase';

export const SINGUP = 'SINGUP';
export const singUp = (email, password) => {
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
