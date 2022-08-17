import { configureStore } from '@reduxjs/toolkit';

import qtsListReducer from './reducers/qtsList.reducer';

const store = configureStore({
  reducer: {
    qstReducer: qtsListReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
