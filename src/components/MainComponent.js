import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';

import Music from './MusicComponent';
import Books from './BooksComponent';
import Movies from './MoviesComponent';

import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

import { ALBUMS } from '../shared/albums';
import { BOOKS } from '../shared/books';
import { MOVIES } from '../shared/movies';

import { fetchDishes, fetchPromos, fetchLeaders, postFeedback, fetchAlbums, fetchBooks, fetchMovies } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        promotions: state.promotions,
        leaders: state.leaders,

        albums: state.albums,
        books: state.books,
        movies: state.movies
    }
}   

const mapDispatchToProps = dispatch => ({
    fetchDishes: () => { dispatch(fetchDishes())},
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),
    postFeedback: (feedback) => dispatch(postFeedback(feedback)),

    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchBooks: () => dispatch(fetchBooks()),
    fetchMovies: () => dispatch(fetchMovies())
});  

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            promotions: PROMOTIONS,
            leaders: LEADERS,

            albums: ALBUMS,
            books: BOOKS,
            movies: MOVIES
        };
    }   

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchPromos();

        this.props.fetchLeaders();

        this.props.fetchAlbums();
        this.props.fetchBooks();
        this.props.fetchMovies();
    }
    
    render() {
        const HomePage = () => {
            return(
                <Home 
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}

                    promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                    promoLoading={this.props.promotions.isLoading}
                    promoErrMess={this.props.promotions.errMess}

                    leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                    leadersLoading={this.props.leaders.isLoading}
                    leadersErrMess={this.props.leaders.errMess}
                    
                    book={this.props.books.books.filter((book) => book.featured)[0]}
                    movie={this.props.movies.movies.filter((movie) => movie.featured)[0]}
                    album={this.props.albums.albums.filter((album) => album.featured)[0]}
                />  
            );
        }
        
        return (
            <div>
                <Header />
                    <TransitionGroup>
                        <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                            <Switch location={this.props.locationitch}>
                                <Route path='/home' component={HomePage} />                                
                                <Route exact path='/about' render={() => <About resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
                                <Route exact path='/music' render={() => <Music albums={this.props.albums} />} />
                                <Route exact path='/books' render={() => <Books books={this.props.books} />} />
                                <Route exact path='/movies' render={() => <Movies movies={this.props.movies} />} />
                                <Redirect to="/home" />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
