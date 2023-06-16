import { configureStore } from "@reduxjs/toolkit";

//  api slices
import accountApiSlice from "./feature/API/accountApiSlice/accountApiSlice";
import extraApiSlice from "./feature/API/extraApiSlice/extraApiSlice";
import taskApiSlice from "./feature/API/taskApiSlice/taskApiSlice";
import userApiSlice from "./feature/API/userApiSlice/userApiSlice";

//  general  Slices
import singInInputsSlice from "./feature/singInInputs/singInInputs";

const store = configureStore({
  reducer: {
    [accountApiSlice.reducerPath]: accountApiSlice.reducer,
    [extraApiSlice.reducerPath]: extraApiSlice.reducer,
    [taskApiSlice.reducerPath]: taskApiSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    // general slices
    singInInputsSlice: singInInputsSlice.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(
      accountApiSlice.middleware,
      extraApiSlice.middleware,
      taskApiSlice.middleware,
      userApiSlice.middleware
    ),
});

export default store;
