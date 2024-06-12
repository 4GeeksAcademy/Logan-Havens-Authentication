import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Private = () => {
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const token = sessionStorage.getItem('token');
            if (!token) {
                navigate('/login');
                return;
            }
            try {
                const response = await axios.get(`${process.env.BACKEND_URL}/private`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setData(response.data);
            } catch (error) {
                console.error('Error fetching private data', error);
                navigate('/login');
            }
        };
        fetchData();
    }, [navigate]);

    return data ? <div>Welcome, {data.logged_in_as.email}</div> : <div>Loading...</div>;
};

export default Private;

