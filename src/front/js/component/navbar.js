import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
};

export default Navbar;

