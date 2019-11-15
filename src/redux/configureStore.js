import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Leaders } from './leaders';
import { Albums } from './albums';
import { Books } from './books';
import { Movies } from './movies';

import { InitialFeedback } from './forms';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            albums: Albums,
            books: Books,
            movies: Movies,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
