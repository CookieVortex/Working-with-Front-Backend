import React from "react";
import "./App.css";

import NavigationBar from "./components/NavigationBar";

import Footer from "./components/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Welcome from "./components/Welcome";
import Book from "./components/Book/Book";
import BookList from "./components/Book/BookList";


const App = () => {
    return (
        <Router>
            <NavigationBar/>

            <Routes>
                <Route exact path="/welcome" element={<Welcome/>}/>
                <Route exact path="/add" element={<Book/>}/>
                <Route exact path="/List" element={<BookList/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
