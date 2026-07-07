import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import DepartmentService from "../services/DepartmentService";

function DepartmentForm() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [department, setDepartment] = useState({
        departmentName: "",
        description: ""
    });

    useEffect(() => {

        if (id) {
            loadDepartment();
        }

    }, []);

    const loadDepartment = () => {

        DepartmentService.getDepartmentById(id)
            .then((response) => {

                setDepartment(response.data);

            })
            .catch((error) => console.log(error));

    };

    const handleChange = (e) => {

        setDepartment({
            ...department,
            [e.target.name]: e.target.value
        });

    };

    const saveDepartment = (e) => {

        e.preventDefault();

        if (id) {

            DepartmentService.updateDepartment(id, department)
                .then(() => {

                    alert("Department Updated Successfully");

                    navigate("/departments");

                })
                .catch((error) => {

                    console.log(error);
                    alert("Error updating department");

                });

        } else {

            DepartmentService.createDepartment(department)
                .then(() => {

                    alert("Department Saved Successfully");

                    navigate("/departments");

                })
                .catch((error) => {

                    console.log(error);
                    alert("Error saving department");

                });

        }

    };

    return (

        <div className="container">

            <div className="card shadow">

                <div className="card-header bg-primary text-white">

                    <h3>

                        {id ? "Update Department" : "Add Department"}

                    </h3>

                </div>

                <div className="card-body">

                    <form onSubmit={saveDepartment}>

                        <div className="mb-3">

                            <label className="form-label">
                                Department Name
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="departmentName"
                                value={department.departmentName}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="mb-3">

                            <label className="form-label">
                                Description
                            </label>

                            <textarea
                                className="form-control"
                                rows="4"
                                name="description"
                                value={department.description}
                                onChange={handleChange}
                            />

                        </div>

                        <button
                            type="submit"
                            className="btn btn-success"
                        >
                            Save
                        </button>

                        <button
                            type="button"
                            className="btn btn-secondary ms-2"
                            onClick={() => navigate("/departments")}
                        >
                            Cancel
                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default DepartmentForm;