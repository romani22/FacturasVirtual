import { SINGUP } from '../actions/auth.action';

const initialState = {
	token: null,
	userId: null,
};

const AuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case SINGUP:
			return { ...state, token: action.token, userId: action.userId };
		default:
			return state;
	}
};

export default AuthReducer;
