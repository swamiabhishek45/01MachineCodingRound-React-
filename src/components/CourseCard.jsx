import React, { useEffect, useRef, useState } from "react";
import { MdDragIndicator } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";

const CourseCard = ({
    course,
    moveToTop = () => {},
    moveToBottom = () => {},
    removeCard = () => {},
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="bg-white max-w-[960px] shadow-custom rounded-lg h-20 flex items-center justify-between relative">
                {/* Rightbox  */}
                <div className=" ml-4 flex items-center space-x-4">
                    <MdDragIndicator size="30px" color="gray" />
                    <img
                        src={course.image}
                        alt={course.title}
                        className="rounded-md w-28"
                    />
                    <h2>{course.title}</h2>
                </div>
                {/* leftbox */}
                <div className="flex space-x-4 items-center m-4">
                    <span>{course.price}</span>
                    <div className="bg-[#dbffcf] p-1 w-24 text-center border rounded-md ">
                        {course.label}
                    </div>
                    <div>
                        <button
                            type="button"
                            id="options-menu"
                            aria-expanded="true"
                            aria-haspopup="true"
                            onClick={toggleMenu}
                        >
                            <BsThreeDotsVertical size="20px" />
                        </button>
                    </div>

                    {isOpen && (
                        <div
                            ref={menuRef}
                            className="origin-top-right absolute bottom-[-95px] right-[-120px] mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
                        >
                            <div
                                className="py-1"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="options-menu"
                            >
                                <div className="flex items-center ml-2">
                                    <button
                                        onClick={moveToTop}
                                        className="flex  p-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                        role="menuitem"
                                    >
                                        <FaArrowUp className="mr-2 flex" />
                                        Move To Top
                                    </button>
                                </div>
                                <div className="flex items-center ml-2">
                                    <button
                                        onClick={moveToBottom}
                                        className="flex p-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                        role="menuitem"
                                    >
                                        <FaArrowDown className="mr-2" />
                                        Move To Bottom
                                    </button>
                                </div>
                                <div className="flex items-center ml-2">
                                    <button
                                        onClick={removeCard}
                                        className="flex  p-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                        role="menuitem"
                                    >
                                        <RiDeleteBinLine
                                            color="red"
                                            className="mr-2"
                                        />
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default React.memo(CourseCard);
