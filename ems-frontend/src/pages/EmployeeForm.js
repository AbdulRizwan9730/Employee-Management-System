import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import EmployeeService from "../services/EmployeeService";
import DepartmentService from "../services/DepartmentService";
import DesignationService from "../services/DesignationService";

function EmployeeForm() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [departments, setDepartments] = useState([]);
    const [designations, setDesignations] = useState([]);

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "",
        dob: "",
        department: "",
        designation: "",
        salary: "",
        city: "",
        address: ""
    });

    useEffect(() => {
        loadDepartments();
        loadDesignations();

        if (id) {
            loadEmployee();
        }
    }, []);

    const loadDepartments = () => {
        DepartmentService.getAllDepartments()
            .then(response => {
                setDepartments(response.data);
            })
            .catch(error => console.log(error));
    };

    const loadDesignations = () => {
        DesignationService.getAllDesignations()
            .then(response => {
                setDesignations(response.data);
            })
            .catch(error => console.log(error));
    };

    const loadEmployee = () => {

        EmployeeService.getEmployeeById(id)
            .then(response => {

                const emp = response.data;

                setEmployee({
                    firstName: emp.firstName,
                    lastName: emp.lastName,
                    email: emp.email,
                    phone: emp.phone,
                    gender: emp.gender,
                    dob: emp.dob,
                    department: emp.department.id,
                    designation: emp.designation.id,
                    salary: emp.salary,
                    city: emp.city,
                    address: emp.address
                });

            })
            .catch(error => console.log(error));

    };

    const handleChange = (e) => {

        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });

    };

    const saveEmployee = (e) => {

        e.preventDefault();

        const employeeData = {

            firstName: employee.firstName,
            lastName: employee.lastName,
            email: employee.email,
            phone: employee.phone,
            gender: employee.gender,
            dob: employee.dob,

            department: {
                id: employee.department
            },

            designation: {
                id: employee.designation
            },

            salary: employee.salary,
            city: employee.city,
            address: employee.address

        };

        if (id) {

            EmployeeService.updateEmployee(id, employeeData)
                .then(() => {

                    alert("Employee Updated Successfully");
                    navigate("/employees");

                })
                .catch(error => {

                    console.log(error);
                    alert("Error updating employee");

                });

        } else {

            EmployeeService.createEmployee(employeeData)
                .then(() => {

                    alert("Employee Saved Successfully");
                    navigate("/employees");

                })
                .catch(error => {

                    console.log(error);
                    alert("Error saving employee");

                });

        }

    };

    return (

        <div className="container">

            <div className="card shadow">

                <div className="card-header bg-primary text-white">

                    <h3>{id ? "Update Employee" : "Add Employee"}</h3>

                </div>

                <div className="card-body">

                    <form onSubmit={saveEmployee}>

                        <div className="row">

                            <div className="col-md-6 mb-3">
                                <label className="form-label">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="firstName"
                                    value={employee.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="lastName"
                                    value={employee.lastName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={employee.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    value={employee.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Gender</label>
                                <select
                                    className="form-select"
                                    name="gender"
                                    value={employee.gender}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Date of Birth</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="dob"
                                    value={employee.dob}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Department</label>

                                <select
                                    className="form-select"
                                    name="department"
                                    value={employee.department}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Department</option>

                                    {departments.map(dept => (
                                        <option key={dept.id} value={dept.id}>
                                            {dept.departmentName}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Designation</label>

                                <select
                                    className="form-select"
                                    name="designation"
                                    value={employee.designation}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Designation</option>

                                    {designations.map(des => (
                                        <option key={des.id} value={des.id}>
                                            {des.designationName}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Salary</label>

                                <input
                                    type="number"
                                    className="form-control"
                                    name="salary"
                                    value={employee.salary}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">City</label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="city"
                                    value={employee.city}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-12 mb-3">
                                <label className="form-label">Address</label>

                                <textarea
                                    className="form-control"
                                    rows="3"
                                    name="address"
                                    value={employee.address}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                        </div>

                        <button
                            type="submit"
                            className="btn btn-success"
                        >
                            {id ? "Update Employee" : "Save Employee"}
                        </button>

                        <button
                            type="button"
                            className="btn btn-secondary ms-2"
                            onClick={() => navigate("/employees")}
                        >
                            Cancel
                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default EmployeeForm;