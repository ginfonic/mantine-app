// Компонент комментариев дайджеста
import {FC, useState} from "react";
import {ActionIcon, Avatar, Badge, Code, Group, Text, Textarea} from "@mantine/core";
import {IconCheck, IconTrash} from "@tabler/icons";
import {useDispatch, useSelector} from 'react-redux';
import {addComment, IDigestComment} from "../features/digestCommentSlice";
import {v4 as uuidv4} from 'uuid';
import DigestCommentItem from "./DigestCommentItem";

// Тип пропсов комментариев дайджеста
interface DigestCommentSectionProps {
  cardId: string;
}

const DigestCommentSection: FC<DigestCommentSectionProps> = (props) => {
  // const [opened, setOpened] = useState(false);
  const [commentValue, setCommentValue] = useState<string>('');
  const dispatch = useDispatch();

  const addCommentHandler = (id: string) => {
    const comment: IDigestComment = {
      id: uuidv4(),
      cardId: id,
      author: 'Иван Иванович Иванов',
      date: new Date(),
      text: commentValue
    }
    if(commentValue) {
      dispatch(addComment(comment));
      setCommentValue('');
    }
  }

  // @ts-ignore
  const comments: IDigestComment[] = useSelector((state) => state.digestComment.comments);

  return (
    <>
      <Textarea
        value={commentValue}
        placeholder="Ваш комментарий"
        mb={5}
        onChange={(event) => setCommentValue(event.currentTarget.value)}
        rightSection={
          <ActionIcon
            size="xs"
            variant="transparent"
            sx={{alignItems: "flex-end"}}
            // px={0} mx={0} py={5}
            onClick={() => {
              addCommentHandler(props.cardId);
              // setOpened((o) => !o)
            }}
          >
            <IconCheck size={16} stroke={1.5} />
          </ActionIcon>
        }
      />
      {comments?.filter((comment) => comment.cardId === props.cardId)?.map((comment) => (
        <DigestCommentItem
          id={comment.id}
          author={comment.author}
          date={comment.date}
          text={comment.text}
        />
      ))}
    </>
  );
}
export default DigestCommentSection;