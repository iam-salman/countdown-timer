import React, { useEffect, useState } from "react";
import ShowTimer from "./ShowTimer";
import InputTimer from "./InputTimer";

const Timer = () => {
    const [isStart, setIsStart] = useState(false);
    const [isPause, setIsPause] = useState(false);

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [timerId, setTimerId] = useState(0);

    const handleStart = () => {
        if (hours < 0 || minutes < 0 || seconds < 0) {
            alert("Time can't be negative");
            return;
        } else {
            var hr = hours;
            var min = minutes;
            var sec = seconds;

            if (sec >= 60) {
                var temp = Math.floor(sec / 60);
                min += temp;
                sec -= temp * 60;
            }

            if (min >= 60) {
                temp = Math.floor(min / 60);
                hr += temp;
                min -= temp * 60;
            }

            setHours(hr);
            setMinutes(min);
            setSeconds(sec);

            setIsStart(true);
        }
    };

    const handlePause = () => {
        setIsPause(true);
        clearInterval(timerId);
    };

    const handleResume = () => {
        setIsPause(false);
        runTimer(hours, minutes, seconds, timerId);
    };

    const handleReset = () => {
        setIsStart(false);
        setIsPause(false);
        resetTimer();
    };

    const resetTimer = () => {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        clearInterval(timerId);
    };

    const handleInput = (event) => {
        const value = parseInt(event.target.value);
        const id = event.target.id;

        if (id === "hours") setHours(value);
        else if (id === "minutes") setMinutes(value);
        else setSeconds(value);
    };

    console.log(hours, minutes, seconds);

    const runTimer = (hr, min, sec, tid) => {
        if (sec > 0) {
            setSeconds((s) => s - 1);
        } else if (sec === 0 && min > 0) {
            setMinutes((m) => m - 1);
            setSeconds(59);
        } else if (min === 0) {
            setHours((h) => h - 1);
            setMinutes(59);
            setSeconds(59);
        }

        if (hr === 0 && min === 0 && sec === 0) {
            handleReset();
            alert("Timer is finishded");
        }
    };

    useEffect(() => {
        let tid;

        if (isStart) {
            tid = setInterval(() => {
                runTimer(hours, minutes, seconds, tid);
            }, 1000);

            setTimerId(tid);
        }

        return () => {
            clearInterval(tid);
        };
    }, [isStart, hours, minutes, seconds]);

    return (
        <div className="bg-[#6F9C9F] w-screen h-screen">
            <div className="text-center pt-12">
                <p className="text-3xl text-white font-bold">Countdown Timer</p>
            </div>

            {isStart ? (
                <ShowTimer
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}
                    isPause={isPause}
                    handlePause={handlePause}
                    handleResume={handleResume}
                    handleReset={handleReset}
                />
            ) : (
                <InputTimer
                    handleInput={handleInput}
                    handleStart={handleStart}
                />
            )}
        </div>
    );
};

export default Timer;
