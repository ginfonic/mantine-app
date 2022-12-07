// Слайс стора Redux для статьи дайджеста
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
// Тип комментариев и статьи дайджеста
import {IDigestVote} from "../../models/i-digest-vote";
import {IDigestComment} from '../../models/i-digest-comment';
import {IDigestArticle} from '../../models/i-digest-article';
// Данные для заполнения массива статей
import digestSample from "../../assets/sample-digest.json";

// Тип объекта: айди статьи, голос
interface IDigestArticleIDVote {
  articleID: string,
  vote: IDigestVote
}
// Тип объекта: айди статьи, комментарий
interface IDigestArticleIDComment {
  articleID: string,
  comment: IDigestComment
}

// Тип начального состояния статьи дайджеста
interface IDigestArticleState {
  articles: IDigestArticle[]
}
// Начальное состояние слайса статьи дайджеста
const initialState: IDigestArticleState = {articles: []}
digestSample?.map(item => {
  let article: IDigestArticle = {
    id: item.id,
    title: item.title,
    text: item.text,
    link: item.link,
    date: new Date(),
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
    togglePro: (state, action: PayloadAction<IDigestArticleIDVote>) => {
      let pros = state.articles.find(article => article.id = action.payload.articleID)?.pros
      let pro = pros?.find(vote => vote.id = action.payload.vote.id)
      if(pro) {
        pros = pros?.filter((vote) => vote.id !== action.payload.vote.id)
      }
      else {
        pros?.push(action.payload.vote)
      }
    },
    // Редюсер изменения голоса против
    toggleCon: (state, action: PayloadAction<IDigestArticleIDVote>) => {
      let cons = state.articles.find(article => article.id = action.payload.articleID)?.cons
      let con = cons?.find(vote => vote.id = action.payload.vote.id)
      if(con) {
        cons = cons?.filter((vote) => vote.id !== action.payload.vote.id)
      }
      else {
        cons?.push(action.payload.vote)
      }
    },
    // Редюсер добавления комментария
    addComment: (state, action: PayloadAction<IDigestArticleIDComment>) => {
      state.articles.find(article => article.id = action.payload.articleID)?.comments.push(action.payload.comment);
    },
    // Редюсер удаления комментария
    removeComment: (state, action: PayloadAction<IDigestArticleIDComment>) => {
      let comments = state.articles.find(article => article.id = action.payload.articleID)?.comments
      comments = comments?.filter((comment) => comment.id !== action.payload.comment.id)
    }
  }
})

// Экспортирует редюсеры с экшенами
export const {addArticle, removeArticle} = digestArticleSlice.actions;
// Импортируется в сторе как digestArticleReducer
export default digestArticleSlice.reducer;