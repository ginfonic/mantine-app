// Слайс стора Redux для комментариев дайджеста
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
// Тип комментариев дайджеста
import {IDigestCommentAlt} from '../../models/types';


// Начальное состояние слайса комментариев дайджеста
const initialState: { comments: IDigestCommentAlt[] } = {comments: []}

const digestCommentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    // Редюсер добавления коментария
    addComment: (state, action: PayloadAction<IDigestCommentAlt>) => {
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
// Импортируется в сторе как digestCommentReducer
export default digestCommentSlice.reducer;