import { createSlice } from '@reduxjs/toolkit';

export const gameHistorySlice = createSlice({
  name: 'gameHistory',
  initialState: {
    gameId: []
  },
  reducers: {
    // menambahkan Game ID kedalam array gameId
    addGameHistory: (state, action) => {
        state.gameId.push(action.payload)
    }
    ,
    // menghilangkan Game Id
    removeGameHistory: state => {
        state.gameId = []
    }
  }
});

export const { addGameHistory, removeGameHistory } = gameHistorySlice.actions;

export default gameHistorySlice.reducer;