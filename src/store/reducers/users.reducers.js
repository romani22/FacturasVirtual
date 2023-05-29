import { USERS } from '../../data/users';
import { LOGIN_USER, LOGOUT_USER } from '../actions/user.action';

const initialState = {
	users: USERS,
	selected: null,
};

const UserReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_USER:
			const IndexUser = state.users.findIndex(
				(user) => user.email === action.email && user.pass === action.pass
			);
			if (IndexUser === -1) return state;
			return { ...state, selected: state.users[IndexUser] };
		default:
			return state;
	}
};

export default UserReducer;
