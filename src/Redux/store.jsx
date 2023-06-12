import { configureStore } from "@reduxjs/toolkit";

//  api slices
import accountApiSlice from "./feature/API/accountApiSlice/accountApiSlice";

//  general  Slices

const store = configureStore({
  reducer: {
    [accountApiSlice.reducerPath]: accountApiSlice.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(accountApiSlice.middleware),
});

export default store;
