import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import EmployeeList from "./pages/EmployeeList";
import EmployeeForm from "./pages/EmployeeForm";
import DepartmentList from "./pages/DepartmentList";
import DepartmentForm from "./pages/DepartmentForm";
import DesignationList from "./pages/DesignationList";
import DesignationForm from "./pages/DesignationForm";
import Dashboard from "./pages/Dashboard";

function App() {

    return (

        <BrowserRouter>

            <Header />

            <div className="container-fluid">

                <div className="row">

                    <div className="col-md-3">
                        <Sidebar />
                    </div>

                    <div className="col-md-9 mt-3">

                        <Routes>

                            <Route
                                path="/"
                                element={<Dashboard />}
                            />

                            <Route
                                path="/employees"
                                element={<EmployeeList />}
                            />

                            <Route
                                path="/employee/add"
                                element={<EmployeeForm />}
                            />

                            <Route
                                path="/employee/edit/:id"
                                element={<EmployeeForm />}
                             />
                             <Route
                                path="/department/add"
                                element={<DepartmentForm />}
                            />

                            <Route
                                path="/department/edit/:id"
                                element={<DepartmentForm />}
                            />
                            <Route
                                path="/departments"
                                element={<DepartmentList />}
                            />

                            <Route
                                path="/designations"
                                element={<DesignationList />}
                            />

                            <Route
                                path="/designation/add"
                                element={<DesignationForm />}
                            />

                            <Route
                                path="/designation/edit/:id"
                                element={<DesignationForm />}
                            />

                        </Routes>

                    </div>

                </div>

            </div>

            <Footer />

        </BrowserRouter>

    );

}

export default App;