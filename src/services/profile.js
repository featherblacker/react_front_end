import {get, post} from "./restClient"

const profile = () => {
    return get(`${process.env.REACT_APP_ENDPOINT}/me`, true);
}

const getBuilderFormData = () => {
    return get(`${process.env.REACT_APP_ENDPOINT}/me/landing`, true);
}
const getBuilderFormDataById = (id) => {
    return get(`${process.env.REACT_APP_ENDPOINT}/landing/${id}`, true);
}

const saveBuilder = (values) => {
    return post(`${process.env.REACT_APP_ENDPOINT}/me/landing`, values, true);
}

export {profile, getBuilderFormData, saveBuilder, getBuilderFormDataById}