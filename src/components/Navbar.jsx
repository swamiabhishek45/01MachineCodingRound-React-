import React from "react";
import { Link } from "react-router-dom";

// #6e6eaa
// bg-[#e2bbe8] 
// text-[#454a7a]

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-center items-center">
                <div className="flex space-x-4">
                    <Link to="/otp-form" className="text-gray-300 hover:text-white">
                        OTP Form
                    </Link>
                    <Link
                        to="/course-list"
                        className="text-gray-300 hover:text-white"
                    >
                        Drag & Drop Table
                    </Link>
                    <Link
                        to="/batches"
                        className="text-gray-300 hover:text-white"
                    >
                        Data Table
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
