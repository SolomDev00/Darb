import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./token/token";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    token: tokenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
