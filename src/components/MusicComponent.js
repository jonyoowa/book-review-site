import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Container, Row, Col
} from 'reactstrap';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { Link } from 'react-router-dom';


const RenderAlbums = (album) => {
    //alert("Render album " + album.album.id);
    return (
        <Fade in exitOpacity={0.35}>
            <div key={album.album.id} >
                <Card tag="li" style={{ width: '18rem' }}>
                    <CardImg src={baseUrl + album.album.image} alt={album.album.name}/>
                    <CardBody>
                        <CardTitle>{album.album.name}</CardTitle>
                        <CardText>
                            Sample text here
                        </CardText>

                        <Link to={`/music/${album.album.id}`}>
                            <Button variant="primary">
                                More
                            </Button>
                        </Link>

                    </CardBody>
                </Card>
            </div>
        </Fade>
    );
}

const Music = (props) => {
    //alert("Music " + JSON.stringify(props.albums.albums[0]));
    const albums = props.albums.albums.map((album) => {
        return (
            <div className="col-4 col-md-4 m-6 pb-2">
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