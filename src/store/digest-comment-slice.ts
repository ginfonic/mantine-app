// Слайс стора Redux для комментариев дайджеста
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

//Тип комментариев дайджеста
export interface IDigestComment {
  id: string,
  cardId: string,
  author: string,
  date: Date,
  text: string
}
// Начальное состояние слайса комментариев дайджеста
const initialState: { comments: IDigestComment[] } = {comments: []}

const digestCommentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    // Редюсер добавления коментария
    addComment: (state, action: PayloadAction<IDigestComment>) => {
      state.comments.push(action.payload);
    },
    // Редюсер удаления комментария
    removeComment: (state, action: PayloadAction<string>) => {
      state.comments = state.comments.filter((comment) => comment.id !== action.payload)
    }
  }
})

// Экспортирует редюсеры с экшенами
export const {addComment, removeComment} = digestCommentSlice.actions;
export default digestCommentSlice.reducer;