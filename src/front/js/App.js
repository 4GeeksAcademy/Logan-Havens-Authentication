import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Private from './components/Private';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/private" element={<Private />} />
            </Routes>
        </Router>
    );
};

export default App;


