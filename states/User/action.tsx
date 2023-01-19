const TypeAction = {
  SET_USER_LOGIN: 'SET_USER_LOGIN',
};

function saveAccessToken(token: string) {
  localStorage.setItem('accessToken', token);
}

function getAccessToken() {
  return localStorage.getItem('accessToken');
}

function saveUserLogin(user: string) {
  localStorage.setItem('userLogin', JSON.stringify(user));
}

function getUserLogin() {
  return localStorage.getItem('userLogin');
}

function setUserLogin(data: any) {
  return {
    type: TypeAction.SET_USER_LOGIN,
    payload: {
      data,
    },
  };
}

export {
  TypeAction,
  saveAccessToken,
  getAccessToken,
  saveUserLogin,
  getUserLogin,
  setUserLogin,
};
