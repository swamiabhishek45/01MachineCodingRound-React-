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

        if (newOtp.every((val) => val !== "")) {
            setFilled(true);
            validateOtp(newOtp);
            inputRefs.current[index].blur();
        } else {
            inputRefs.current[index + 1].focus();
            setFilled(false);
            setError(false);
        }

        // if (index < 3) {
        // } else {
        //     setFilled(true);
        //     // setError(false); // Reset error on new input
        // }
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
        <>
            <div className="h-[80vh] flex justify-center items-center flex-col">
                {/* Header  */}
                <h1 className="text-5xl font-bold flex justify-center mb-16">
                    Chai aur Code
                </h1>
                <div className="bg-white w-[500px] h-[350px] rounded-lg">
                    <div className="flex flex-col justify-center items-center py-5 px-14 gap-2">
                        <h1 className="text-black font-bold text-2xl">
                            Mobile Phone Verification
                        </h1>
                        <p className="text-gray-300 text-center">
                            Enter the 4-digit verification code that was sent to
                            your phone number.
                        </p>
                    </div>

                    {/* input boxes */}
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
                                    ref={(el) =>
                                        (inputRefs.current[index] = el)
                                    }
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
                        {/* {error && (
                            <p className="mt-2 text-red-500">
                                Incorrect OTP, please try again.
                            </p>
                        )}
                        {filled && !error && (
                            <p className="mt-2 text-green-500">
                                OTP is correct!
                            </p>
                        )} */}
                        bg-[#102d4d]
                        {/* verify  button */}
                        <div className="flex justify-center">
                            <button
                                className={` rounded-md p-2 w-64 ${
                                    error
                                        ? "bg-[#eb2d5b]"
                                        : filled
                                        ? "bg-[#23cf9b]"
                                        : "bg-[#102d4d]"
                                }`}
                            >
                                {error
                                    ? "Verification failed"
                                    : filled
                                    ? "Verified"
                                    : "Verify Account"}
                            </button>
                        </div>
                        <h3 className="text-gray-300 text-center mt-4">
                            Didn't receive code?{" "}
                            <span className="text-black">Resend</span>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="flex justify-end right-5 bottom-5 relative">
                <a href="https://chaicode.com" target="_blank">
                    <img src={Logo} alt="logo" className="w-20 rounded-md" />
                </a>
            </div>
        </>
    );
};

export default OTPForm;
