import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashboardService from "../services/DashboardService";

function Dashboard() {

    const [dashboard, setDashboard] = useState({

        totalEmployees: 0,
        totalDepartments: 0,
        totalDesignations: 0,
        totalSalary: 0,
        recentEmployees: []

    });

    useEffect(() => {

        DashboardService.getDashboardData()
            .then((response) => {

                setDashboard(response.data);

            })
            .catch((error) => {

                console.log(error);

            });

    }, []);

    return (

        <div className="container-fluid">

            <h2 className="mb-4 fw-bold text-primary">
                Employee Management Dashboard
            </h2>

            <div className="row">

                <div className="col-md-3 mb-3">

                    <div className="card bg-primary text-white shadow">

                        <div className="card-body">

                            <h5>Total Employees</h5>

                            <h2>{dashboard.totalEmployees}</h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-3 mb-3">

                    <div className="card bg-success text-white shadow">

                        <div className="card-body">

                            <h5>Departments</h5>

                            <h2>{dashboard.totalDepartments}</h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-3 mb-3">

                    <div className="card bg-warning text-dark shadow">

                        <div className="card-body">

                            <h5>Designations</h5>

                            <h2>{dashboard.totalDesignations}</h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-3 mb-3">

                    <div className="card bg-danger text-white shadow">

                        <div className="card-body">

                            <h5>Total Salary</h5>

                            <h2>₹ {dashboard.totalSalary}</h2>

                        </div>

                    </div>

                </div>

            </div>

            <div className="card shadow mt-4">

                <div className="card-header bg-dark text-white">

                    <h4 className="mb-0">
                        Recent Employees
                    </h4>

                </div>

                <div className="card-body">

                    <table className="table table-bordered table-hover">

                        <thead className="table-light">

                            <tr>

                                <th>ID</th>
                                <th>Name</th>
                                <th>Department</th>
                                <th>Designation</th>
                                <th>Email</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                dashboard.recentEmployees.map(employee => (

                                    <tr key={employee.id}>

                                        <td>{employee.id}</td>

                                        <td>{employee.name}</td>

                                        <td>{employee.department}</td>

                                        <td>{employee.designation}</td>

                                        <td>{employee.email}</td>

                                    </tr>

                                ))

                            }

                        </tbody>

                    </table>

                    <div className="text-end">

                        <Link
                            to="/employees"
                            className="btn btn-primary"
                        >
                            View All Employees
                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;