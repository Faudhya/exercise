import React from "react";
import Table from "react-bootstrap/Table";

function Addlist() {
    const nameList = JSON.parse(localStorage.getItem("nameList"));
    const addedName = nameList.map((el, index) => {
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{el}</td>
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
                    </tr>
                </thead>
                <tbody>{addedName}</tbody>
            </Table>
        </div>
    );
}

export default Addlist;
