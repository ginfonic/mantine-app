// Тип статьи дайджеста
import {IDigestVote} from './i-digest-vote'
import {IDigestComment} from "./i-digest-comment";

export interface IDigestArticle {
  id: string,
  title: string,
  text: string,
  link: string,
  date: string,
  picture: string,
  pros: IDigestVote[],
  cons: IDigestVote[],
  comments: IDigestComment[],
  commentsOpened: boolean
}