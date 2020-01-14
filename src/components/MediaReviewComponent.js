import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem,
    Button, Modal, ModalHeader, ModalBody,
    Input, Label, Container, Row 
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';  

const DetailedMediaReview = (props) => {
    if (props.item != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>{props.category}</BreadcrumbItem>
                        <BreadcrumbItem>{props.item.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card style={{ width: '24rem' }}>
                            <CardImg src={baseUrl + props.item.image} alt={props.item.name}/>
                            <CardBody>
                                <CardTitle>{props.item.name}</CardTitle>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <Card className="mb-2">
                            <CardBody>
                                <CardTitle>{props.category} Review: {props.item.name}</CardTitle>
                            </CardBody>
                        </Card>
                        <Card className="mb-2">
                            <CardBody>
                                <CardText>{props.item.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        );
    } else {
        return (<div></div>);
    }
}

export default DetailedMediaReview;