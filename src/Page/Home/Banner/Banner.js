import React from 'react';

const Banner = () => {
    return (
        <div className='flex  justify-between '>
            <div className="shadow-lg mr-5">

                <div className='flex py-5'>
                    <div className="flex items-center justify-center  ">
                        <img src="https://i.ibb.co/9pXPxMd/g835-SLOHDG-F-1-removebg-preview-1.png " alt="" className="object-contain" />
                    </div>
                    <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-lg font-semibold">Beats Studio3 Wireless Headphone
                        </h1>
                        <div className='flex mr-3'>
                            <img src="https://i.ibb.co/Trcskhd/icons8-starburst-shape-30-1.png" alt="" />
                            <img src="https://i.ibb.co/Trcskhd/icons8-starburst-shape-30-1.png" alt="" />
                            <img src="https://i.ibb.co/Trcskhd/icons8-starburst-shape-30-1.png" alt="" />
                            <img src="https://i.ibb.co/Trcskhd/icons8-starburst-shape-30-1.png" alt="" />
                            <img src="https://i.ibb.co/Trcskhd/icons8-starburst-shape-30-1.png" alt="" />
                            <div className='ml-3'>
                                <p>( 200+ Reviews )</p>
                            </div>
                        </div>
                        <p>Ergonomic or cupe with on-oor controls up to 22 hours of tening time. Apple Wi crip & Closs </p>
                        <p className='text-[#07FFD2] pt-3'>Price $ 450.55</p>
                        <div>
                            <div className='flex justify-start items-center pt-3'>
                                <p>color:</p>
                                <img className='ml-3' src="https://i.ibb.co/VY9gfSk/Group-8.png" alt="" />
                            </div>
                        </div>
                        <div className='flex justify-start items-center pt-5'>
                            <button className="btn btn-outline hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center mr-3">
                                <img src="https://i.ibb.co/rMYmYNL/icons8-filled-heart-32-1-1.png" alt="" />
                            </button>

                            <button className="outline btn btn-ghost outline-green-500  mr-3">Add to card</button>

                            <button className="btn btn-outline hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                                <span>Buy Now</span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/hM6HqBk/Frame-22.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;