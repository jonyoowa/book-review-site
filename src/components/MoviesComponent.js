import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { Link } from 'react-router-dom';
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
    alert(JSON.stringify(props))
    const movies = props.movies.movies.map((movie) => {
        return (
            <RenderMovies movie={movie} />
        );
    });

    return (
        <div>
            <h1>Movies</h1> 
            {movies}
        </div>
    )
}

export default Movies;