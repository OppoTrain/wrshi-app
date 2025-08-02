import React from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import DownloadButton from "./DownloadButton"; // Import your download component

const Navbar = () => {


    return (
        <div className="bg-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 pt-12 text-black">
            <div className="order-2">
                <a href="#">
                    <img
                        src="/images/logo.png"
                        alt="logo"
                        loading="lazy"
                        className="w-33 h-17 md:w-43 md:h-21"
                    />
                </a>
            </div>

            <ul className="hidden md:flex order-1 space-x-8">
                
                
                
            
                
                <Link href={"/#register"}>
                    <button className="cursor-pointer text-lg px-8 py-3 bg-white border-3 border-[#247BA0] rounded-2xl text-[#247BA0] hover:bg-[#247BA0] hover:text-white transition w-[155px]">
                        سجل الان
                    </button>
                </Link>
                <li>
                <DownloadButton />
                </li>
            </ul>
            <MobileMenu />
        </div>
    );
};

export default Navbar;
