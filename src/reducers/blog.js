import {
    FETCH_BLOG_DATA,
    REMOVE_ARTICLES,
    GET_ARTICLE_BY_CATEGORY
} from '../actions/types';
const initState = {
    isFetch : false,
    data : []
};

export default (state = initState, action) => {
    let isFetch = false;
    switch (action.type) {
        case FETCH_BLOG_DATA:
            console.log(action.data);
            isFetch = state.data.length > 0 ? true : false;
            return {
                isFetch,
                data : state.data.concat(action.data)
            }
        case REMOVE_ARTICLES:
            return initState
        case GET_ARTICLE_BY_CATEGORY:
            isFetch = state.data.length > 0 ? true : false;
            return {
                isFetch,
                data : state.data.concat(action.data),
            };
        default:
            return state;
    }
}