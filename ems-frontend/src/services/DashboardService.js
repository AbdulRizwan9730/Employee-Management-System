import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/dashboard";

class DashboardService {

    getDashboardData() {
        return axios.get(REST_API_BASE_URL);
    }

}

export default new DashboardService();