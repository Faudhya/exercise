import { useState } from "react";

export default function Exercise1() {
    const [count, setCount] = useState(0);
    function IncrementCount() {
        setCount((prevCount) => prevCount + 1);
    }

    function DecrementCount() {
        setCount((prevCount) => prevCount - 1);
    }

    function Reset() {
        setCount(0);
    }

    return (
        <div className="container container-exercise1">
            <div className="container-fluid text-center main-container">
                <div className="number">Counter: {count}</div>
                <button
                    className="btn btn-success button"
                    onClick={IncrementCount}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-plus"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                </button>
                <button className="btn btn-secondary button" onClick={Reset}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-arrow-clockwise"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                        />
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                    </svg>
                </button>
                <button
                    className="btn btn-danger button"
                    onClick={DecrementCount}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-dash-lg"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
