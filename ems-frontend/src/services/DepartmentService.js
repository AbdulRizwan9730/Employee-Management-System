import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/departments";

class DepartmentService {

    getAllDepartments() {
        return axios.get(REST_API_BASE_URL);
    }

    getDepartmentById(id) {
        return axios.get(REST_API_BASE_URL + "/" + id);
    }

    createDepartment(department) {
        return axios.post(REST_API_BASE_URL, department);
    }

    updateDepartment(id, department) {
        return axios.put(REST_API_BASE_URL + "/" + id, department);
    }

    deleteDepartment(id) {
        return axios.delete(REST_API_BASE_URL + "/" + id);
    }

}

export default new DepartmentService();