// Компонент секции подвала дайджеста
import {FC, useState} from "react";
import {ActionCreatorWithPayload} from "@reduxjs/toolkit";
import {ActionIcon, Badge, Group, Stack, Text} from "@mantine/core";
import {IconCalendarEvent, IconMessage, IconThumbDown, IconThumbUp} from "@tabler/icons";
import {v4 as uuidv4} from "uuid";

import {IDigestArticle} from "../../models/i-digest-article";
import {IDigestVote} from "../../models/i-digest-vote";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {toggleCon, togglePro} from "../../store/reducers/digest-article-slice";
import DigestComments from "./digest-comments";

// Тип пропсов секции подвала дайджеста
interface DigestFooterProps {
  article: IDigestArticle
}

// Компонент
const DigestFooter: FC<DigestFooterProps> = ({article}) => {
  // Стейт открытой/закрытой секции комментариев
  const [commentsOpened, setCommentsOpened] = useState<boolean>(false);

  // Получение из стора
  // Получает текущего пользователя из стора
  const user = useAppSelector((state) =>
    state.currentUser.user
  );
  // Получает статьи из стора
  const articles = useAppSelector((state) =>
    state.digestArticles.articles
  );

  // Получает число комментариев
  const commentsNum = articles?.find(item => item.id === article.id)?.comments.length;
  // Получает число голосов за
  const prosNum = articles?.find(item => item.id === article.id)?.pros.length;
  // Получает число голосов против
  const consNum = articles?.find(item => item.id === article.id )?.cons.length;

  // Отправка в стор
  // Функция отправки данных в стор
  const dispatch = useAppDispatch();
  //Обработчик переключения голоса. Аргументом имя редюсера: за или против
  const toggleVoteHandler =
    (reducer: ActionCreatorWithPayload<[IDigestArticle, IDigestVote]>) => {
    // Заполняет голос
    const vote: IDigestVote = {
      // Генерирует айди голоса
      id: uuidv4(),
      // Создатель
      creator: {id: user.id, name: user.name},
      // Текущая дата
      date: new Date().toLocaleString('ru-RU'),
    }
    dispatch(reducer([article, vote]));
  }

  return (
    // Стек подвала
    <Stack>
      {/* Верхняя часть: линейка кнопок */}
      <Group position="apart" >
        {/* Левая часть: голосование и кнопка показа комментариев */}
        <Group>
          {/* Палец вверх */}
          <Group pr="xs">
            <ActionIcon
              size="xs" variant="transparent" px={0} mx={0}
              onClick={() => toggleVoteHandler(togglePro)}
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
              onClick={() => toggleVoteHandler(toggleCon)}
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
        {/* Правая часть: дата*/}
        <Group>
          <ActionIcon size="xs" variant="transparent" px={0} mx={0} >
            <IconCalendarEvent size={16} stroke={1.5} />
          </ActionIcon>
          <Text size="xs" color="dimmed" ml={-10}>
            {new Date(article.date).toLocaleDateString('ru-RU')}
          </Text>
        </Group>
      </Group>
      {/* Нижняя часть: блок комментариев */}
      <DigestComments article={article} commentsOpened={commentsOpened}/>
    </Stack>
  );
}
export default DigestFooter;