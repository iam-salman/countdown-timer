import React from "react";

const InputTimer = ({ handleInput, handleStart }) => {
    return (
        <div className="">
            <div className="flex justify-center items-center pt-10">
                <input
                    type="text"
                    id="hours"
                    placeholder="HH"
                    className="border w-14 h-14 text-center text-lg outline-none mx-2"
                    onChange={handleInput}
                />
                <input
                    type="text"
                    id="minutes"
                    placeholder="MM"
                    className="border w-14 h-14 text-center text-lg outline-none mx-2"
                    onChange={handleInput}
                />
                <input
                    type="text"
                    id="seconds"
                    placeholder="SS"
                    className="border w-14 h-14 text-center text-lg outline-none mx-2"
                    onChange={handleInput}
                />
            </div>

            <div className="flex justify-center items-center pt-10">
                <button
                    className="bg-[#74147C] px-6 py-2 rounded-md text-white font-medium"
                    onClick={handleStart}
                >
                    Start
                </button>
            </div>
        </div>
    );
};

export default InputTimer;
