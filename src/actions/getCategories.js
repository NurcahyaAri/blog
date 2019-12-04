import {
    FETCH_CATEGORIES_DATA, REMOVE_CATEGORIES
} from './types';

import axios from '../config/blogApi';

const getCategories = (data) => {
    return {
        type : FETCH_CATEGORIES_DATA,
        data : data
    }
}

export const getCategoriesFromNetwork = () => {
    return async dispatch => {
        const res = await axios.get(
            'categories'
        );
        console.log(res)
        dispatch(getCategories(res.data));
    }
}

export const removeCategories = () => {
    return {
        type : REMOVE_CATEGORIES
    }
}