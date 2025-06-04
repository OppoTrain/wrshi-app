import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import RegisterForm from "./components/forms/RegisterForm";

const Page = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <RegisterForm />
            <Footer />
        </>
    );
};

export default Page;
