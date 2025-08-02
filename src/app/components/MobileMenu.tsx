"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import DownloadButton from "./DownloadButton";



const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleScrollToForm = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div
                className="md:hidden order-1"
                onClick={() => setIsOpen(!isOpen)}
            >
                <IoMdMenu size={30} />
            </div>

            <div
                className={`fixed top-0 left-0 w-[60%] h-full bg-white shadow-md transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out z-500 md:hidden`}
            >
                <div
                    className="absolute top-0 right-0  cursor-pointer mb-3 bg-[#366585] text-white p-1"
                    onClick={() => setIsOpen(false)}
                >
                    <IoMdClose size={30} />
                </div>
                <ul className="flex flex-col p-6 space-y-4 mt-12">
                    <Link href={"/#register"}>
                        <button
                            className="w-full px-4 py-2 cursor-pointer bg-white border-3 border-[#366585] rounded-2xl text-[#366585] text-lg"
                            onClick={handleScrollToForm}
                        >
                            سجل الان
                        </button>
                    </Link>
                    <li>
                        <DownloadButton />
                    </li>
                </ul>
            </div>
        </>
    );
};

export default MobileMenu;
