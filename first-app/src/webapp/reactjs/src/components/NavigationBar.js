import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" style={{marginBottom: '30px'}}>
                <Link to={""} className="navbar-brand">
                    <img style={{marginLeft: 15, padding: 7}} alt=""
                         src="https://cdn.iconscout.com/icon/premium/png-256-thumb/hedgehog-1409568-1192661.png"
                         width="80"/>
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