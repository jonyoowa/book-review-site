import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { Fade, Stagger } from 'react-animation-components';

const RenderLeader = (props) => {
    if (props.leader != null) {
        const leader = props.leader;
        return (
            <Fade in exitOpacity={0.35}>
                <div key={leader.id} >
                    <Media tag="li">
                        <Media left top>
                            <Media object src={leader.image} alt={leader.name} />
                        </Media>
                        <Media body className="ml-4 mb-4 text-left">
                            <Media heading>{leader.name}</Media>
                            <p>{leader.designation}</p>
                            <p>{leader.description}</p>
                        </Media>
                    </Media>
                </div>
            </Fade>
        );
    } else {
        return (<div></div>);
    }
}

function Genres(props) {

    const leaders = props.leaders.leaders.map((leader) => {
        return (
            <Stagger in chunk={2} delay={250}>
                <RenderLeader leader={leader} />
            </Stagger>
        );
    });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Genres</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Top Genres</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        {leaders}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default Genres;