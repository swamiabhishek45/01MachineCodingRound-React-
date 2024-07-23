import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-center items-center">
                <div className="flex space-x-4">
                    <Link to="/" className="text-gray-300 hover:text-white">
                        OTP Form
                    </Link>
                    <Link
                        to="/about"
                        className="text-gray-300 hover:text-white"
                    >
                        Drag & Drop Table
                    </Link>
                    <Link
                        to="/contact"
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
