import USE_TYPES from "./Use.types";

export const setUser = (user) => ({
  type: USE_TYPES.SET_USER,
  payload: user,
});

export const setSearchQuery = (queryString) => ({
  type: USE_TYPES.SET_USER,
  payload: queryString,
});
