// Компонент карточки дайджеста
import {FC} from "react";
import {Group, Card, Image, Text, Badge, Anchor} from "@mantine/core";

// Тип статьи дайджеста
import {IDigestArticle} from "../../models/i-digest-article";
// Компонент секции подвала дайджеста
import DigestFooter from "./digest-footer";
import {isArticleNew, separateAnchor} from "../../assets/snippets";

// Тип пропсов карточки дайджеста: тип статьи дайджеста
interface DigestCardProps {
  article: IDigestArticle
}

// Компонент
const DigestCard: FC<DigestCardProps> = ({article}) => {
  // Заглушка отсутствующих фотографий
  // const pictureDummy: string = "https://lost-car-keys-replacement.com/wp-content/uploads/No-image-yet-for-this-key-coming-soon-1536x1229.jpg";

  // Если есть ссылка, разделяет текст статьи на якорь для ссылки и остаток
  const [anchor, rest] = article.link !== '' ? separateAnchor(article.text) : ['', article.text];

  return (
    // Карточка
    <Card shadow="sm" p="lg" radius="md" withBorder>
      {/* Картинка */}
      <Card.Section>
        <Image
          // src={((article.picture === undefined) || (article.picture === "")) ? pictureDummy : article.picture}
          src={article.picture} height={160} withPlaceholder
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
              Новое
            </Badge>
          )}
        </Group>
      </Card.Section>
      {/* Текст со ссылкой*/}
      <Card.Section inheritPadding>
        <Text size="sm" color="dimmed" mb="sm">
          {/* Якорь для ссылки */}
          <Anchor href={article.link} target="_blank" color="blue">{anchor}</Anchor>
          {/* Пробел между якорем и остатком текста */}
          {anchor !== '' ? ' ' : ''}
          {/* Остаток текста */}
          {rest}
        </Text>
      </Card.Section>
      {/* Подвал с кнопками и блоком комментариев */}
      <Card.Section inheritPadding pb='md'>
        <DigestFooter article={article}/>
      </Card.Section>
    </Card>
  );
}
export default DigestCard;