import {USERINFO} from '../constants';

const initState = {
  userInfo: {},
};

const userInfoReducer = (state = initState, action) => {
  switch (action.type) {
    case USERINFO:
      return {
        ...state,
        userInfo: action.payload.userInfo,
      };
    default:
      return state;
  }
};

export default userInfoReducer;
