import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import blogReducer from '../reducers/blog';
import articleReducer from '../reducers/article';

const combinedReducers = combineReducers({
    blog : blogReducer,
    article : articleReducer
});

const stores = createStore(
    combinedReducers, 
    compose(
        applyMiddleware(thunk),
        (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) || compose
    )
);

export default stores;