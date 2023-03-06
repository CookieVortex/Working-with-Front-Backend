import React, {Component} from "react";
import {Button, Card, Form} from "react-bootstrap";

export default class Book extends Component {

    constructor(props) {
        super(props);
        this.state = {title: '', author: '', price: '', number: '', language: ''};
        this.bookChange = this.bookChange.bind(this);
        this.submitBook = this.bookChange.bind(this);
    }

    submitBook(event) {
        alert('Title: ' + this.state.title + ', Author: ' + this.state.author + ', Price: ' + this.state.price + ', Number: ' + this.state.number + ', Language: ' + this.state.language);
        event.preventDefault();
    }

    bookChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    render() {
        return (

            <div className="w-responsive mx-auto p-5 mt-1 w-50">
                <Card className={"border-dark bg-dark text-white"} style={{padding: 50, margin: 10, paddingTop: 20}}>
                    <Card.Header className={"text-center"}>Add Book</Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.submitBook} id="bookFormId">
                            <Form.Group className="mb-3" controlId="formGridTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control required className={"bg-dark text-white"} type="text" name="title"
                                              value={this.state.title}
                                              onChange={this.bookChange}
                                              placeholder="Enter Book Title"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridAuthor">
                                <Form.Label>Author</Form.Label>
                                <Form.Control required className={"bg-dark text-white"} type="text" name="author"
                                              value={this.state.author}
                                              onChange={this.bookChange}
                                              placeholder="Enter Book Author"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridPrice">
                                <Form.Label>Price</Form.Label>
                                <Form.Control required className={"bg-dark text-white"} type="text" name="price"
                                              value={this.state.price}
                                              onChange={this.bookChange}
                                              placeholder="Enter Price"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridNumber">
                                <Form.Label>Number</Form.Label>
                                <Form.Control required className={"bg-dark text-white"} type="text" name="number"
                                              value={this.state.number}
                                              onChange={this.bookChange}
                                              placeholder="Enter Number"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridLanguage">
                                <Form.Label>Language</Form.Label>
                                <Form.Control required className={"bg-dark text-white"} type="text" name="language"
                                              value={this.state.language}
                                              onChange={this.bookChange}
                                              placeholder="Enter Language"/>
                            </Form.Group>

                            <Button variant="success" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                    <Card.Footer>

                    </Card.Footer>
                </Card>

            </div>

        );
    }
}