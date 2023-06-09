import { configureStore } from "@reduxjs/toolkit";

//  api slices
import accountApiSlice from "./feature/API/accountsApiSlice";
import userApiSlice from "./feature/API/userApiSlice";

//  general  Slices

const store = configureStore({
  reducer: {
    [accountApiSlice.reducerPath]: accountApiSlice.reducer,
    [accountApiSlice.reducerPath]: userApiSlice.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(
      accountApiSlice.middleware,
      userApiSlice.middleware
    ),
});

export default store;
