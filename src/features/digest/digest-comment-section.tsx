// Компонент комментариев дайджеста
import {FC, useState} from "react";
import {ActionIcon, Textarea} from "@mantine/core";
import {IconCheck} from "@tabler/icons";
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {addComment, IDigestComment} from "../../store/digest-comment-slice";
import {v4 as uuidv4} from 'uuid';
import DigestCommentItem from "./digest-comment-item";

// Тип пропсов комментариев дайджеста
interface DigestCommentSectionProps {
  cardId: string;
}

const DigestCommentSection: FC<DigestCommentSectionProps> = (props) => {
  // const [opened, setOpened] = useState(false);
  const [commentValue, setCommentValue] = useState<string>('');
  const dispatch = useAppDispatch();

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

  const comments: IDigestComment[] = useAppSelector((state) => state.digestComment.comments);

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