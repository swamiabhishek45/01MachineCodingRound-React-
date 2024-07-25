import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Logo from "../assets/logo.png";
import coursesData from "../../public/data/course_data.json";
import CourseCard from "../components/CourseCard";

const DDCards = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setCourses(coursesData);
    }, []);

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(courses);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setCourses(items);
    };

    const moveToTop = (index) => {
        if (index === 0) return;
        const items = Array.from(courses);
        const [item] = items.splice(index, 1);
        items.unshift(item);
        setCourses(items);
    };

    const moveToBottom = (index) => {
        if (index === courses.length - 1) return;
        const items = Array.from(courses);
        const [item] = items.splice(index, 1);
        items.push(item);
        setCourses(items);
    };

    const removeCard = (index) => {
        const items = Array.from(courses);
        items.splice(index, 1);
        setCourses(items);
    };

    return (
        <div className="bg-[#d3e3c7] min-h-screen  text-black flex flex-col items-center">
            <h1 className="text-5xl font-bold text-center p-10 text-[#4f6d50]">
                Chai aur Code
            </h1>
            <div className="flex flex-col md:flex-row gap-10 items-center justify-center w-full px-4">
                {/* Container */}
                <div className="bg-white w-full max-w-6xl h-[670px] rounded-lg shadow-lg p-10 mb-5 ">
                    <h2 className="text-2xl font-bold">Manage Bundle</h2>
                    <p className="text-[#000000a7]">
                        Change order of the products based on priority
                    </p>

                    {/* Card Components*/}
                    <div className="flex flex-col gap-4 mt-4">
                        <DragDropContext onDragEnd={handleDragEnd}>
                            <Droppable droppableId="courses" type="COURSE">
                                {(provided) => (
                                    <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        className="space-y-4"
                                    >
                                        {courses.map((course, index) => (
                                            <Draggable
                                                key={course.id}
                                                draggableId={course.id}
                                                index={index}
                                            >
                                                {(provided) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <CourseCard
                                                            course={course}
                                                            moveToTop={() =>
                                                                moveToTop(index)
                                                            }
                                                            moveToBottom={() =>
                                                                moveToBottom(
                                                                    index
                                                                )
                                                            }
                                                            removeCard={() =>
                                                                removeCard(
                                                                    index
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                    </div>
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

export default DDCards;
