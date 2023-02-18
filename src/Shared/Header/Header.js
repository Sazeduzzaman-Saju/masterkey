
import ExtraLayout from '../../layout/ExtraLayout/ExtraLayout';
import './Header.css'

// import Home from "../../Page/Home/Home";
// import Main from "../../layout/Main";




const Header = () => {


    return (
        <div className="flex">
            {/* <div
                className={` ${open ? "w-72" : "w-20 "
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
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                        Designer
                    </h1>
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
                    <div className="menu_banner flex flex-col justify-center items-center px-4 pt-16 mt-6 rounded-sm w-full">
                        <h1 className="banner_1_title text-white text-2xl ">Need Help</h1>
                        <p className="banner_1_title text-white text-lg pb-3 text-center">Lorem Ipsum is simply
                            dummy text of the
                            printing and typesetting
                            industry. Lorem Ipsum </p>
                        <button className="btn btn-ghost bg-green-500 text-white outline-none mb-3">Customer Service</button>
                    </div>
                </ul>
            </div> */}
            <div className=" flex-1 p-3">
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <div>
                            <h1 className="text-2xl">Headphone</h1>
                            <p>For the top band</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="form-control">
                            <div className='max-w-md mx-auto'>
                                <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                                    <div className="grid place-items-center h-full w-12 text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>

                                    <input
                                        className="peer h-full w-full outline-none text-sm text-gray-700"
                                        type="text"
                                        id="search"
                                        placeholder="Search Product" />
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <img className="mr-3" src="https://i.ibb.co/ZY9JF6y/Frame-19.png" alt="" />
                            <img className="mr-3" src="https://i.ibb.co/6bppk4q/Frame-20.png" alt="" />
                            <img className="" src="https://i.ibb.co/DpCgJVT/Group-7.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};
export default Header;
