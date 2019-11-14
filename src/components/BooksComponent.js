import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { Link } from 'react-router-dom';
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
                            Sample text here
                        </CardText>
                        <Button variant="primary">Button</Button>
                    </CardBody>
                </Card>
            </div>
        </Fade>
    );
}

const Books = (props) => {
    alert(JSON.stringify(props))
    const books = props.books.books.map((book) => {
        return (
            <RenderBooks book={book} />
        );
    });

    return (
        <div>
            <h1>Books</h1> 
            {books}
        </div>
    )
}

export default Books;