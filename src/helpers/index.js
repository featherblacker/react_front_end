export const isEmptyObject = (obj) => {
    return Object.entries(obj).length === 0;
}

export const isValidEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

export const isLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
}

export const clearNulls = (obj) => {
    for (let k in obj) {
        if(obj[k] === null){
            obj[k] = "";
        }
    }
    return obj;
}

export const groupBy = (items, key) => {
    let list = [];
    let grouped = items.reduce(
        (result, item) => ({
            ...result,
            [item[key]]: [
                ...(result[item[key]] || []),
                item,
            ],
        }),
        {},
    );

    for (let i in grouped) {
        list.push({
            category: i,
            menuItems: grouped[i]
        })
    }
    return list;
}