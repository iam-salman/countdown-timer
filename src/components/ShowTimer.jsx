import React from "react";

const ShowTimer = ({
    hours,
    minutes,
    seconds,
    isPause,
    handlePause,
    handleReset,
    handleResume,
}) => {
    return (
        <div className="">
            <div className="flex justify-center items-center pt-10">
                <p className="text-7xl font-semibold text-white">
                    {`${hours < 10 ? `0${hours}` : hours} : ${
                        minutes < 10 ? `0${minutes}` : minutes
                    } : ${seconds < 10 ? `0${seconds}` : seconds}`}
                </p>
            </div>

            <div className="flex justify-center items-center pt-10 gap-3">
                {!isPause && (
                    <button
                        className="bg-[#74147C] px-6 py-2 rounded-md text-white font-medium"
                        onClick={handlePause}
                    >
                        Pause
                    </button>
                )}

                {isPause && (
                    <button
                        className="bg-[#74147C] px-6 py-2 rounded-md text-white font-medium"
                        onClick={handleResume}
                    >
                        Resume
                    </button>
                )}

                <button
                    className="bg-[#74147C] px-6 py-2 rounded-md text-white font-medium"
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default ShowTimer;
