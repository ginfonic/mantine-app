// Типы

// Тип комментариев дайджеста (старый)
export interface IDigestCommentAlt {
  id: string,
  articleId: string,
  author: string,
  date: Date,
  text: string
}
// Тип плюсов дайджеста (старый)
export interface IDigestPlus {
  id: string,
  value: number
}
// Тип минусов дайджеста (старый)
export interface IDigestMinus {
  id: string,
  value: number
}