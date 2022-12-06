// Стор Redux
import { configureStore } from '@reduxjs/toolkit';
import digestCommentReducer from './digest-comment-slice';
import digestPlusReducer from './digest-plus-slice';
import digestMinusReducer from './digest-minus-slice';

// Стор Redux
export const store = configureStore({
  reducer: {
    digestComments: digestCommentReducer,
    digestPlus: digestPlusReducer,
    digestMinus: digestMinusReducer
  }
});
export default store;

// Типы стора для использования в хуках
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;