import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DesignationService from "../services/DesignationService";

function DesignationForm() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [designation, setDesignation] = useState({
        designationName: "",
        description: ""
    });

    useEffect(() => {

        if (id) {
            loadDesignation();
        }

    }, []);

    const loadDesignation = () => {

        DesignationService.getDesignationById(id)
            .then((response) => {

                setDesignation(response.data);

            })
            .catch((error) => console.log(error));

    };

    const handleChange = (e) => {

        setDesignation({
            ...designation,
            [e.target.name]: e.target.value
        });

    };

    const saveDesignation = (e) => {

        e.preventDefault();

        if (id) {

            DesignationService.updateDesignation(id, designation)
                .then(() => {

                    alert("Designation Updated Successfully");
                    navigate("/designations");

                })
                .catch((error) => {

                    console.log(error);
                    alert("Error updating designation");

                });

        } else {

            DesignationService.createDesignation(designation)
                .then(() => {

                    alert("Designation Saved Successfully");
                    navigate("/designations");

                })
                .catch((error) => {

                    console.log(error);
                    alert("Error saving designation");

                });

        }

    };

    return (

        <div className="container">

            <div className="card shadow">

                <div className="card-header bg-primary text-white">

                    <h3>
                        {id ? "Update Designation" : "Add Designation"}
                    </h3>

                </div>

                <div className="card-body">

                    <form onSubmit={saveDesignation}>

                        <div className="mb-3">

                            <label className="form-label">
                                Designation Name
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="designationName"
                                value={designation.designationName}
                                onChange={handleChange}
                                required
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
                                value={designation.description}
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
                            onClick={() => navigate("/designations")}
                        >
                            Cancel
                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default DesignationForm;