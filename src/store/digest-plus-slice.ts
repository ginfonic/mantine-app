// Слайс стора Redux для плюсов дайджеста
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
// Тип плюса дайджеста
import {IDigestPlus} from "../types";

// Начальное состояние слайса плюсов дайджеста
const initialState: { pluses: IDigestPlus[] } = {pluses: []}

const digestPlusSlice = createSlice({
  name: 'pluses',
  initialState,
  reducers: {
    // Редюсер добавления плюса
    addPlus: (state, action: PayloadAction<IDigestPlus>) => {
      let i = state.pluses.indexOf(action.payload);
      if(i === -1) {
        state.pluses.push(action.payload)
      }
      else {
        state.pluses[i].value++
      }
    }
  }
})

// Экспортирует редюсеры с экшенами
export const {addPlus} = digestPlusSlice.actions;
// Импортируется в сторе как digestCommentReducer
export default digestPlusSlice.reducer;