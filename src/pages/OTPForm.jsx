import React, { useRef, useState } from "react";
import Logo from "../assets/logo.png";

const OTPForm = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [filled, setFilled] = useState(false);
    const [error, setError] = useState(false);
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const newOtp = [...otp];
        newOtp[index] = e.target.value.slice(0, 1); // Only take the first character
        setOtp(newOtp);

        if (e.target.value && index < otp.length - 1) {
            inputRefs.current[index + 1].focus();
        }

        if (newOtp.every((val) => val !== "")) {
            setFilled(true);
            validateOtp(newOtp);
        } else {
            setFilled(false);
            setError(false);
        }
    };

    const handleBackspace = (element, index) => {
        if (element.value === "" && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const validateOtp = (otp) => {
        const correctOtp = "1234"; // Replace with your correct OTP
        if (otp.join("") === correctOtp) {
            setError(false);
        } else {
            setError(true);
        }
    };

    return (
        <div className="bg-[#4072af] min-h-screen flex  items-center flex-col">
            {/* Header */}
            <h1 className="text-5xl font-bold text-center m-10 text-white">
                Chai aur Code
            </h1>
            <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
                <div className="flex flex-col justify-center items-center py-5 px-4 gap-2">
                    <h1 className="text-black font-bold text-2xl">
                        Mobile Phone Verification
                    </h1>
                    <p className="text-gray-500 text-center">
                        Enter the 4-digit verification code that was sent to
                        your phone number.
                    </p>
                </div>

                {/* Input boxes */}
                <div className="flex justify-center flex-col">
                    <div className="flex justify-center space-x-2">
                        {otp.map((value, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                value={value}
                                onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) =>
                                    e.key === "Backspace" &&
                                    handleBackspace(e.target, index)
                                }
                                ref={(el) => (inputRefs.current[index] = el)}
                                className={`w-14 h-16 bg-[#dae2ef] text-black text-center text-2xl border-2 rounded-lg focus:outline-none ${
                                    error
                                        ? "border-[#eb2d5b]"
                                        : filled
                                        ? "border-[#23cf9b]"
                                        : "border-[#dae2ef]"
                                }`}
                            />
                        ))}
                    </div>
                    {/* Verify button */}
                    <div className="flex justify-center">
                        <button
                            className={`rounded-md mt-5 p-2 w-64 ${
                                error
                                    ? "bg-[#eb2d5b]"
                                    : filled
                                    ? "bg-[#23cf9b]"
                                    : "bg-[#102d4d]"
                            } text-white`}
                        >
                            {error
                                ? "Verification failed"
                                : filled
                                ? "Verified"
                                : "Verify Account"}
                        </button>
                    </div>
                    {error ? (
                        <h3 className="text-gray-500 text-center mt-4">
                            Didn't receive code?{" "}
                            <span className="text-black cursor-pointer">
                                Resend
                            </span>
                        </h3>
                    ) : filled ? (
                        " "
                    ) : (
                        <h3 className="text-gray-500 text-center mt-4">
                            Didn't receive code?{" "}
                            <span className="text-black cursor-pointer">
                                Resend
                            </span>
                        </h3>
                    )}
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

export default OTPForm;
