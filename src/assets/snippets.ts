// Сниппеты

// Получает инициалы из имени
export const getInitials = (name: string) => {
  return name.split(' ')
    .map(word => word.substring(0, 1))
    .filter((letter, index) => index < 2)
    .reverse().join('').toUpperCase()
}