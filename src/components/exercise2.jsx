import { Fruits } from "./fruits";
import { useState } from "react";

export default function Exercise2() {
    const [query, setQuery] = useState("");
    let fruits = Fruits;
    let fruitslist = fruits
        .filter((fruit) => fruit.name.toLowerCase().includes(query))
        .map((fruit) => {
            return (
                <li key={fruit.id} className="list-item">
                    {fruit.name}
                </li>
            );
        });
    return (
        <div className="container-fluid text-center">
            <input
                type="text"
                placeholder="Search"
                className="search-bar container-fluid"
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
            <ul className="list mr-4">{fruitslist}</ul>
        </div>
    );
}
