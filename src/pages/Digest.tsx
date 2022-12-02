// Страница Дайджест
import {Grid} from "@mantine/core";
import DigestCard from "../components/DigestCard";
import digestSample from "../assets/sample-digest.json";

const PRBRDigest = () => {
  return (
    <Grid>
      {digestSample.map((item) => (
        <Grid.Col lg={12} xl={6}>
          <DigestCard
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
export default PRBRDigest;