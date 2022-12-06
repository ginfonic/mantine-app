// Страница дайджеста
import {FC} from "react";
import {Grid} from "@mantine/core";
// Компонент карточки дайджеста
import DigestCard from "../features/digest/digest-card";
// Данные для заполнения
import digestSample from "../assets/sample-digest.json";

// Компонент
const Digest: FC = () => {
  return (
    <Grid>
      {/* Выводит данные из массива */}
      {digestSample.map((item) => (
        // Сетка
        <Grid.Col lg={12} xl={6}>
          {/* Карточка статьи */}
          <DigestCard
            id={item.id}
            picture={item.picture}
            title={item.title}
            text={item.text}
            link={item.link}
          />
        </Grid.Col>)
      )}
    </Grid>
  );
}
export default Digest;