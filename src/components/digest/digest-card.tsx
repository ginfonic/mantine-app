// Компонент карточки дайджеста
import {FC, useState} from "react";
import {Group, Card, Image, Text, Badge, ActionIcon} from "@mantine/core";
import {IconThumbUp, IconThumbDown, IconMessage, IconCalendarEvent} from "@tabler/icons";
import {v4 as uuidv4} from "uuid";

// Хук получения данных из стора
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
// Компонент секции комментариев дайджеста
import DigestCommentSection from "./digest-comment-section";
// Тип статьи дайджеста
import {IDigestArticle} from "../../models/i-digest-article";
// Тип голосования дайджеста
import {IDigestVote} from "../../models/i-digest-vote";
// Редюсеры переключения голосования за и против
import {togglePro, toggleCon} from "../../store/reducers/digest-article-slice";

// Тип пропсов карточки дайджеста: тип статьи дайджеста
interface DigestCardProps { article: IDigestArticle }

// Компонент
const DigestCard: FC<DigestCardProps> = ({article}) => {
  // Заглушка отсутствующих фотографий
  const pictureDummy: string = "https://lost-car-keys-replacement.com/wp-content/uploads/No-image-yet-for-this-key-coming-soon-1536x1229.jpg";
  // Стейт открытой/закрытой секции комментариев
  const [commentsOpened, setCommentsOpened] = useState<boolean>(false);

  // Получение из стора
  // Получает текущего пользователя из стора
  const user = useAppSelector((state) =>
    state.currentUser.user
  );
  // Получает число комментариев из стора
  const commentsNum = useAppSelector((state) =>
      state.digestArticles.articles
    )?.find(item => item.id === article.id
    )?.comments.length;
  // Получает число голосов за из стора
  const prosNum = useAppSelector((state) =>
      state.digestArticles.articles
    )?.find(item => item.id === article.id
    )?.pros.length;
  // Получает число голосов против из стора
  const consNum = useAppSelector((state) =>
      state.digestArticles.articles
    )?.find(item => item.id === article.id
    )?.cons.length;

  // Отправка в стор
  // Функция отправки данных в стор
  const dispatch = useAppDispatch();
  //Обработчик переключения голоса за
  const toggleProHandler = () => {
    // Заполняет голос
    const vote: IDigestVote = {
      // Генерирует айди голоса
      id: uuidv4(),
      // Создатель
      creator: {id: user.id, name: user.name},
      // Текущая дата
      date: new Date().toLocaleString(),
    }
    dispatch(togglePro([article, vote]));
  }
  //Обработчик переключения голоса против
  const toggleConHandler = () => {
    // Заполняет голос
    const vote: IDigestVote = {
      // Генерирует айди голоса
      id: uuidv4(),
      // Создатель
      creator: {id: user.id, name: user.name},
      // Текущая дата
      date: new Date().toLocaleString(),
    }
    dispatch(toggleCon([article, vote]));
  }

  return (
    // Карточка
    <Card shadow="sm" p="lg" radius="md" withBorder>
      {/* Картинка */}
      <Card.Section>
        <Image
          src={((article.picture === undefined) || (article.picture === "")) ? pictureDummy : article.picture}
          height={160}
          alt="Нет фото"
        />
      </Card.Section>
      {/* Заголовок и бейдж */}
      <Card.Section inheritPadding>
        <Group position="apart" mt="md" mb="xs">
          {/* Заголовок */}
          <Text weight={500} color="blue">{article.title}</Text>
          {/* Бейдж */}
          <Badge color="red" variant="light">
            Новое
          </Badge>
        </Group>
      </Card.Section>
      {/* Текст */}
      <Card.Section inheritPadding>
        <Text size="sm" color="dimmed" mb="sm">
          {article.text}
        </Text>
      </Card.Section>
      {/* Подвал с кнопками*/}
      <Card.Section inheritPadding>
        {/* Линейка кнопок */}
        <Group position="apart" >
          {/* Левая часть: голосование и кнопка показа комментариев */}
          <Group>
            {/* Палец вверх */}
            <Group pr="xs">
              <ActionIcon
                size="xs" variant="transparent" px={0} mx={0}
                onClick={() => toggleProHandler()}
              >
                <IconThumbUp size={16} stroke={1.5} />
              </ActionIcon>
              {/* Число голосов за */}
              <Badge
                size="xs" variant="filled" px={0} mx={-10}
                sx={{ width: 16, height: 16, padding: 0 }}
              >
                {prosNum}
              </Badge>
            </Group>
            {/* Палец вниз */}
            <Group pr="xs">
              <ActionIcon
                size="xs" variant="transparent" px={0} mx={0}
                onClick={() => toggleConHandler()}
              >
                <IconThumbDown size={16} stroke={1.5} />
              </ActionIcon>
              {/* Число голосов против */}
              <Badge
                size="xs" variant="filled" px={0} mx={-10}
                sx={{ width: 16, height: 16, padding: 0 }}
              >
                {consNum}
              </Badge>
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
        <DigestCommentSection article={article}/>
      </Card.Section>
    </Card>
  );
}
export default DigestCard;