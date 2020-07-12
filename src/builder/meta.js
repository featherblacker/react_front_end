//import * as Yup from "yup";
const $ = window.jQuery;
const builderData = {
    slug: "my-restaurant-lander",
    banner: {
        title: "",
        description: "",
        imageUrl: ""
    },
    galleries: [{
        title: "",
        imageUrl: ""
    }],
    menus: [{
        category: "Breakfast",
        items: [
            {
                title: "",
                description: "",
                price: ""
            }
        ]
    }, {
        category: "Lunch",
        items: [
            {
                title: "",
                description: "",
                price: ""
            }
        ]
    }, {
        category: "Dinner",
        items: [
            {
                title: "",
                description: "",
                price: ""
            }
        ]
    }, {
        category: "Desert",
        items: [
            {
                title: "",
                description: "",
                price: ""
            }
        ]
    }],
}


const builderValidationSchema = {}/*Yup.object().shape({
    banner: Yup.object().shape({
        title: Yup.string().required("Required"),
        description: Yup.string().required("Required"),
        image: Yup.string().required("Required")
    }),
    galleries: Yup.array().of(
        Yup.object().shape({
            title: Yup.string().required("Required"),
            url: Yup.string().required("Required"),
        })
    ),
    menus: Yup.array().of(
        Yup.object().shape({
            category: Yup.string().required("Required"),
            items: Yup.array().of(
                Yup.object().shape({
                    title: Yup.string().required("Required"),
                    description: Yup.string().required("Required"),
                    price: Yup.string().required("Required")
                })
            )
        })
    ),
});*/

const isValidNumber = (string) => {
    if ($.isNumeric(string)) {
        if (string * 1 > 0) {
            return undefined;
        } else {
            return "Price must be positive number";
        }

    } else {
        return "Invalid Numeric";
    }

}

const isValidString = (string) => {
    console.log(string)
    if (typeof string == "string" && string.trim() == "") {
        return "Required";
    }
    return undefined;
}


const isValidUrl = (string) => {
    const res = string.match(/((\/|\\|\/\/|https?:\\\\|https?:\/\/)[a-z0-9_@\-^!#$%&+={}.\/\\\[\]]+)+\.[a-z]+$/g);
    return (res !== null) ? undefined : "Invalid URI";
}

export default builderData;
export {builderValidationSchema, isValidString, isValidUrl, isValidNumber}