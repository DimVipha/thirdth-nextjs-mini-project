import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./feature/cart/cartSlice";
// import userProfileSlice from "./features/userProfile/userProfileSlice";
// import { ecommerceApi } from "./features/service/ecommerce";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];


