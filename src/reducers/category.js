import {
    FETCH_CATEGORIES_DATA,
    REMOVE_CATEGORIES
} from '../actions/types';

const initState = [];
export default (state = initState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES_DATA:
            const category = [];
            action.data.map( (data, index) => {
                category.push({
                    id : data.id,
                    name : data.name
                })
            })
            return category;
        case REMOVE_CATEGORIES:
            return initState;
        default:
            return state;
    }
}