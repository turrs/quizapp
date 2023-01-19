import { TypeAction } from './action';
import { UserLoginActionTypes } from './type.d';
const initialStateUsers: any = {};
function usersLoginReducer(
  usersLogin = initialStateUsers,
  action: UserLoginActionTypes,
) {
  switch (action.type) {
    case TypeAction.SET_USER_LOGIN:
      return action.payload.data;
    default:
      return usersLogin;
  }
}

export { usersLoginReducer };
