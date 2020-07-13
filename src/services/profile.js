import {get, post} from "./restClient"
const REACT_APP_ENDPOINT = "http://localhost:8080/api";

const profile = () => {
    return get(`${REACT_APP_ENDPOINT}/me`, true);
}

const getBuilderFormData = () => {
    return get(`${REACT_APP_ENDPOINT}/me/landing`, true);
}
const getBuilderFormDataById = (id) => {
    return get(`${REACT_APP_ENDPOINT}/landing/${id}`, true);
}

const saveBuilder = (values) => {
    return post(`${REACT_APP_ENDPOINT}/me/landing`, values, true);
}

export {profile, getBuilderFormData, saveBuilder, getBuilderFormDataById}