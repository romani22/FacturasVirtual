export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const LoginUser = (email, pass) => ({
	type: LOGIN_USER,
	email: email,
	pass: pass,
});

export const LogoutUser = (email, pass) => ({
	type: LOGOUT_USER,
	email: email,
	pass: pass,
});
