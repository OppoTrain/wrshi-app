"use client";
import React, { startTransition, useState } from "react";
import WorkerForm from "./WorkerForm";
import EmployerForm from "./EmployerForm";

const RegisterForm = () => {
    const [activeTab, setActiveTab] = useState<number>(1);
    const handleTabChange = (tabIndex: number) => {
        startTransition(() => {
            setActiveTab(tabIndex);
        });
    };

    return (
        <section
            className="py-8 px-4 flex flex-col items-center text-center"
            id="register"
        >
            <div className="bg-white py-10 px-6 sm:px-10 md:px-20 rounded-2xl shadow-lg w-full max-w-5xl">
                <div className="flex justify-center mb-8">
                    <div className="flex flex-col sm:flex-row rounded-xl border border-[#247BA0] gap-2 py-1 px-2 ">
                        <button
                            className={`px-8 sm:px-12 py-2 text-lg sm:text-xl font-medium focus:outline-none transition duration-200 ease-in-out cursor-pointer ${
                                activeTab === 1
                                    ? "bg-[#247BA0] text-white rounded-3xl"
                                    : "hover:bg-gray-100 text-gray-800 rounded-3xl"
                            }`}
                            onClick={() => handleTabChange(1)}
                        >
                            {"عامل"}
                        </button>
                        <button
                            className={`px-8 sm:px-12 py-2 text-lg sm:text-xl font-medium focus:outline-none transition duration-200 ease-in-out cursor-pointer ${
                                activeTab === 2
                                    ? "bg-[#247BA0] text-white rounded-3xl"
                                    : "hover:bg-gray-100 text-gray-800 rounded-3xl"
                            }`}
                            onClick={() => handleTabChange(2)}
                        >
                            {"مشغل"}
                        </button>
                    </div>
                </div>

                <div className="transition-all duration-500 ease-in-out">
                    {activeTab === 1 && <WorkerForm />}
                    {activeTab === 2 && <EmployerForm />}
                </div>
            </div>
        </section>
    );
};

export default RegisterForm;
