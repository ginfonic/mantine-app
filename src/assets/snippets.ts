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
// Выделяет ссылку в тексте: до трех слов в зависимости от их длины
export const separateAnchor = (text: string): [anchor: string, rest: string] => {
  // Делит строку статьи на слова
  const words: string[] = text.split(' ');
  // Для первых максимум трех слов в статье ищет слово длиной не меньше трех символов
  let index = 0;
  for (index; (index < 2) && (index < words.length); index++)
    // Прекращает, когда его находит
    if(words[index].length >= 3) break;
  // Возвращает два значения. Якорь: до трех первых слов. Остаток: оставшиеся слова в статье
  return [words.slice(0, index + 1).join(' '), words.slice(index + 1).join(' ')];
}