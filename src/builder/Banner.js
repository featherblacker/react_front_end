import React, {Component} from 'react';
import {ErrorMessage, Field} from "formik";
import {isValidString, isValidUrl} from "./meta";

class Banner extends Component {
    render() {
        const {touched, errors} = this.props;
        return (
            <div>
                <h1 className={"text-center"}>Menu Builder</h1>
                <div className={"card"}>
                    <div className={"card-body"}>
                        <h4>Banner</h4>
                        <hr/>
                        <label htmlFor="head.title" style={{display: "block"}}>
                            Title
                        </label>
                        <Field
                            type={"text"}
                            name={"head.title"}
                            placeholder="banner title"
                            className={`form-control ${
                                touched.head?.title && errors.head?.title ? "is-invalid" : ""
                                }`}
                            validate={isValidString}
                        />
                        <ErrorMessage
                            component="div"
                            name="head.title"
                            className="invalid-feedback"
                        />
                        <label htmlFor="head.description" style={{display: "block"}}>
                            Description
                        </label>
                        <Field
                            validate={isValidString}
                            type={"text"}
                            name={"head.description"}
                            placeholder="builder description"
                            className={`form-control ${
                                touched.head?.description && errors.head?.description ? "is-invalid" : ""
                                }`}
                        />
                        <ErrorMessage
                            component="div"
                            name="head.description"
                            className="invalid-feedback"
                        />

                        <label htmlFor="head.description" style={{display: "block"}}>
                            Image Background
                        </label>
                        <Field
                            type={"text"}
                            name={"head.imgUrl"}
                            placeholder="Banner Image Link"
                            className={`form-control ${
                                touched.head?.imgUrl && errors.head?.imgUrl ? "is-invalid" : ""
                                }`}
                            validate={isValidUrl}
                        />
                        <ErrorMessage
                            component="div"
                            name="head.imgUrl"
                            className="invalid-feedback"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;