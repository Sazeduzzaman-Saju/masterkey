import React from 'react';
import FooterInfo from '../../comps/FooterInfo/FooterInfo';
import ProductCarousel from '../../comps/ProductCarousel/ProductCarousel';
import useWebTitle from '../../hook/useWebTitle';
import Banner from './Banner/Banner';

const Home = () => {
    useWebTitle('Home')
    return (
        <div className=''>
            <Banner></Banner>
            <div className='max-w-5xl'>
                <div className='flex'>
                    <div className='mr-5 mt-5 w-3/4'>
                        <ProductCarousel></ProductCarousel>
                        <div>
                            <FooterInfo></FooterInfo>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex justify-between items-center'>
                            <p>Daily Deals</p>
                            <p>View</p>
                        </div>
                        <img src="https://i.ibb.co/r2ctXYZ/Frame-23.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;