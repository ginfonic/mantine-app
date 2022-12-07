// Стор Redux
import {configureStore} from '@reduxjs/toolkit';
import userReducer from './reducers/user-slice';
import digestArticleReducer from './reducers/digest-article-slice';

export const store = configureStore({
  reducer: {
    currentUser: userReducer,
    digestArticles: digestArticleReducer
  }
});
export default store;

// Типы стора для использования в хуках
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;