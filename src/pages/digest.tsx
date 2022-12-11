// Страница дайджеста
import {FC} from "react";
import {Grid} from "@mantine/core";

// Компонент карточки дайджеста
import DigestCard from "../components/digest/digest-card";
// Хук получения данных из стора
import {useAppSelector} from "../hooks/redux";
import {compareDesc} from "date-fns";

// Компонент
const Digest: FC = () => {
  // Получает статьи из стора
  const articles = useAppSelector((state) =>
    state.digestArticles.articles
  );
  return (
    <Grid>
      {/* Выводит данные из массива статей */}
      {[...articles]
        ?.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
        .map((article) => (
        // Сетка
        <Grid.Col lg={12} xl={6} key={article.id}>
          {/* Карточка статьи */}
          <DigestCard
            article={article}
          />
        </Grid.Col>)
      )}
    </Grid>
  );
}
export default Digest;