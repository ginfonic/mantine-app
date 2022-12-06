// Компонент карточки дайджеста
import {FC, useState} from "react";
import {Group, Card, Image, Text, Badge, ActionIcon} from "@mantine/core";
import {IconThumbUp, IconThumbDown, IconMessage, IconCalendarEvent} from "@tabler/icons";
// Хук получения данных из стора
import {useAppSelector} from '../../store/hooks';

// Компонент секции комментариев дайджеста
import DigestCommentSection from "./digest-comment-section";

// Тип пропсов карточки дайджеста
interface DigestCardProps {
  id: string;
  picture?: string;
  title?: string;
  text: string;
  link?: string;
}

// Компонент
const DigestCard: FC<DigestCardProps> = (props) => {
  // Заглушка отсутствующих фотографий
  const pictureDummy: string = "https://lost-car-keys-replacement.com/wp-content/uploads/No-image-yet-for-this-key-coming-soon-1536x1229.jpg";
  // Стейт открытой/закрытой секции комментариев
  const [commentsOpened, setCommentsOpened] = useState<boolean>(false);

  // Получает число комментариев из стора
  const commentsNum =
    useAppSelector((state) =>
      state.digestComment.comments
    )?.filter((comment) =>
      comment.cardId === props.id
    ).length;

  return (
    // Карточка
    <Card shadow="sm" p="lg" radius="md" withBorder>
      {/* Картинка */}
      <Card.Section>
        <Image
          src={((props.picture === undefined) || (props.picture === "")) ? pictureDummy : props.picture}
          height={160}
          alt="Нет фото"
        />
      </Card.Section>
      {/* Заголовок и бейдж */}
      <Card.Section inheritPadding>
        <Group position="apart" mt="md" mb="xs">
          {/* Заголовок */}
          <Text weight={500} color="blue">{props.title}</Text>
          {/* Бейдж */}
          <Badge color="red" variant="light">
            Новое
          </Badge>
        </Group>
      </Card.Section>
      {/* Текст */}
      <Card.Section inheritPadding>
        <Text size="sm" color="dimmed" mb="sm">
          {props.text}
        </Text>
      </Card.Section>
      {/* Подвал с кнопками*/}
      <Card.Section inheritPadding>
        {/* Линейка кнопок */}
        <Group position="apart" >
          {/* Левая часть - пальцы и кнопка показа комментариев */}
          <Group>
            {/* Палец вверх */}
            <Group pr="xs">
              <ActionIcon size="xs" variant="transparent" px={0} mx={0}>
                <IconThumbUp size={16} stroke={1.5} />
              </ActionIcon>
              <Badge size="xs" variant="filled" px={0} mx={-10} sx={{ width: 16, height: 16, padding: 0 }}> 99 </Badge>
            </Group>
            {/* Палец вниз */}
            <Group pr="xs">
              <ActionIcon size="xs" variant="transparent" px={0} mx={0}>
                <IconThumbDown size={16} stroke={1.5} />
              </ActionIcon>
              <Badge size="xs" variant="filled" px={0} mx={-10} sx={{ width: 16, height: 16, padding: 0 }}> 24 </Badge>
            </Group>
            {/* Кнопка показа комментариев */}
            <Group pr="xs">
              <ActionIcon
                size="xs"
                variant="transparent"
                px={0} mx={0}
                onClick={() => setCommentsOpened((o) => !o)}
              >
                <IconMessage size={16} stroke={1.5} />
              </ActionIcon>
              {/* Число комментариев */}
              <Badge
                size="xs" variant="filled" px={0} mx={-10}
                sx={{ width: 16, height: 16, padding: 0 }}
              >
                {commentsNum}
              </Badge>
            </Group>
          </Group>
          {/* Правая часть - дата*/}
          <Group>
            <ActionIcon size="xs" variant="transparent" px={0} mx={0} >
              <IconCalendarEvent size={16} stroke={1.5} />
            </ActionIcon>
            <Text size="xs" color="dimmed" ml={-10}>21.12.1984</Text>
          </Group>
        </Group>
      </Card.Section>
      {/* Комментарии */}
      <Card.Section inheritPadding pb="md" mt="md" hidden={!commentsOpened}>
        <DigestCommentSection cardId={props.id}/>
      </Card.Section>
    </Card>
  );
}
export default DigestCard;