import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

class About extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: { ...this.state.touched, [field]: true },
        });
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.props.resetFeedbackForm();
        // event.preventDefault();
    }

    render() {
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>About</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>    
                <div className="container pb-4">
                    <div className="row">
                        <div className="col-12">
                            <h3>About Jon's Favorites</h3>
                            <p>Reviews of my favorite music, books, and movies.</p>
                        </div>                
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h3>How to use this site</h3>
                            <p>See my list of reccomended music/books/movies!</p>
                            <p>This website displays a collection of my favorite media.</p>
                            <p>Click on the card to view a more detailed overview of why I hold the album/book/movie in esteem.</p>
                        </div>
                    </div>
                </div>    
                <div className="container pb-4">
                    <div className="row">
                        <div className="col-12">
                            <h3>Follow Us</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 btn-group" role="group">
                            <a role="button" className="btn btn-primary"><i className="fa fa-facebook"></i> Facebook</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-secondary"><i className="fa fa-linkedin"></i> Linkedin</a>
                            <a role="button" className="btn btn-danger"><i className="fa fa-pinterest"></i> Pinterest</a>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}

export default About;