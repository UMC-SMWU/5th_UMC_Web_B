import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
  },
  reducers: {
    loginUser: (state, action) => {
      state.name = action.payload.name;
      return state;
    },
  },
});

export const { loginUser } = userSlice.actions;
export default userSlice.reducer;
