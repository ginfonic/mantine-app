// Стор приложения
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';
// Тип голосования, комментария и статьи дайджеста
import {IDigestVote} from "../../models/i-digest-vote";
import {IDigestComment} from '../../models/i-digest-comment';
import {IDigestArticle} from '../../models/i-digest-article';

// Тестовые данные для заполнения массива статей
import digestSample from "../../assets/sample-digest.json";

// Тип объекта: статья, голос
interface IDigestArticleVote {
  article: IDigestArticle,
  vote: IDigestVote
}
// Тип объекта: статья, комментарий
interface IDigestArticleComment {
  article: IDigestArticle,
  comment: IDigestComment
}

// Тип начального состояния статьи дайджеста
interface IDigestArticleState {
  articles: IDigestArticle[]
}
// Начальное состояние статьи дайджеста из тестовых данных
const initialState: IDigestArticleState = {articles: []}
digestSample?.map(item => {
  let article: IDigestArticle = {
    id: uuidv4(),
    title: item.title,
    text: item.text,
    link: item.link,
    date: new Date().toLocaleString(),
    picture: item.picture,
    pros: [],
    cons: [],
    comments: []
  }
  initialState.articles.push(article)
})

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
    togglePro: (state, action: PayloadAction<IDigestArticleVote>) => {
      // Текущая статья
      let currentArticle = state.articles.find(article => article.id === action.payload.article.id);
      // Если уже есть голос за эту статью
      if(currentArticle?.pros?.find(vote => vote.creator.id === action.payload.vote.creator.id)) {
        // Сбрасывает его
        currentArticle.pros = currentArticle.pros.filter((vote) => vote.creator.id !== action.payload.vote.creator.id)
      }
      else {
        // Иначе устанавливает его
        currentArticle?.pros?.push(action.payload.vote)
      }
    },
    // Редюсер изменения голоса против
    toggleCon: (state, action: PayloadAction<IDigestArticleVote>) => {
      // Текущая статья
      let currentArticle = state.articles.find(article => article.id === action.payload.article.id);
      // Если уже есть голос против этой статьи
      if(currentArticle?.cons?.find(vote => vote.creator.id === action.payload.vote.creator.id)) {
        // Сбрасывает его
        currentArticle.cons = currentArticle.cons.filter((vote) => vote.creator.id !== action.payload.vote.creator.id)
      }
      else {
        // Иначе устанавливает его
        currentArticle?.cons?.push(action.payload.vote)
      }
    },
    // Редюсер добавления комментария
    addComment: (state, action: PayloadAction<IDigestArticleComment>) => {
      state.articles.find(article => article.id === action.payload.article.id)?.comments.push(action.payload.comment);
    },
    // Редюсер удаления комментария
    removeComment: (state, action: PayloadAction<IDigestArticleComment>) => {
      // Текущая статья
      let currentArticle = state.articles.find(article => article.id === action.payload.article.id);
      // Если есть комментарии
      if(currentArticle?.comments) {
        // Удаляет выбранный комментарий
        currentArticle.comments = currentArticle.comments.filter((comment) => comment.id !== action.payload.comment.id);
      }
    }
  }
})

// Экспортирует редюсеры с экшенами
export const {addArticle, removeArticle, togglePro, toggleCon, addComment, removeComment} = digestArticleSlice.actions;
export default digestArticleSlice.reducer;