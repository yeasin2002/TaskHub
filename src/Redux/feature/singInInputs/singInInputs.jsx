import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAvatar: "",
  firstName: "",
  lastName: "",
  userMail: "",
  userPassword: "",
  confirmPassword: "",
};

const singInInputsSlice = createSlice({
  name: "singInInputs",
  initialState,
  reducers: {
    setSingInInputs: (state, action) => {
      state.userAvatar = action.payload.userAvatar;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userMail = action.payload.userMail;
      state.userPassword = action.payload.userPassword;
      state.confirmPassword = action.payload.confirmPassword;
    },
  },
});

export const { setSingInInputs } = singInInputsSlice.actions;
export default singInInputsSlice;
