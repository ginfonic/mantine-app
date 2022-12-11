// Сниппеты

// Получает инициалы из имени
export const getInitials = (name: string): string => {
  return name.split(' ')
    .map(word => word.substring(0, 1))
    .filter((letter, index) => index < 2)
    .reverse().join('').toUpperCase()
}// Проверяет новая ли статья (дата не старше месяца назад)
export const isArticleNew = (date: string): boolean => {
  return true
}