import axios from "axios";
export default {
    getDB: function() {
        return axios.get("/api/data");
    }
}