import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IDigestComment {
  id: string,
  cardId: string,
  author: string,
  date: Date,
  text: string
}

const initialState: { comments: IDigestComment[] } = {comments: []}

const digestCommentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<IDigestComment>) => {
      state.comments.push(action.payload);
    },
    removeComment: (state, action: PayloadAction<string>) => {
      state.comments = state.comments.filter((comment) => comment.id !== action.payload)
    }
  }
})

export const {addComment, removeComment} = digestCommentSlice.actions;
export default digestCommentSlice.reducer;