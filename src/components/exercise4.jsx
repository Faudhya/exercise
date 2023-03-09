import React from "react";
import Table from "react-bootstrap/Table";

// if (JSON.parse(localStorage.getItem("nameList")) == undefined) {
//     localStorage.setItem("nameList", JSON.stringify([]));
// }

localStorage.setItem("nameList", JSON.stringify([]));

function Exercise4() {
    function handleButtonClick(button, el) {
        const nameList = JSON.parse(localStorage.getItem("nameList"));
        if (button === "add" && !nameList.includes(el)) {
            nameList.push(el);
            // console.log(nameList);
            localStorage.setItem("nameList", JSON.stringify(nameList));
            console.log(localStorage.getItem("nameList"));
        } else if (button === "delete" && nameList.includes(el)) {
            const index = nameList.indexOf(el);
            nameList.splice(index, 1);
            // console.log(nameList);
            localStorage.setItem("nameList", JSON.stringify(nameList));
            console.log(localStorage.getItem("nameList"));
        }
    }

    const nameList = ["Faud", "Thalita", "Yolanda", "Zaqeeya", "Zawaawi"];
    const nameToBeAdded = nameList.map((el, index) => {
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{el}</td>
                <td>
                    <button
                        onClick={() => handleButtonClick("add", el)}
                        className="btn btn-success"
                    >
                        Add
                    </button>
                </td>
                <td>
                    <button
                        onClick={() => handleButtonClick("delete", el)}
                        className="btn btn-danger"
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    });
    return (
        <div className="container container-exercise1">
            <Table striped>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th colSpan={2}>Button</th>
                    </tr>
                </thead>
                <tbody>{nameToBeAdded}</tbody>
            </Table>
        </div>
    );
}

export default Exercise4;
