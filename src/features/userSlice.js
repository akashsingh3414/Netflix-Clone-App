import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    uid: null,
    email: null,
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.isAuthenticated = true; 
      console.log('User logged in:', state); 
    },
    logout: (state) => {
      state.uid = null;
      state.email = null;
      state.isAuthenticated = false; 
      console.log('User logged out:', state); 
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;

export default userSlice.reducer;
