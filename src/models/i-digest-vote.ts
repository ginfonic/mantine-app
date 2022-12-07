// Тип голосования дайджеста
import {IUser} from "./i-user";

export interface IDigestVote {
  id: string,
  creator: IUser,
  date: string
}