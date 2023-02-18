import React, { useEffect, useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { Link, Outlet } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import Header from '../Shared/Header/Header';
import ExtraLayout from './ExtraLayout/ExtraLayout';

const Main = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, [])

    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Home", to: "/", src: "https://i.ibb.co/MkjzGjt/download-1-1.png" },
        { title: "Explore", src: "https://i.ibb.co/XyDv0xg/download-2-1.png" },
        { title: "Saved", src: "https://i.ibb.co/TMSBdQm/download-3-1.png", gap: true },
        { title: "Cart ", src: "https://i.ibb.co/DRz64CB/download-4-1.png" },
        { title: "Selling", src: "https://i.ibb.co/Hrhbmz0/download-5-1.png" },
        { title: "Profile", src: "https://i.ibb.co/C1Lb4Kz/download-7-1.png" },
        { title: "History ", src: "https://i.ibb.co/cLqQy2x/download-6-1.png", gap: true },
        { title: "Contact us", to: "/about", src: "https://i.ibb.co/mCHzdFQ/icons8-messages-50-1.png" },
        { title: "Setting", src: "https://i.ibb.co/0MY98SL/icons8-settings-100-1.png" },
    ];
    return (
        <div>
            {
                loading ?
                    <div className=''>
                        <div className='row'>
                            <div className='flex justify-center items-center' style={{ height: '100vh' }}>
                                <PuffLoader color={'#4568dc'} loading={loading} size={150} />
                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex'>
                        <div className={` ${open ? "w-72" : "w-20 "
                            } bg-dark-purple p-5  relative duration-300 shadow-xl`}
                        >
                            <BiChevronRight className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}></BiChevronRight>

                            <div className="flex gap-x-4 items-center ">
                                <img
                                    src="https://i.ibb.co/3CvrwTn/Group-6.png"
                                    className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                                        }`}
                                    alt="/" />
                            </div>
                            <ul className=" pt-5 pb-5">
                                {Menus.map((Menu, index) => (
                                    <Link to={`${Menu.to}`}
                                        key={index}
                                        className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black font-semibold text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-2" : "mt-2"} ${index === 0 && "bg-light-white"
                                            } `}
                                    >
                                        <img src={`${Menu.src}.png`} alt="/" />
                                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                                            {Menu.title}
                                        </span>
                                    </Link>
                                ))}
                                <div className="menu_banner flex flex-col justify-center items-center px-4 pt-16 mt-6 rounded-sm">
                                    <h1 className="banner_1_title text-white text-2xl ">Need Help</h1>
                                    <p className="banner_1_title text-white text-lg pb-3 text-center">Lorem Ipsum is simply
                                        dummy text of the
                                        printing and typesetting
                                        industry. Lorem Ipsum </p>
                                    <button className="btn btn-ghost bg-green-500 text-white outline-none mb-3">Customer Service</button>
                                </div>
                            </ul>
                        </div>
                        <div className='w-full'>
                            <Header></Header>
                            <Outlet></Outlet>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Main;