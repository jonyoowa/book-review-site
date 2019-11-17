import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Albums } from './albums';
import { Books } from './books';
import { Movies } from './movies';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            albums: Albums,
            books: Books,
            movies: Movies
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
