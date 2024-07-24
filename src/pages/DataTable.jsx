import React from "react";
import Logo from "../assets/logo.png";

const DataTable = () => {
    return (
        <div className="bg-[#e2bbe8] min-h-screen text-black flex flex-col items-center">
            <h1 className="text-5xl font-bold text-center p-10 text-[#454a7a]">
                Chai aur Code
            </h1>
            <div className="flex flex-col md:flex-row gap-10 items-center justify-center w-full px-4">
                {/* Container */}
                <div className="bg-white w-full max-w-6xl h-[500px] rounded-lg shadow-lg p-5 ">
                    <h2 className="text-2xl font-semibold">Manage Bundles</h2>
                </div>
            </div>

            {/* Logo */}
            <div className="fixed right-5 bottom-5">
                <a href="https://chaicode.com" target="_blank">
                    <img src={Logo} alt="logo" className="w-20 rounded-md" />
                </a>
            </div>
        </div>
    );
};

export default DataTable;
