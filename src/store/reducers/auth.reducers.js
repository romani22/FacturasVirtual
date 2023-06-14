import { SINGIN, SINGUP } from '../actions/auth.action';

const initialState = {
	token: null,
	userId: null,
	register: null,
};

const AuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case SINGUP:
			return { ...state, token: action.token, userId: action.userId };
		case SINGIN:
			return { ...state, token: action.token, userId: action.userId, register: action.register };
		default:
			return state;
	}
};
export default AuthReducer;
