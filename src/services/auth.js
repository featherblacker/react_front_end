import {post} from "./restClient";
const REACT_APP_ENDPOINT= "http://localhost:8080/api"

const register = (username, password) => {
    return post(`${REACT_APP_ENDPOINT}/register`, {username, password});
}

const login = (username, password) => {
    return post(`${REACT_APP_ENDPOINT}/login`, {username, password})
        .then(response => {
            localStorage.setItem("tb23-token", response.result)
            return response;
        });
}

export {register, login}