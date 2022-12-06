// Типы

// Тип комментариев дайджеста
export interface IDigestComment {
  id: string,
  articleId: string,
  author: string,
  date: Date,
  text: string
}
// Тип плюсов дайджеста
export interface IDigestPlus {
  id: string,
  value: number
}
// Тип минусов дайджеста
export interface IDigestMinus {
  id: string,
  value: number
}

// Тип статьи дайджеста
export interface IDigestArticle {
  id: string,
  title: string,
  text: string,
  link: string,
  date: Date,
  picture: string,
  pros: number,
  cons: number,
  comments: IDigestComment[]
}