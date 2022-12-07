// Слайс стора Redux для пользователей
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';
// Тип пользователя
import {IUser} from "../../models/i-user";

// Тип начального состояния слайса пользователей
interface IUserState {
  user: IUser
}

// Начальное состояние слайса пользователей
const initialState: IUserState = {user: {id: uuidv4(), name: 'Фокин Евгений Александрович'}}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Редюсер установки пользователя
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    }
  }
})

// Экспортирует редюсеры с экшенами
export const {setUser} = userSlice.actions;
export default userSlice.reducer;