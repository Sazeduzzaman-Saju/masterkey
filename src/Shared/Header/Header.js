
import ExtraLayout from '../../layout/ExtraLayout/ExtraLayout';
import './Header.css'

// import Home from "../../Page/Home/Home";
// import Main from "../../layout/Main";




const Header = () => {


    return (
        <div className="flex">
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
