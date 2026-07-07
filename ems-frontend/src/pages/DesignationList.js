import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DesignationService from "../services/DesignationService";

function DesignationList() {

    const navigate = useNavigate();

    const [designations, setDesignations] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadDesignations();
    }, []);

    const loadDesignations = () => {

        DesignationService.getAllDesignations()
            .then((response) => {
                setDesignations(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    };

    const deleteDesignation = (id) => {

        if (window.confirm("Are you sure you want to delete this designation?")) {

            DesignationService.deleteDesignation(id)
                .then(() => {

                    alert("Designation Deleted Successfully");
                    loadDesignations();

                })
                .catch((error) => {

                    console.log(error);
                    alert("Error deleting designation");

                });

        }

    };

    

    return (

        <div className="container-fluid">

            <div className="card shadow">

                <div className="card-header bg-primary text-white">

                    <div className="d-flex justify-content-between align-items-center">

                        <h3 className="mb-0">Designation List</h3>

                        <Link
                            to="/designation/add"
                            className="btn btn-light"
                        >
                            + Add Designation
                        </Link>

                    </div>

                </div>

                <div className="card-body">

                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Search Designation..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <table className="table table-bordered table-hover">

                        <thead className="table-dark">

                            <tr>

                                <th>ID</th>
                                <th>Designation Name</th>
                                <th>Description</th>
                                <th width="180">Actions</th>

                            </tr>

                        </thead>

                        <tbody>

                            {designations
                                .filter((designation) =>
                                    designation.designationName
                                        .toLowerCase()
                                        .includes(search.toLowerCase())
                                )
                                .map((designation) => (

                                    <tr key={designation.id}>

                                        <td>{designation.id}</td>

                                        <td>{designation.designationName}</td>

                                        <td>{designation.description}</td>

                                        <td>

                                            <button
                                                className="btn btn-warning btn-sm me-2"
                                                onClick={() => navigate("/designation/edit/" + designation.id)}
                                            >
                                                Edit
                                            </button>

                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => deleteDesignation(designation.id)}
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}

export default DesignationList;