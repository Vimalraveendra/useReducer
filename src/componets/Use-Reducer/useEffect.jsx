import React, { useEffect, useReducer } from "react";
import Card from "../Card/Card";

import { userReducer, initialState } from "./Use.reducer";

import { setUser, setSearchQuery } from "./Use.actions";

// const initialState = {
//   user: null,
//   searchQuery: "Bret",
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "SET_USER":
//       return {
//         ...state,
//         user: action.payload
//       };
//     case "SET_SEARCH_QUERY":
//       return {
//         ...state,
//         searchQuery: action.payload
//       };
//     default:
//       return state;
//   }
// };

// const setUser = (user) => ({
//   type: USE_TYPES.SET_USER,
//   payload: user,
// });

// const setSearchQuery = (queryString) => ({
//   type: USE_TYPES.SET_USER,
//   payload: queryString,
// });

const UseEffect = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const { user, searchQuery } = state;

  useEffect(() => {
    if (searchQuery.length > 0) {
      const fetchFunc = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
        );
        const data = await response.json();
        dispatch(setUser(data[0]));
      };
      fetchFunc();
    }
  }, [searchQuery]);

  return (
    <Card>
      <input
        type="text"
        value={searchQuery}
        onChange={(event) => dispatch(setSearchQuery(event.target.value))}
      />
      {user ? (
        <div>
          <h3>{user.name}</h3>
          <h3>{user.username}</h3>
          <h3>{user.email}</h3>
        </div>
      ) : (
        <p>No user found</p>
      )}
    </Card>
  );
};

export default UseEffect;
