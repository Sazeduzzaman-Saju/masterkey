import { useState } from "react";
import './Header.css'
import { BiChevronRight } from "react-icons/bi";




const App = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Home", src: "https://i.ibb.co/MkjzGjt/download-1-1.png" },
        { title: "Explore", src: "https://i.ibb.co/XyDv0xg/download-2-1.png" },
        { title: "Saved", src: "https://i.ibb.co/TMSBdQm/download-3-1.png", gap: true },
        { title: "Cart ", src: "https://i.ibb.co/DRz64CB/download-4-1.png" },
        { title: "Selling", src: "https://i.ibb.co/Hrhbmz0/download-5-1.png" },
        { title: "Profile", src: "https://i.ibb.co/C1Lb4Kz/download-7-1.png" },
        { title: "History ", src: "https://i.ibb.co/cLqQy2x/download-6-1.png", gap: true },
        { title: "Contact us", src: "https://i.ibb.co/mCHzdFQ/icons8-messages-50-1.png" },
        { title: "Setting", src: "https://i.ibb.co/0MY98SL/icons8-settings-100-1.png" },
    ];

    return (
        <div className="flex ">
            <div
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
                        <li
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black font-semibold text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-2" : "mt-2"} ${index === 0 && "bg-light-white"
                                } `}
                        >
                            <img src={`${Menu.src}.png`} alt="/" />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                {Menu.title}
                            </span>
                        </li>
                    ))}
                    <div className="menu_banner flex flex-col justify-center items-center px-4 pt-16 mt-6 rounded-sm w-full">
                        <h1 className="banner_1_title text-white text-2xl ">Need Help</h1>
                        <p className="banner_1_title text-white text-lg pb-3 text-center">Lorem Ipsum is simply
                            dummy text of the
                            printing and typesetting
                            industry. Lorem Ipsum </p>
                        <button className="btn btn-primary">Customer Service</button>
                    </div>
                </ul>
            </div>
            <div className="h-screen flex-1 p-7">
                <h1 className="text-2xl font-semibold ">Home Page</h1>
            </div>
        </div>
    );
};
export default App;
