import React from 'react';
import useWebTitle from '../../hook/useWebTitle';

const Home = () => {
    useWebTitle('Home')
    return (
        <div>
            <h1>this is Home</h1>
        </div>
    );
};

export default Home;