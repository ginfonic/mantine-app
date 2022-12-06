// Стор Redux
import { configureStore } from '@reduxjs/toolkit';
import digestCommentReducer from './digest-comment-slice';

// Стор Redux
export const store = configureStore({
  reducer: {
    digestComment: digestCommentReducer
  }
});
export default store;

// Типы стора для использования в хуках
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;