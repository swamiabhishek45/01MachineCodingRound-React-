import React from "react";

const OTPForm = () => {
    return (
        <>
            <div className="h-[80vh] flex justify-center items-center flex-col">
                <h1 className="text-5xl font-bold flex justify-center mb-16">
                    Chai aur Code
                </h1>
                <div className="bg-white w-[500px] h-[350px] rounded-lg">
                    <div className="flex flex-col justify-center items-center py-5 px-14 gap-2">
                        <h1 className="text-black font-bold text-2xl">Mobile Phone Verification</h1>
                        <p className="text-gray-300 text-center">Enter the 4-digit verification code that was sent to your phone number.</p>
                    </div>

                    <div>
                        <div>
                            <input type="text" className="bg-black" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OTPForm;
