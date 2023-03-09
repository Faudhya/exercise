import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="container-fluid text-center header-container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <Link to="/my-app/exercise1">Counter</Link>
                    </li>
                    <li class="breadcrumb-item">
                        <Link to="/my-app/exercise2">Fruit Filter</Link>
                    </li>
                    <li class="breadcrumb-item">
                        <Link to="/my-app/exercise3">Stopwatch</Link>
                    </li>
                    <li class="breadcrumb-item">
                        <Link to="/my-app/exercise4">Name List</Link>
                    </li>
                    <li class="breadcrumb-item">
                        <Link to="/my-app/list">List Added</Link>
                    </li>
                </ol>
            </nav>
        </div>
    );
}
