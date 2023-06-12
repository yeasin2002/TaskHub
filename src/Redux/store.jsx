import { configureStore } from "@reduxjs/toolkit";

//  api slices
import accountApiSlice from "./feature/API/accountApiSlice/accountApiSlice";
import extraApiSlice from "./feature/API/extraApiSlice/extraApiSlice";

//  general  Slices

const store = configureStore({
  reducer: {
    [accountApiSlice.reducerPath]: accountApiSlice.reducer,
    [extraApiSlice.reducerPath]: extraApiSlice.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(
      accountApiSlice.middleware,
      extraApiSlice.middleware
    ),
});

export default store;
