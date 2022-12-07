// Компонент комментария дайджеста
import {FC} from "react";
import {ActionIcon, Avatar, Code, Group, Text} from "@mantine/core";
import {IconTrash} from "@tabler/icons";

// Тип комментария дайджеста
import {IDigestComment} from "../../models/i-digest-comment";
import {IDigestArticle} from "../../models/i-digest-article";
// Хук добавления данных
import {useAppDispatch} from '../../hooks/redux';
// Редюсер удаления комментария
import {removeComment} from '../../store/reducers/digest-article-slice';

// Тип пропсов компонента комментария
interface DigestCommentItemProps {
  article: IDigestArticle,
  comment: IDigestComment
}

// Компонент
const DigestCommentItem: FC<DigestCommentItemProps> = ({article, comment}) => {
  // Функция отправки данных в стор
  const dispatch = useAppDispatch();
  //Обработчик удаления комментария
  const removeCommentHandler = () => {
    // Удаляет комментарий
    dispatch(removeComment({article: article, comment: comment}));
  }

  return (
    <Group mb={5}>
      {/* Заголовок */}
      <Group position="apart">
        {/* Левая часть */}
        <Group p="xs" mb={-20}>
          <Avatar color="blue" size={24} radius="xl" ml={-10}>ИИ</Avatar>
          {/*<Badge size="xs" variant="filled" ml={-10} sx={{ width: 16, height: 16, padding: 0}}>Ф</Badge>*/}
          <Text size="xs" fw={700} color="blue" ml={-5}>{comment.creator.name}</Text>
          <Text size="xs" color="dimmed" mx={-5}>{comment.date}</Text>
        </Group>
        {/* Правая часть - кнопка удаления комментария*/}
        <Group mb={-20}>
          <ActionIcon
            size="xs"
            variant="transparent"
            onClick={() => removeCommentHandler()}
          >
            <IconTrash size={16} stroke={1.5}/>
          </ActionIcon>
        </Group>
      </Group>
      {/* Текст */}
      <Group>
        <Code>{comment.text}</Code>
      </Group>
    </Group>
  )
}
export default DigestCommentItem;