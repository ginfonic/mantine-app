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
// Добавляет ссылку в текст
// export const addlink = (text: string, link: string) => {
//   const words: string[] = text.split(' ');
//   const linkOpenTag = `<a {link}>`;
//   const linkCloseTag = '</a>';
//   return 1
// }