import {
    FETCH_BLOG_DATA,
    GET_ARTICLE_BY_ID,
    REMOVE_ARTICLE_STATE,
    REMOVE_ARTICLES
} from './types';
import axios from '../config/blogApi';

const getArticles = (data) => {
    return {
        type : FETCH_BLOG_DATA,
        data : data
    }
}


export const getArticlesFromNetwork = () => {
    return async (dispatch) => {
        let res = await axios.get(
            'contents'
        );
        console.log(res);
        dispatch(getArticles(res.data));
    }
}

export const removeArticles = () => {
    return {
        type : REMOVE_ARTICLES
    }
}

const getArticleById = (data) => {
    return {
        type : GET_ARTICLE_BY_ID,
        data : data
    }
}

export const getArticleByIdFromNetWork = (id) => {
    return async (dispatch) => {
        let res = await axios.get(
            `contents/${id}`
        );
        dispatch(getArticleById(res.data));
    }
}

export const removeArticle = () => {
    return {
        type : REMOVE_ARTICLE_STATE
    }
}