import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


const RenderMovies = (movie) => {
    return (
        <Fade in exitOpacity={0.35}>
            <div key={movie.id} >
                <Card tag="li" style={{ width: '18rem' }}>
                    <CardImg src={baseUrl + movie.movie.image} alt={movie.movie.name}/>
                    <CardBody>
                        <CardTitle>{movie.movie.name}</CardTitle>
                        <CardText>
                            Sample text here
                        </CardText>
                        <Button variant="primary">Button</Button>
                    </CardBody>
                </Card>
            </div>
        </Fade>
    );
}

const Movies = (props) => {
    const movies = props.movies.movies.map((movie) => {
        return (
            <div className="col-12 col-md-5 m-1">
                <RenderMovies movie={movie} />
            </div>
        );
    });

    return (
        <div className="container justify-content-center">
            <div className="row">
                <h1>Movies</h1> 
            </div>
            <div className="row">
                {movies}
            </div>
        </div>
    )
}

export default Movies;