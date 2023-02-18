import React from 'react';
import useWebTitle from '../../hook/useWebTitle';

const Home = () => {
    useWebTitle('Home')
    return (
        <div>
            <h1>This is Home</h1>
        </div>
    );
};

export default Home;