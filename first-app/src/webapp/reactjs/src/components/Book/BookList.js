import React, {Component} from "react";
import {Card, Table} from "react-bootstrap";

export default class BookList extends Component {
    render() {
        return (
            <Card className={" border-dark bg-dark text-white text-center text-muted"}
                  style={{margin: 45, padding: 30}}>
                <Card.Header>Book List</Card.Header>
                <Card.Body>
                    <Table bordered hover striped variant="dark">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Number</th>
                            <th>Price</th>
                            <th>Language</th>
                            <th>Actions</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr align="center">
                            <td colSpan="6">No Books Available</td>
                        </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}
