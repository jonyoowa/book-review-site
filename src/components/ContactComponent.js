import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';

// const required = (val) => val && val.length;
// const maxLength = (len) => (val) => !(val) || (val.length <= len);
// const minLength = (len) => (val) => val && (val.length >= len);
// const isNumber = (val) => !isNaN(Number(val));
// const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
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
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>About Better Book Reviews</h3>
                            <p>Better Book Reviews is an independent websiet for people with specific tastes in reading.</p>
                        </div>                
                    </div>

                    <div className="row row-content">
                        <div className="col-12">
                            <h3>How to use this site</h3>
                            <p>Get our list of reccomended books!</p>
                            <p>See the hottest books by genre!</p>
                            <p>View personal reviews made by the community to add on to your reading list!</p>
                        </div>
                    </div>
                </div>    

                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3>Follow Us</h3>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 btn-group" role="group">
                                <a role="button" className="btn btn-primary"><i className="fa fa-facebook"></i> Facebook</a>
                                <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                                <a role="button" className="btn btn-success"><i className="fa fa-linkedin"></i> Linkedin</a>
                                <a role="button" className="btn btn-success"><i className="fa fa-pinterest"></i> Pinterest</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;