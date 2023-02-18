import React from 'react';

const FooterInfo = () => {
    return (
        <div>
            <div className='flex mt-10 ml-3'>
                <h1 className='text-[#66FF1E]'>Explore The Popular Categories</h1>
                <p className='ml-3'>See all </p>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex shadow-lg mt-5 mr-5 p-10 rounded-lg'>
                    <div className='border-r-4 '>
                        <img src="https://i.ibb.co/hK9pxXT/Group-10.png" className='mr-3' alt="" />
                    </div>
                    <div className='ml-3'>
                        <h1 className='font-semibold'>Popular top 10 brands</h1>
                        <p>$400+ Orders & reviews</p>
                    </div>
                </div>
                <div className='flex shadow-lg mt-5 p-10 rounded-lg'>
                    <div className='border-r-4'>
                        <img src="https://i.ibb.co/hK9pxXT/Group-10.png" className='mr-3' alt="" />
                    </div>
                    <div className='ml-3'>
                        <h1 className='font-semibold'>Popular top 10 brands</h1>
                        <p>$400+ Orders & reviews</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FooterInfo;