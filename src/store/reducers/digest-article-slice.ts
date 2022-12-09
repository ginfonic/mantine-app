// Стор приложения
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';
// Тип голосования, комментария и статьи дайджеста
import {IDigestVote} from "../../models/i-digest-vote";
import {IDigestComment} from '../../models/i-digest-comment';
import {IDigestArticle} from '../../models/i-digest-article';

// Тестовые данные для заполнения массива статей
import digestSample from "../../assets/sample-digest.json";

// Тип начального состояния статьи дайджеста
interface IDigestArticleState {
  articles: IDigestArticle[]
}
// Начальное состояние статьи дайджеста из тестовых данных
const initialState: IDigestArticleState = {articles:
    digestSample?.map(item => ({
        id: uuidv4(),
        title: item.title,
        text: item.text,
        link: item.link,
        date: new Date().toLocaleDateString('ru-RU'),
        picture: item.picture,
        pros: [],
        cons: [],
        comments: [],
        commentsOpened: false
      })
    )
  };

const digestArticleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    // Редюсер добавления статьи
    addArticle: (state, action: PayloadAction<IDigestArticle>) => {
      state.articles.push(action.payload);
    },
    // Редюсер удаления статьи
    removeArticle: (state, action: PayloadAction<string>) => {
      state.articles = state.articles.filter((article) => article.id !== action.payload)
    },
    // Редюсер изменения голоса за
    togglePro: (state, action: PayloadAction<[IDigestArticle, IDigestVote]>) => {
      const [plArticle, plVote] = action.payload;
      // Текущая статья
      let currentArticle = state.articles.find(article => article.id === plArticle.id);
      // Если уже есть голос за эту статью
      if(currentArticle?.pros?.find(vote => vote.creator.id === plVote.creator.id)) {
        // Сбрасывает его
        currentArticle.pros = currentArticle.pros.filter((vote) => vote.creator.id !== plVote.creator.id)
      }
      else {
        // Иначе устанавливает его
        currentArticle?.pros?.push(plVote)
      }
    },
    // Редюсер изменения голоса против
    toggleCon: (state, action: PayloadAction<[IDigestArticle, IDigestVote]>) => {
      const [plArticle, plVote] = action.payload;
      // Текущая статья
      let currentArticle = state.articles.find(article => article.id === plArticle.id);
      // Если уже есть голос против этой статьи
      if(currentArticle?.cons?.find(vote => vote.creator.id === plVote.creator.id)) {
        // Сбрасывает его
        currentArticle.cons = currentArticle.cons.filter((vote) => vote.creator.id !== plVote.creator.id)
      }
      else {
        // Иначе устанавливает его
        currentArticle?.cons?.push(plVote)
      }
    },
    // Редюсер добавления комментария
    addComment: (state, action: PayloadAction<[IDigestArticle, IDigestComment]>) => {
      const [plArticle, plComment] = action.payload;
      state.articles.find(article => article.id === plArticle.id)?.comments.push(plComment);
    },
    // Редюсер удаления комментария
    removeComment: (state, action: PayloadAction<[IDigestArticle, IDigestComment]>) => {
      const [plArticle, plComment] = action.payload;
      // Текущая статья
      let currentArticle = state.articles.find(article => article.id === plArticle.id);
      // Если есть комментарии
      if(currentArticle?.comments) {
        // Удаляет выбранный комментарий
        currentArticle.comments = currentArticle.comments.filter((comment) => comment.id !== plComment.id);
      }
    }
  }
})

// Экспортирует редюсеры с экшенами
export const {/*addArticle, removeArticle, */togglePro, toggleCon, addComment, removeComment} = digestArticleSlice.actions;
export default digestArticleSlice.reducer;