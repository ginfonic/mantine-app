// Компонент одного комментария дайджеста
import {FC} from "react";
import {ActionIcon, Avatar, Code, Group, Text} from "@mantine/core";
import {IconTrash} from "@tabler/icons";
import {useAppDispatch} from '../../store/hooks';
import {removeComment} from '../../store/digest-comment-slice';

interface DigestCommentItemProps {
  id: string,
  author: string,
  date: Date,
  text: string
}

const DigestCommentItem: FC<DigestCommentItemProps> = (props) => {
  const dispatch = useAppDispatch();

  const removeCommentHandler = (id: string) => {
    dispatch(removeComment(id));
  }
  return(
    <Group mb={5}>
      {/* Заголовок */}
      <Group position="apart" >
        {/* Левая часть */}
        <Group p="xs" mb={-20}>
          <Avatar color="blue" size={24} radius="xl" ml={-10} >ИИ</Avatar>
          {/*<Badge size="xs" variant="filled" ml={-10} sx={{ width: 16, height: 16, padding: 0}}>Ф</Badge>*/}
          <Text size="xs" fw={700} color="blue" ml={-5} >{props.author}</Text>
          <Text size="xs" color="dimmed" mx={-5}>{props.date.toLocaleString()}</Text>
        </Group>
        {/* Правая часть */}
        <Group mb={-20}>
          <ActionIcon
            size="xs"
            variant="transparent"
            onClick={() => removeCommentHandler(props.id)}
          >
            <IconTrash size={16} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Group>
      {/* Текст */}
      <Group>
        <Code>{props.text}</Code>
      </Group>
    </Group>
  )
}
export default DigestCommentItem;