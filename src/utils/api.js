// import axios from "axios";

// const API = axios.create({ baseURL: 'http://localhost:5000'});

// API.interceptors.request.use((req) => {
//     const token = localStorage.getItem('token');
//     if(token) req.headers.Authorization = `Bearer ${token}`;
//     return req;
// });

// export default API;

const API_BASE_URL = "http://localhost:5000";

const API = async (endpoint, method = "GET", body = null, token = null) => {

    try {


        const headers = {
            "Content-Type": "application/json",
        };
        if (token) headers["Authorization"] = `Bearer ${token}`;

        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method,
            headers,
            body: body ? JSON.stringify(body) : null,
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || "Something went wrong");
        }

        return response.json();
    }
    catch (err) {
        console.log(err);
    }
};
export default API; 