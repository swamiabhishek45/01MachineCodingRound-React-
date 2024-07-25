import React from "react";
import Logo from "../assets/logo.png";
import PaginatedTable from "../components/PaginatedTable";

const DataTable = () => {
    return (
        <div className="bg-[#e2bbe8] min-h-screen text-black flex flex-col items-center">
            <h1 className="text-5xl font-bold text-center p-10 text-[#454a7a]">
                Chai aur Code
            </h1>
            <div className="flex flex-col md:flex-row gap-10 items-center justify-center w-full px-4">
                {/* Container */}
                <div className="bg-[#f9f7f8] w-full max-w-6xl h-600px] rounded-lg shadow-lg p-10 mb-5">
                    <h2 className="text-2xl font-semibold">Batches</h2>
                    <p className="text-[#000000a7]">
                        Create learner’s batch and share information at the same
                        time.
                    </p>

                    <PaginatedTable />
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
