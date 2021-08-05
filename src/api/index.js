import axios from "axios";

// Add a response interceptor
axios.interceptors.response.use(
    function (response) {
        // Do something with response data
        return response;
    },
    function (error) {
        if (error.response && error.response.status === 401) {
            console.log("Error", error.response);
        }
        return Promise.reject(error);
    }
);

export function getMainData() {
    return axios.get('https://api.currencyfreaks.com/latest?apikey=5d079cc7e1ba4ba89a0fd6ef219c6114');
};