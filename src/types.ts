// Типы

// Тип комментариев дайджеста
export interface IDigestComment {
  id: string,
  cardId: string,
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