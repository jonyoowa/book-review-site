import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Container, Row, Col
} from 'reactstrap';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


const RenderAlbums = (album) => {
    return (
        <Fade in exitOpacity={0.35}>
            <div key={album.id} >
                <Card tag="li" style={{ width: '18rem' }}>
                    <CardImg src={baseUrl + album.album.image} alt={album.album.name}/>
                    <CardBody>
                        <CardTitle>{album.album.name}</CardTitle>
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

const Music = (props) => {
    const albums = props.albums.albums.map((album) => {
        return (
            <div className="col-4 col-md-4 m-6">
                <RenderAlbums album={album} />
            </div>
        );
    });

    return (
        <div className="container justify-content-center">
            <div className="row">
                <h1>Music</h1> 
            </div>
            <div className="row">
                {albums}
            </div>
        </div>
    )
}

export default Music;