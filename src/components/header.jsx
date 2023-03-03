import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="container-fluid text-center header-container">
            <Link to="/my-app/exercise1">
                <button className="header-btn">Counter</button>
            </Link>
            <Link to="/my-app/exercise2">
                <button className="header-btn">Fruit Filter</button>
            </Link>
            <Link to="/my-app/exercise3">
                <button className="header-btn">Stopwatch</button>
            </Link>
        </div>
    );
}
