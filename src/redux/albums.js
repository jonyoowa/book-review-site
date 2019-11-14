import * as ActionTypes from './ActionTypes';

export const Albums = (state = { isLoading: true,
    errMess: null,
    albums:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ALBUMS:
            return {...state, isLoading: false, errMess: null, albums: action.payload};

        case ActionTypes.ALBUMS_LOADING:
            return {...state, isLoading: true, errMess: null, albums: []}

        case ActionTypes.ALBUMS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};