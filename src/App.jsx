import "./App.css";
import Header from "./components/header";
import Exercise1 from "./components/exercise1";
import Exercise2 from "./components/exercise2";
import Exercise3 from "./components/exercise3";
import Exercise4 from "./components/exercise4";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import Addlist from "./components/Addlist";

function App() {
    return (
        <div className="container-fluid g-0 p-0">
            <Header />
            <Routes>
                <Route exact path="/my-app/exercise1" element={<Exercise1 />} />
                <Route exact path="/my-app/exercise2" element={<Exercise2 />} />
                <Route exact path="/my-app/exercise3" element={<Exercise3 />} />
                <Route exact path="/my-app/exercise4" element={<Exercise4 />} />
                <Route exact path="/my-app/list" element={<Addlist />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
