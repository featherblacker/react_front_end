import {post} from "./restClient";


const register = (username, password) => {
    return post(`${process.env.REACT_APP_ENDPOINT}/register`, {username, password});
}

const login = (username, password) => {
    return post(`${process.env.REACT_APP_ENDPOINT}/login`, {username, password})
        .then(response => {
            localStorage.setItem("tb23-token", response.result)
            return response;
        });
}

export {register, login}