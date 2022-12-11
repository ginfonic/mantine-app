// Компонент карточки дайджеста
import {FC, useState} from "react";
import {Group, Card, Image, Text, Badge} from "@mantine/core";

// Тип статьи дайджеста
import {IDigestArticle} from "../../models/i-digest-article";
// Компонент секции подвала дайджеста
import DigestFooter from "./digest-footer";
// Компонент секции комментариев дайджеста
import DigestComments from "./digest-comments";
import {isArticleNew} from "../../assets/snippets";

// Тип пропсов карточки дайджеста: тип статьи дайджеста
interface DigestCardProps {
  article: IDigestArticle
}

// Компонент
const DigestCard: FC<DigestCardProps> = ({article}) => {
  // Заглушка отсутствующих фотографий
  const pictureDummy: string = "https://lost-car-keys-replacement.com/wp-content/uploads/No-image-yet-for-this-key-coming-soon-1536x1229.jpg";
  // Стейт открытой/закрытой секции комментариев
  const [commentsOpened, setCommentsOpened] = useState<boolean>(false);
  // Коллбэк переключения стейта открытой/закрытой секции комментариев для выхова из копмпонента подвала
  const toggleCommentsOpened = () => setCommentsOpened((o) => !o);

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
          {isArticleNew(article.date) && (
            <Badge color="red" variant="light">
              Новая
            </Badge>
          )}
        </Group>
      </Card.Section>
      {/* Текст */}
      <Card.Section inheritPadding>
        <Text size="sm" color="dimmed" mb="sm">
          {article.text}
        </Text>
      </Card.Section>
      {/* Подвал с кнопками */}
      <Card.Section inheritPadding>
        <DigestFooter article={article} toggleCommentsOpened={toggleCommentsOpened}/>
      </Card.Section>
      {/* Комментарии */}
      <Card.Section inheritPadding pb="md" mt="md" hidden={!commentsOpened}>
        <DigestComments article={article}/>
      </Card.Section>
    </Card>
  );
}
export default DigestCard;