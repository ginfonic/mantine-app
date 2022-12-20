// Страница дайджеста
import {FC, useEffect} from "react";
import {Grid} from "@mantine/core";
import {compareDesc} from "date-fns";

// Компонент карточки дайджеста
import DigestCard from "../components/digest/digest-card";
// Хук получения данных из стора и отправки в стор
import {useAppSelector, useAppDispatch} from "../hooks/redux";
// Экшн загрузки статей из базы данных
import {fetchArticles} from "../store/reducers/digest-article-slice";

// Компонент
const Digest: FC = () => {
  // Операции со стором
  // Функция отправки данных в стор
  const dispatch = useAppDispatch();
  // Отправляет в стор статьи, полученные из базы данных
  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);
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