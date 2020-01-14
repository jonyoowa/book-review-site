import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


const RenderBooks = (book) => {
    return (
        <Fade in exitOpacity={0.35}>
            <div key={book.id} >
                <Card tag="li" style={{ width: '18rem' }}>
                    <CardImg src={baseUrl + book.book.image} alt={book.book.name}/>
                    <CardBody>
                        <CardTitle>{book.book.name}</CardTitle>
                        <CardText>
                        </CardText>
                        <Button variant="primary">More</Button>
                    </CardBody>
                </Card>
            </div>
        </Fade>
    );
}

const Books = (props) => {
    const books = props.books.books.map((book) => {
        return (
            <div className="col-4 col-md-4 m-6 pb-2">
                <RenderBooks book={book} />
            </div>
        );
    });

    return (
        <div className="container justify-content-center">
            <div className="row">
                <h1>Books</h1> 
            </div>
            <div className="row">
                {books}
            </div>
        </div>
    )
}

export default Books;