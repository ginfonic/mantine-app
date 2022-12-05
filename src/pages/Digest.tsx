// Страница Дайджест
import {FC} from "react";
import {Grid} from "@mantine/core";
import DigestCard from "../components/DigestCard";
import digestSample from "../assets/sample-digest.json";

const Digest: FC = () => {
  return (
    <Grid>
      {digestSample.map((item) => (
        <Grid.Col lg={12} xl={6}>
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