import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = response.json();
  return users;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userDeleted(state, action) {
      return state.filter((user) => user.id !== action.payload);
    },
    addUser(state, action) {
      return state.concat(action.payload);
    },
  },
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export const { userDeleted, addUser } = usersSlice.actions;

export const selectAllUsers = (state) => state.users;
export const selectUserById = (state, userId) =>
  state.users.find((user) => user.id === userId);

export default usersSlice.reducer;
