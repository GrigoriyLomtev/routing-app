import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  name: string | null;
}

const setAuth = (value: boolean, name: string | null) => {
  localStorage.setItem("isAuthenticated", `${value}`);
  name
    ? localStorage.setItem("name", `${name}`)
    : localStorage.removeItem("name");
};

const initialState: AuthState = {
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
  name: localStorage.getItem("name") ? localStorage.getItem("name") : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ name: string }>) => {
      state.isAuthenticated = true;
      state.name = action.payload.name;
      setAuth(true, action.payload.name);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.name = "";
      setAuth(false, null);
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
