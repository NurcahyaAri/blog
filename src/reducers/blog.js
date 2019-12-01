import {
    FETCH_BLOG_DATA,
    REMOVE_ARTICLES
} from '../actions/types';
const initState = {
    isFetch : false,
    data : []
};

export default (state = initState, action) => {
    switch (action.type) {
        case FETCH_BLOG_DATA:
            console.log(action.data);
            const isFetch = state.data.length > 0 ? true : false;
            return {
                isFetch,
                data : state.data.concat(action.data)
            }
        case REMOVE_ARTICLES:
            return initState
        default:
            return state;
    }
}