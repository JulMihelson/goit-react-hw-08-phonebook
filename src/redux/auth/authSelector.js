export const selectIsAuth = state => {
  return state.auth.isAuth;
};

export const selectToken = state => {
  return state.auth.token;
};
export const selectUser = state => {
  return state.auth.user;
};
