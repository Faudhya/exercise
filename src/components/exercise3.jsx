import React, { useState, useEffect } from "react";

export default function Exercise3() {
    const [time, setTime] = useState(0);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        let interval = null;
        if (status === true) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [status]);

    function start() {
        setStatus(true);
    }

    function stop() {
        setStatus(false);
    }

    function reset() {
        setTime(0);
    }

    return (
        <div className="container container-exercise3">
            <div className="container-fluid text-center border border-2 border-dark stopwatch-container">
                <div className="stopwatch">
                    {" "}
                    {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                    {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
                    <div className="btn-container">
                        <button className="btn btn-success" onClick={start}>
                            Start
                        </button>
                        <button className="btn btn-danger mx-3" onClick={stop}>
                            Stop
                        </button>
                        <button className="btn btn-secondary" onClick={reset}>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
