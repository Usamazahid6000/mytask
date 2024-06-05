import { configureStore } from "@reduxjs/toolkit";
import usersReducers from "./Reducers/Users";

const store = configureStore({
  reducer: {
    user: usersReducers,
  },
});

export default store;
