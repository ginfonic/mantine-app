import { configureStore } from '@reduxjs/toolkit';
import digestCommentSlice from './digest-comment-slice';

export const store = configureStore({
  reducer: {
    digestComment: digestCommentSlice
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;