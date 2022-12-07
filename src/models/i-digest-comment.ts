// Тип комментариев дайджеста
import {IUser} from "./i-user";

export interface IDigestComment {
  id: string,
  creator: IUser,
  date: string,
  text: string
}