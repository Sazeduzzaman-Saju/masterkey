import React from 'react';
import useWebTitle from '../../hook/useWebTitle';
import Banner from './Banner/Banner';

const Home = () => {
    useWebTitle('Home')
    return (
        <div className='max-w-5xl mx-auto'>
            <Banner></Banner>
        </div>
    );
};

export default Home;