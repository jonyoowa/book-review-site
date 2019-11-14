import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
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
            <RenderAlbums album={album} />
        );
    });

    return (
        <div>
            <h1>Music</h1> 
            {albums}
        </div>
    )
}

export default Music;