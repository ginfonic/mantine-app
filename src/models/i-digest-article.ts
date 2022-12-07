// Тип статьи дайджеста
import {IDigestComment} from "./i-digest-comment";
import {IDigestVote} from './i-digest-vote'
export interface IDigestArticle {
  id: string,
  title: string,
  text: string,
  link: string,
  date: Date,
  picture: string,
  pros: IDigestVote[],
  cons: IDigestVote[],
  comments: IDigestComment[]
}