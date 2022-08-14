import { createSlice } from '@reduxjs/toolkit';

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    id: ''
  },
  reducers: {
    addAuth: (state, action) => {
        state.id == action.payload.id ;
    }
    ,
    removeAuth: state => {
        state.id == ''
    }
  }
});

export const { addAuth, removeAuth } = authenticationSlice.actions;

export default authenticationSlice.reducer;