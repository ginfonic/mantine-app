// Компонент комментариев дайджеста
import {FC, useState} from "react";
import {Stack, Textarea, ActionIcon} from "@mantine/core";
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

// Тип пропсов комментариев дайджеста
interface DigestCommentsProps {
  article: IDigestArticle,
  commentsOpened: boolean
}

// Компонент
const DigestComments: FC<DigestCommentsProps> = ({article, commentsOpened}) => {
  // Получение из стора
  // Получает текущего пользователя из стора
  const user = useAppSelector((state) =>
    state.currentUser.user
  );

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
      date: new Date().toLocaleString('ru-RU'),
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
    <Stack hidden={!commentsOpened}>
      {/* Форма ввода текста */}
      <Textarea
        value={commentValue}
        placeholder="Ваш комментарий"
        mt={-5}
        onChange={(event) =>
          setCommentValue(event.currentTarget.value)
        }
        onKeyDown={(event) => {
          if(event.key === 'Enter') {
            event.preventDefault();
            addCommentHandler()
          }
        }}
        rightSection={
          // Кнопка подтверждения ввода
          <ActionIcon
            size="xs"
            variant="transparent"
            sx={{alignItems: "flex-end"}}
            px={0} mx={0} pt={50}
            onClick={() => addCommentHandler()}
          >
            <IconCheck size={16} stroke={1.5} />
          </ActionIcon>
        }
      />
      {/* Список комментариев */}
      {article.comments?.map((comment) =>
        <DigestCommentItem article={article} comment={comment} key={comment.id}/>
      )}
    </Stack>
  );
}
export default DigestComments;