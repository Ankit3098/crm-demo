import { configureStore } from "@reduxjs/toolkit";
import { reducer as formReducer } from "redux-form";
import usersReducer from "./usersSlice";
export default configureStore({
  reducer: {
    users: usersReducer,
    form: formReducer,
  },
});
