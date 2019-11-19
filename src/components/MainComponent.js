import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';

import Music from './MusicComponent';
import Books from './BooksComponent';
import Movies from './MoviesComponent';
import DetailedMediaReview from './MediaReviewComponent';

import { ALBUMS } from '../shared/albums';
import { BOOKS } from '../shared/books';
import { MOVIES } from '../shared/movies';

import { fetchAlbums, fetchBooks, fetchMovies } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
        albums: state.albums,
        books: state.books,
        movies: state.movies
    }
}   

const mapDispatchToProps = dispatch => ({
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchBooks: () => dispatch(fetchBooks()),
    fetchMovies: () => dispatch(fetchMovies())
});  

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: ALBUMS,
            books: BOOKS,
            movies: MOVIES
        };
    }   

    componentDidMount() {
        this.props.fetchAlbums();
        this.props.fetchBooks();
        this.props.fetchMovies();
    }
    
    render() {
        const HomePage = () => {
            return(
                <Home 
                    book={this.props.books.books.filter((book) => book.featured)[0]}
                    movie={this.props.movies.movies.filter((movie) => movie.featured)[0]}
                    album={this.props.albums.albums.filter((album) => album.featured)[0]}
                />  
            );
        }
        
        const DetailedAlbumReview = ({match}) => {
            // alert("DetailedAlbumReview " + JSON.stringify(match));
            // alert(JSON.stringify(this.props.match.params));
            // alert(JSON.stringify(this.props.albums.albums));

            return(
                <DetailedMediaReview
                    item={this.props.albums.albums.filter((album) => album.id === parseInt(match.params.albumId,10))[0]}
                    category="Music"
                />
            );
        };

        const DetailedBookReview = ({match}) => {
            return(
                <DetailedMediaReview
                    item={this.props.books.books.filter((book) => book.id === parseInt(match.params.bookId,10))[0]}
                    category="Books"
                />
            );
        };

        const DetailedMovieReview = ({match}) => {
            return(
                <DetailedMediaReview
                    item={this.props.movies.movies.filter((movie) => movie.id === parseInt(match.params.movieId,10))[0]}
                    category="Movies"
                />
            );
        };

        return (
            <div>
                <Header />
                    <TransitionGroup>
                        <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                            <Switch location={this.props.locationitch}>
                                <Route path='/home' component={HomePage} />                                
                                <Route exact path='/about' render={() => <About resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
                                

                                <Route exact path='/music' render={() => <Music albums={this.props.albums} />} />
                                <Route path='/music/:albumId' component={DetailedAlbumReview} />

                                <Route exact path='/books' render={() => <Books books={this.props.books} />} />
                                <Route path='/music/:bookId' component={DetailedBookReview} />

                                <Route exact path='/movies' render={() => <Movies movies={this.props.movies} />} />
                                <Route path='/music/:movieId' component={DetailedMovieReview} />


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
