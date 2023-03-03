import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="container-fluid text-center header-container">
            <Link to="/my-app/exercise1">
                <button className="btn btn-primary">Counter</button>
            </Link>
            <Link to="/my-app/exercise2">
                <button className="btn btn-success mx-3">Fruit Filter</button>
            </Link>
            <Link to="/my-app/exercise3">
                <button className="btn-secondary btn">Stopwatch</button>
            </Link>
        </div>
    );
}
