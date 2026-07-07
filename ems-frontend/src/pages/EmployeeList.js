import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function EmployeeList() {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = () => {
        EmployeeService.getAllEmployees()
            .then((response) => {
                setEmployees(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteEmployee = (id) => {

    if (window.confirm("Are you sure you want to delete this employee?")) {

        EmployeeService.deleteEmployee(id)
            .then(() => {

                alert("Employee Deleted Successfully");

                loadEmployees();

            })
            .catch(error => {

                console.log(error);
                alert("Error deleting employee");

            });

    }

};
    return (
    <div className="container-fluid">

        <div className="card shadow">

            <div className="card-header bg-primary text-white">

                <div className="d-flex justify-content-between align-items-center">

                    <h3 className="mb-0">Employee List</h3>

                    <Link
                        to="/employee/add"
                        className="btn btn-light"
                    >
                        + Add Employee
                    </Link>

                </div>

            </div>

                <input
    type="text"
    className="form-control mb-3"
    placeholder="Search by Name or Email..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
/>
            <div className="card-body">

                <table className="table table-bordered table-hover">

                    <thead className="table-dark">

                        <tr>

                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th width="180">Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {
                            employees
    .filter((employee) =>

        employee.firstName.toLowerCase().includes(search.toLowerCase()) ||

        employee.lastName.toLowerCase().includes(search.toLowerCase()) ||

        employee.email.toLowerCase().includes(search.toLowerCase())

    )
    .map((employee) => (

                                <tr key={employee.id}>

                                    <td>{employee.id}</td>

                                    <td>
                                        {employee.firstName} {employee.lastName}
                                    </td>

                                    <td>{employee.email}</td>

                                    <td>{employee.department?.departmentName}</td>

                                    <td>{employee.designation?.designationName}</td>

                                    <td>₹ {employee.salary}</td>

                                    <td>

                                        <button
                                                className="btn btn-warning btn-sm me-2"
                                                 onClick={() => navigate("/employee/edit/" + employee.id)}
                                        >
                                            Edit
                                        </button>

                                        <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => deleteEmployee(employee.id)}
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            ))
                        }

                    </tbody>

                </table>

            </div>

        </div>

    </div>
);

}

export default EmployeeList;