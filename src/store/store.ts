import { configureStore } from '@reduxjs/toolkit';
import digestCommentSlice from '../features/digestCommentSlice';

export const store = configureStore({
  reducer: {
    digestComment: digestCommentSlice
  }
})