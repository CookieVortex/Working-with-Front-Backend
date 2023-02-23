import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Link to={""} className="navbar-brand">
                    <img style={{marginLeft: 15, padding: 10}} alt=""
                         src="https://ltdfoto.ru/images/2023/02/22/Screenshot_38f3b2d8a03a4ba9b4.png" width="80"/>
                </Link>
                <Nav className="mr-auto">
                    <Link to={"welcome"} className="nav-link">HomePage</Link>
                    <Link to={"add"} className="nav-link">Add Book</Link>
                    <Link to={"list"} className="nav-link">Book List</Link>
                </Nav>
            </Navbar>
        )
    }
}

export default NavigationBar;