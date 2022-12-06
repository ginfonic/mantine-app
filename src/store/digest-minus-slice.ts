// Слайс стора Redux для плюсов дайджеста
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
// Тип плюса дайджеста
import {IDigestMinus} from "../types";

// Начальное состояние слайса плюсов дайджеста
const initialState: { minuses: IDigestMinus[] } = {minuses: []}

const digestMinusSlice = createSlice({
  name: 'minuses',
  initialState,
  reducers: {
    // Редюсер добавления плюса
    addMinus: (state, action: PayloadAction<IDigestMinus>) => {
      let i = state.minuses.indexOf(action.payload);
      if(i === -1) {
        state.minuses.push(action.payload)
      }
      else {
        state.minuses[i].value++
      }
    }
  }
})

// Экспортирует редюсеры с экшенами
export const {addMinus} = digestMinusSlice.actions;
// Импортируется в сторе как digestCommentReducer
export default digestMinusSlice.reducer;