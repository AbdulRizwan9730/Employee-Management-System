import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/designations";

class DesignationService {

    getAllDesignations() {
        return axios.get(REST_API_BASE_URL);
    }

    getDesignationById(id) {
        return axios.get(REST_API_BASE_URL + "/" + id);
    }

    createDesignation(designation) {
        return axios.post(REST_API_BASE_URL, designation);
    }

    updateDesignation(id, designation) {
        return axios.put(REST_API_BASE_URL + "/" + id, designation);
    }

    deleteDesignation(id) {
        return axios.delete(REST_API_BASE_URL + "/" + id);
    }

}

export default new DesignationService();