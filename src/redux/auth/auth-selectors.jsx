const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUser = state => state.auth.user;
const selectIsRefreshing = state => state.auth.isRefreshing;

const authSelectors = {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
};
export default authSelectors;

// export const selectIsLoggedIn = state => state.auth.isLoggedIn;

// export const selectUser = state => state.auth.user;

// export const selectIsRefreshing = state => state.auth.isRefreshing;
