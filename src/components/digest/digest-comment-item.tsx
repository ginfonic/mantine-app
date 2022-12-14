// Компонент комментария дайджеста
import {FC} from "react";
import {Stack, Group, Avatar, Text, ActionIcon, Code} from "@mantine/core";
import {IconTrash} from "@tabler/icons";

// Получает инициалы из имени
import {getInitials} from '../../assets/snippets'
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
    dispatch(removeComment([article, comment]));
  }

  return (
    <Stack>
      {/* Заголовок */}
      <Group my={-10} position="apart">
        {/* Левая часть */}
        <Group p="xs">
          <Avatar color="blue" size={24} radius="xl" ml={-10}>{getInitials(comment.creator.name)}</Avatar>
          {/*<Badge size="xs" variant="filled" ml={-10} sx={{ width: 16, height: 16, padding: 0}}>Ф</Badge>*/}
          <Text size="xs" fw={700} color="blue" ml={-5}>{comment.creator.name}</Text>
          <Text size="xs" color="dimmed" mx={-5}>{comment.date}</Text>
        </Group>
        {/* Правая часть - кнопка удаления комментария*/}
        <Group>
          <ActionIcon
            size="xs" variant="transparent"
            onClick={() => removeCommentHandler()}
          >
            <IconTrash size={16} stroke={1.5}/>
          </ActionIcon>
        </Group>
      </Group>
      {/*Текст*/}
      <Group mt={-10} mb={-5}>
        <Code>{comment.text}</Code>
      </Group>
    </Stack>
  )
}
export default DigestCommentItem;