import React from 'react';
import ProductCarousel from '../../comps/ProductCarousel/ProductCarousel';
import useWebTitle from '../../hook/useWebTitle';
import Banner from './Banner/Banner';

const Home = () => {
    useWebTitle('Home')
    return (
        <div className='max-w-5xl mx-auto'>
            <Banner></Banner>
            <div className=''>
                <div className='mr-5'>
                    <ProductCarousel></ProductCarousel>
                </div>
                <div>
                    <img src="https://i.ibb.co/r2ctXYZ/Frame-23.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;