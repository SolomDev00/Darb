import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IToken } from "../../interface";
import { RootState } from "../store";

interface TokenState {
  token: IToken | null;
}

const initialState: TokenState = {
  token: null,
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<IToken>) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = tokenSlice.actions;
export const tokenSelector = (state: RootState) => state.token;
export default tokenSlice.reducer;
