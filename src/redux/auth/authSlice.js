import { createSlice } from '@reduxjs/toolkit';
import { register } from './authOperations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: bilder => {
    bilder
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => state);
  },
});

export const authReducer = authSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import { register, logIn, logOut, refreshUser } from './authOperations';

// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   error: null,
//   isLoggedIn: false,
//   isRefreshing: false,
// };

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [register.fulfilled](state, { payload }) {
//       state.user = payload.user;
//       state.token = payload.token;
//       state.isLoggedIn = true;
//     },
//     [register.rejected](state, { payload }) {
//       state.error = payload;
//     },
//     [logIn.fulfilled](state, { payload }) {
//       state.user = payload.user;
//       state.token = payload.token;
//       state.isLoggedIn = true;
//     },
//     [logIn.rejected](state, { payload }) {
//       state.error = payload;
//     },
//     [logOut.fulfilled](state) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//     [logOut.rejected](state, { payload }) {
//       state.error = payload;
//     },
//     [refreshUser.pending](state) {
//       state.isRefreshing = true;
//     },
//     [refreshUser.fulfilled](state, { payload }) {
//       state.user = payload;
//       state.isLoggedIn = true;
//       state.isRefreshing = false;
//     },
//     [refreshUser.rejected](state) {
//       state.isRefreshing = false;
//     },
//   },
// });

// export const authReducer = authSlice.reducer;
