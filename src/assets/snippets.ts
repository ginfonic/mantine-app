// Сниппеты
import {subMonths, compareAsc} from 'date-fns';
// Получает инициалы из имени
export const getInitials = (name: string): string => {
  return name.split(' ')
    .map(word => word.substring(0, 1))
    .filter((letter, index) => index < 2)
    .reverse().join('').toUpperCase()
}
// Проверяет новая ли статья (дата не старше месяца назад)
export const isArticleNew = (date: string): boolean => {
  // return new Date(date) >= subMonths(new Date(), 1);
  return compareAsc(new Date(date), subMonths(new Date(), 1)) !== -1;
}
// Выделяет ссылку в тексте: от одного до трех слов в зависимости от их длины
export const separateAnchor = (text: string): [anchor: string, rest: string] => {
  const words: string[] = text.split(' ');
  for (let index = 0; words.length - 1; index++)
    if((words[index].length >= 3) || (index === 2))
      return [words.slice(0, index + 1).join(' '), words.slice(index + 1).join(' ')];
  return ['', text];
}