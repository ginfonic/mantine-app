// Компонент комментариев дайджеста
import {ActionIcon, Avatar, Badge, Code, Group, Text, Textarea} from "@mantine/core";
import {IconCheck, IconTrash} from "@tabler/icons";
import {useState} from "react";

const DigestComment = () => {
  // const [opened, setOpened] = useState(false);
  const [comment, setComment] = useState("");

  return (
    <>
      <Textarea
        label={comment}
        placeholder="Ваш комментарий"
        pt="sm"
        rightSection={
          <ActionIcon
            size="xs"
            variant="transparent"
            sx={{alignItems: "flex-end"}}
            px={0} mx={0} py={5}
            value={comment}
            onClick={() => {
              setComment((value) => value)
              // setOpened((o) => !o)
            }}
          >
            <IconCheck size={16} stroke={1.5} />
          </ActionIcon>
        }
      />
      {/* Список имеющихся комментариев */}
      <Group>
        {/* Заголовок */}
        <Group position="apart" >
          {/* Левая часть */}
          <Group p="xs" mb={-20}>
            <Avatar color="blue" size={24} radius="xl" ml={-10} >ЕФ</Avatar>
            {/*<Badge size="xs" variant="filled" ml={-10} sx={{ width: 16, height: 16, padding: 0}}>Ф</Badge>*/}
            <Text size="xs" fw={700} color="blue" ml={-5} >Фокин Евгений Александрович</Text>
            <Text size="xs" color="dimmed" mx={-5}>21.12.1984, 13:02:23</Text>
          </Group>
          {/* Правая часть */}
          <Group mb={-20}>
            <ActionIcon size="xs" variant="transparent" >
              <IconTrash size={16} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Group>
        {/* Текст */}
        <Group>
          <Code>В Новгородской области запущен проект по дистанционному мониторингу артериального давления</Code>
        </Group>
      </Group>
      {/* Список имеющихся комментариев */}
      <Group>
        {/* Заголовок */}
        <Group p="xs" mb={-20}>
          <Badge size="xs" ml={-10} sx={{ width: 16, height: 16, padding: 0}}>П</Badge>
          <Text size="xs" fw={700} color="blue" ml={-5} >Полетаев Роман Владимирович</Text>
          <Text size="xs" color="dimmed" mx={-5}>21.12.1984, 13:02:23</Text>
        </Group>
        {/* Текст */}
        <Group>
          <Code>Полностью согласен с вышеприведенным комментарием.</Code>
        </Group>
      </Group>
    </>
  );
}
export default DigestComment;