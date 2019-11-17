import React, { Component } from 'react';
import { 
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/music'><span className="fa fa-address-card fa-lg"></span> Music</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/books'><span className="fa fa-address-card fa-lg"></span> Books</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/movies'><span className="fa fa-address-card fa-lg"></span> Movies</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/about'><span className="fa fa-info fa-lg"></span> About</NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1 className="jumbotron-text">Jon's Favorites</h1>
                                <p className="jumbotron-text">My favorite music, books, and movies!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;