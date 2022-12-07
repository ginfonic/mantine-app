// Стор Redux
import { configureStore } from '@reduxjs/toolkit';
import digestArticleReducer from './reducers/digest-article-slice';
import digestCommentReducer from './reducers/digest-comment-slice';
import digestPlusReducer from './reducers/digest-plus-slice';
import digestMinusReducer from './reducers/digest-minus-slice';

// Стор Redux
export const store = configureStore({
  reducer: {
    digestArticles: digestArticleReducer,
    digestComments: digestCommentReducer,
    digestPlus: digestPlusReducer,
    digestMinus: digestMinusReducer
  }
});
export default store;

// Типы стора для использования в хуках
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;