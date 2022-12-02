import { createSlice } from "@reduxjs/toolkit";

export interface DigestComment {
  id: string,
  articleId: string,
  commentId: string,
  author: string,
  dateTime: Date,
  text: string
}

const initialState: { comments: DigestComment[] } = { comments: [] }

export const digestCommentSlice = createSlice({
  name: 'digestComments',
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
    removeComment: (state, action) => {
      state.comments = state.comments.filter((comment) => comment.id !== action.payload)
    }
  }
})

export const { addComment, removeComment } = digestCommentSlice.actions;
export default digestCommentSlice.reducer;