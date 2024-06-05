import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    AddUser(state, action) {
      state.push(action.payload);
    },
    DeleteUser(action) {
      return action.payload;
    },
    EditUser(action) {
      return action.payload;
    },
  },
});

export const { AddUser, DeleteUser, EditUser } = UserSlice.actions;

export default UserSlice.reducer;
