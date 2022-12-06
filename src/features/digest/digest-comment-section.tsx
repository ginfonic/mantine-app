// Компонент секции комментариев дайджеста
import {FC, useState} from "react";
import {ActionIcon, Textarea} from "@mantine/core";
import {IconCheck} from "@tabler/icons";
import {v4 as uuidv4} from 'uuid';

// Тип комментариев дайджеста
import {IDigestComment} from '../../types';
// Хуки добавления и получения данных из стора
import {useAppDispatch, useAppSelector} from '../../store/hooks';
// Редюсер добавления комментария и его тип
import {addComment} from "../../store/digest-comment-slice";
// Компонент одного комментария дайджеста
import DigestCommentItem from "./digest-comment-item";

// Тип пропсов секции комментариев дайджеста
interface DigestCommentSectionProps { cardId: string }

// Компонент
const DigestCommentSection: FC<DigestCommentSectionProps> = (props) => {
  // Стейт текста комментария
  const [commentValue, setCommentValue] = useState<string>('');
  // Функция отправки данных в стор
  const dispatch = useAppDispatch();
  //Обработчик добавления комментария
  const addCommentHandler = (id: string) => {
    // Заполняет комментарий
    const comment: IDigestComment = {
      // Генерирует айди комментария
      id: uuidv4(),
      // На входе айди карточки с новостью
      cardId: id,
      // Авттор - пока дамми
      author: 'Иван Иванович Иванов',
      // Текузая дата
      date: new Date(),
      // Введенный текст комментария
      text: commentValue
    }
    // Если комментарий содержит что-то
    if(commentValue) {
      // Добавляет комментарий в стор
      dispatch(addComment(comment));
      // Чистит форму
      setCommentValue('');
    }
  }

  // Получает комментарии из стора
  const comments = useAppSelector((state) =>
      state.digestComment.comments
    );

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
            // px={0} mx={0} py={5}
            onClick={() => { addCommentHandler(props.cardId); }}
          >
            <IconCheck size={16} stroke={1.5} />
          </ActionIcon>
        }
      />
      {/* Выводит комментарии, относящиеся к карточке текущей статьи */}
      {comments?.filter((comment) => comment.cardId === props.cardId
        )?.map((comment) =>
          <DigestCommentItem
            id={comment.id}
            author={comment.author}
            date={comment.date}
            text={comment.text}
          />
        )
      }
    </>
  );
}
export default DigestCommentSection;