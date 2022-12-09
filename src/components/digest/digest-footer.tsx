// Компонент секции подвала дайджеста
import {FC} from "react";
import {ActionCreatorWithPayload} from "@reduxjs/toolkit";
import {ActionIcon, Badge, Group, Text} from "@mantine/core";
import {IconCalendarEvent, IconMessage, IconThumbDown, IconThumbUp} from "@tabler/icons";
import {v4 as uuidv4} from "uuid";

import {IDigestArticle} from "../../models/i-digest-article";
import {IDigestVote} from "../../models/i-digest-vote";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {toggleCon, togglePro} from "../../store/reducers/digest-article-slice";

// Тип пропсов секции подвала дайджеста
interface DigestFooterProps {
  article: IDigestArticle,
  toggleCommentsOpened: () => void
}

// Компонент
const DigestFooter: FC<DigestFooterProps> = ({article, toggleCommentsOpened}) => {
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
    // Линейка кнопок
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
            onClick={() => toggleCommentsOpened()}
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
        <Text size="xs" color="dimmed" ml={-10}>{article.date}</Text>
      </Group>
    </Group>
  );
}
export default DigestFooter;