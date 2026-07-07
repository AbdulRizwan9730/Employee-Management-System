import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DepartmentService from "../services/DepartmentService";


function DepartmentList() {

    const navigate = useNavigate();

    const [departments, setDepartments] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadDepartments();
    }, []);

    const loadDepartments = () => {
        DepartmentService.getAllDepartments()
            .then((response) => {
                setDepartments(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteDepartment = (id) => {

    if (window.confirm("Are you sure you want to delete this department?")) {

        DepartmentService.deleteDepartment(id)
            .then(() => {

                alert("Department Deleted Successfully");

                loadDepartments();

            })
            .catch((error) => {

                console.log(error);
                alert("Error deleting department");

            });

    }

};

    return (

        <div className="container-fluid">

            <div className="card shadow">

                <div className="card-header bg-primary text-white">

                    <div className="d-flex justify-content-between align-items-center">

                        <h3 className="mb-0">Department List</h3>

                        <Link
                            to="/department/add"
                            className="btn btn-light"
                        >
                            + Add Department
                        </Link>

                    </div>

                </div>

                <div className="card-body">

                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Search Department..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <table className="table table-bordered table-hover">

                        <thead className="table-dark">

                            <tr>

                                <th>ID</th>
                                <th>Department Name</th>
                                <th>Description</th>
                                <th width="180">Actions</th>

                            </tr>

                        </thead>

                        <tbody>

                            {departments
                                .filter((department) =>
                                    department.departmentName
                                        .toLowerCase()
                                        .includes(search.toLowerCase())
                                )
                                .map((department) => (

                                    <tr key={department.id}>

                                        <td>{department.id}</td>

                                        <td>{department.departmentName}</td>

                                        <td>{department.description}</td>

                                        <td>

                                            <button
                                                className="btn btn-warning btn-sm me-2"
                                                onClick={() => navigate("/department/edit/" + department.id)}
                                            >
                                                Edit
                                            </button>

                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => deleteDepartment(department.id)}
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

export default DepartmentList;