import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

//

export const fetchAlbums = () => (dispatch) => {

    dispatch(albumsLoading(true));

    return fetch(baseUrl + 'albums')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }, 
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(albums => dispatch(addAlbums(albums)))
    .catch(error => dispatch(albumsFailed(error.message)));
}

export const albumsLoading = () => ({
    type: ActionTypes.ALBUMS_LOADING
});

export const albumsFailed = (errmess) => ({
    type: ActionTypes.ALBUMS_FAILED,
    payload: errmess
});

export const addAlbums = (albums) => ({
    type: ActionTypes.ADD_ALBUMS,
    payload: albums
});


export const fetchBooks = () => (dispatch) => {

    dispatch(booksLoading(true));

    return fetch(baseUrl + 'books')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }, 
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(books => dispatch(addBooks(books)))
    .catch(error => dispatch(booksFailed(error.message)));
}

export const booksLoading = () => ({
    type: ActionTypes.BOOKS_LOADING
});

export const booksFailed = (errmess) => ({
    type: ActionTypes.BOOKS_FAILED,
    payload: errmess
});

export const addBooks = (books) => ({
    type: ActionTypes.ADD_BOOKS,
    payload: books
});


export const fetchMovies = () => (dispatch) => {

    dispatch(moviesLoading(true));

    return fetch(baseUrl + 'movies')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }, 
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(movies => dispatch(addMovies(movies)))
    .catch(error => dispatch(moviesFailed(error.message)));
}

export const moviesLoading = () => ({
    type: ActionTypes.MOVIES_LOADING
});

export const moviesFailed = (errmess) => ({
    type: ActionTypes.MOVIES_FAILED,
    payload: errmess
});

export const addMovies = (movies) => ({
    type: ActionTypes.ADD_MOVIES,
    payload: movies
});


//

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }, 
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
            var errmess = new Error(error.message);
            throw errmess;
    })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

//

export const fetchLeaders = () => (dispatch) => {

    dispatch(leadersLoading());

    return fetch(baseUrl + 'leaders')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message)));
}

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess

});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});

//

export const postFeedback = (feedback) => (dispatch) => {

    return fetch(baseUrl + 'feedback', {
        method: "POST",
        body: JSON.stringify(feedback),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(alert('Thank you for your feedback'))
        .catch(error => {
            console.log('post feedback', error.message);
            alert('Your feedback could not be given\nError: ' + error.message);
        });
}