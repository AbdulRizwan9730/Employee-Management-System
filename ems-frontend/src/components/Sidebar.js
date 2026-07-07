import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {

    return (

        <div
            className="bg-light border-end p-3"
            style={{ minHeight: "80vh" }}
        >

            <h5 className="mb-4">Menu</h5>

            <ul className="nav flex-column">

                <li className="nav-item mb-2">
                    <Link
                        className="btn btn-outline-primary w-100"
                        to="/"
                    >
                        Dashboard
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link
                        className="btn btn-outline-primary w-100"
                        to="/employees"
                    >
                        Employees
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link
                        className="btn btn-outline-primary w-100"
                        to="/departments"
                    >
                        Departments
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link
                        className="btn btn-outline-primary w-100"
                        to="/designations"
                    >
                        Designations
                    </Link>
                </li>

            </ul>

        </div>

    );

}

export default Sidebar;