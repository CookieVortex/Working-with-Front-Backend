import React from "react";

import Navbar from 'react-bootstrap/Navbar';
import {Col} from "react-bootstrap";

class Footer extends React.Component {
    render() {
        let fullYear = new Date().getFullYear();
        return (
            <Navbar style={{padding: "20px"}} fixed="bottom" expand="lg" variant="light" bg="dark">
                <Col lg={12} className="text-center text-muted">
                    <div>{fullYear}-{fullYear + 1}, All Rights Reserved by Who?</div>
                </Col>
            </Navbar>
        );
    }
}

export default Footer;