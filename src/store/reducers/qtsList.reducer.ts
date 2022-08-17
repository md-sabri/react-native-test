import { Action, createSlice } from '@reduxjs/toolkit';
import { QtsList } from '../../utils/qtsList';

const qtsSlice = createSlice({
  name: 'qts',
  initialState: {
    qtsList: QtsList,
    qtsStep: 1,
    isFinished: false,
    totalPoint: 0,
  },
  reducers: {
    nextQts: (state, actions) => {
      const isCorrect = actions.payload.correct;
      if (isCorrect) {
        state.totalPoint += 10;
      }
      if (state.qtsStep >= state.qtsList.length) {
        state.isFinished = true;
        return;
      }

      state.qtsStep += 1;
    },
    restart: (state) => {
      state.isFinished = false;
      state.qtsStep = 1;
      state.totalPoint = 0;
    },
  },
});

export const { nextQts, restart } = qtsSlice.actions;

export default qtsSlice.reducer;
