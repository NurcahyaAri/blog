import {
    GET_ARTICLE_BY_ID,
    REMOVE_ARTICLE_STATE,
} from '../actions/types';
const initState = {
};

export default (state = initState, action) => {
    switch (action.type) {
        case GET_ARTICLE_BY_ID:
            return {...action.data};
        case REMOVE_ARTICLE_STATE :
            return initState;
        default:
            return state;
    }
}