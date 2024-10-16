import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    uid: null,
    email: null,
  },
  reducers: {
    resetUser: (state) => {
      state.uid = null;
      state.email = null;
    },
    setUser: (state, action) => {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      console.log('User set:', state); 
    },
    logout: (state) => {
      state.uid = null;
      state.email = null;
      console.log('User logged out:', state); 
    },
  },
});

export const { setUser, logout, resetUser } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
