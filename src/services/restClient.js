const post = (url, body, jwt = false) => {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": jwt ? "Bearer " + localStorage.getItem("tb23-token") : ""
        },
        body: JSON.stringify(body)
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw response.json();
    });
}


const get = (url, jwt = false) => {
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": jwt ? "Bearer " + localStorage.getItem("tb23-token") : ""
        }
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw response.json();
    });
}


export {post, get}