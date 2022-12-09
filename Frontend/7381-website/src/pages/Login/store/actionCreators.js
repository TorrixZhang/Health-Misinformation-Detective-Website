import axios from "axios";

export const loginAc = data => {
    return dispatch => {
        return axios.post('/api/member/', data);
    };
};