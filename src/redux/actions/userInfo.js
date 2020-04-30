import {USERINFO} from '../constants';

export const setUserInfo = payload => {
  const newPayload = payload;
  return {
    type: USERINFO,
    payload: {
      userInfo: newPayload,
    },
  };
};
