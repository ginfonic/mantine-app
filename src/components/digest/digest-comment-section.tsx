// Компонент секции комментариев дайджеста
import {FC, useState} from "react";
import {ActionIcon, Textarea} from "@mantine/core";
import {IconCheck} from "@tabler/icons";
import {v4 as uuidv4} from 'uuid';

// Тип статьи дайджеста
import {IDigestArticle} from "../../models/i-digest-article";
// Тип комментария дайджеста
import {IDigestComment} from '../../models/i-digest-comment';
// Хуки добавления и получения данных из стора
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
// Редюсер добавления комментария
import {addComment} from "../../store/reducers/digest-article-slice";
// Компонент комментария дайджеста
import DigestCommentItem from "./digest-comment-item";

// Тип пропсов секции комментариев дайджеста
interface DigestCommentSectionProps {
  article: IDigestArticle
}

// Компонент
const DigestCommentSection: FC<DigestCommentSectionProps> = ({article}) => {
  // Получение из стора
  // Получает текущего пользователя из стора
  const user = useAppSelector((state) =>
    state.currentUser.user
  );
  // Получает комментарии из стора
  const comments = useAppSelector((state) =>
    state.digestArticles.articles
  )?.find(item => item.id === article.id
  )?.comments;

  // Отправка в стор
  // Стейт текста комментария
  const [commentValue, setCommentValue] = useState<string>('');
  // Функция отправки данных в стор
  const dispatch = useAppDispatch();
  // Обработчик добавления комментария
  const addCommentHandler = () => {
    // Заполняет комментарий
    const comment: IDigestComment = {
      // Генерирует айди комментария
      id: uuidv4(),
      // Создатель
      creator: {id: user.id, name: user.name},
      // Текущая дата
      date: new Date().toLocaleString(),
      // Введенный текст комментария
      text: commentValue
    }
    // Если комментарий содержит что-то
    if (commentValue) {
      // Добавляет комментарий в стор
      dispatch(addComment([article, comment]));
      // Чистит форму
      setCommentValue('');
    }
  }

  return (
    <>
      {/* Форма ввода текста */}
      <Textarea
        value={commentValue}
        placeholder="Ваш комментарий"
        mb={5}
        onChange={(event) => setCommentValue(event.currentTarget.value)}
        rightSection={
          // Кнопка подтверждения ввода
          <ActionIcon
            size="xs"
            variant="transparent"
            sx={{alignItems: "flex-end"}}
            px={0} mx={0} py={5}
            onClick={() => {
              addCommentHandler();
            }}
          >
            <IconCheck size={16} stroke={1.5}/>
          </ActionIcon>
        }
      />
      {/* Выводит комментарии */}
      {comments?.map((comment) => <DigestCommentItem article={article} comment={comment} key={uuidv4()}/>)}
    </>
  );
}
export default DigestCommentSection;