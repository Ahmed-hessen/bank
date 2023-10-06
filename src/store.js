//Any redux consists of
//1) initialState -  2)reducer function - 3)Action creators

import accountReducer from "./features/accounts/accountSlice-reduxtoolkit";
import customerReducer from "./features/customers/customerSlice-toolkit";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
