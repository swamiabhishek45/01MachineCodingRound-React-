import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import data from "../../public/data/batches_data.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const PaginatedTable = () => {
    const [batches, setBatches] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3); // Default to 3 rows per page

    useEffect(() => {
        // Fetch data from JSON file
        setBatches(data);
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(parseInt(e.target.value));
        setCurrentPage(0); // Reset to the first page when items per page change
    };

    const filteredBatches = batches.filter((batch) =>
        batch.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const offset = currentPage * itemsPerPage;
    const currentPageData = filteredBatches.slice(
        offset,
        offset + itemsPerPage
    );
    const pageCount = Math.ceil(filteredBatches.length / itemsPerPage);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };
    return (
        <div className="container mx-auto ">
            <div className="flex gap-2 my-5">
                <input
                    type="text"
                    placeholder="Search by Title (alt+k or cmd+k)"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="border text-sm border-gray-300 rounded-sm p-2 w-64 outline-none"
                />
                <button className="px-5 text-white p-2 rounded-sm bg-[#6e6eaa]">
                    Search
                </button>
            </div>
            <table className="min-w-full bg-white  border-black border rounded-[10px]">
                <thead className="bg-[#f2f2f2] border border-black">
                    <tr>
                        <th className="border w-[400px] border-black text-start rounded-lg py-2 px-4">
                            Title
                        </th>
                        <th className="border border-black py-4 px-4">
                            Start Date
                        </th>
                        <th className="border border-black py-4 px-4">
                            End Date
                        </th>
                        <th className="border border-black py-4 px-4">Price</th>
                        <th className="border border-black py-4 px-4">
                            Validity/Expiry
                        </th>
                        <th className="border border-black py-4 px-4">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentPageData.map((batch, index) => (
                        <tr key={index} className="text-sm border-black">
                            <td className="border-x border-black px-4 py-2">
                                <div className="flex gap-2 items-center">
                                    <img
                                        src={batch.imageUrl}
                                        alt={`img${index + 1}`}
                                        width="100px"
                                        className="rounded-md m-2"
                                    />
                                    <span>{batch.title}</span>
                                </div>
                            </td>
                            <td className="border-x border-black px-4 py-2">
                                {batch.startDate}
                            </td>
                            <td className="border-x border-black px-4 py-2">
                                {batch.endDate}
                            </td>
                            <td className="border-x border-black px-4 py-2">
                                {batch.price}
                            </td>
                            <td className="border-x border-black px-4 py-2">
                                {batch.validityExpiry}
                            </td>
                            <td className="border-x  border-black px-4 py-2">
                                <div
                                    className={`${
                                        batch.status === "Published"
                                            ? "bg-[#dbffcf]"
                                            : "bg-[#f3f3f3]"
                                    } p-1 w-24 text-center border rounded-md`}
                                >
                                    {batch.status}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-end mt-4 gap-2 items-center">
                <p className="text-sm">Rows per page</p>
                <select
                    value={itemsPerPage}
                    onChange={handleItemsPerPageChange}
                    className="border text-sm border-gray-300 rounded-sm p-2 outline-none"
                >
                    <option value={3}>3</option>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                </select>
                <ReactPaginate
                    previousLabel={
                        pageCount === 1 ? (
                            <FaChevronLeft size="30px" color="gray" />
                        ) : (
                            <FaChevronLeft size="30px" />
                        )
                    }
                    nextLabel={<FaChevronRight size="30px" />}
                    // breakLabel={"..."}
                    // breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={0}
                    pageRangeDisplayed={0}
                    onPageChange={handlePageClick}
                    // containerClassName={"pagination"}
                    activeClassName={"active hidden"}
                    className="flex justify-end mt-4"
                    // renderOnZeroPageCount={null}
                />
            </div>
        </div>
    );
};

export default PaginatedTable;
