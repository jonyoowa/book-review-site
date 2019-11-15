import React from 'react';
import { 
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle 
} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

function RenderCard({item}) {
    return(
        <FadeTransform in transformProps={{ exitTransform: 'scale(0.5) translateY(-50%)' }}>
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        </FadeTransform>
    );
}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.book ? props.book : {} } />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.movie ? props.movie : {} } />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.album ? props.album : {} } />
                </div>
            </div>
        </div>
    );
}

export default Home;