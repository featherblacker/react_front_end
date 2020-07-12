import React, {Component} from 'react';
import {ErrorMessage, Field, FieldArray} from "formik";
import {isValidString, isValidUrl} from "./meta";

class Gallery extends Component {
    render() {
        const {touched, errors, values} = this.props;
        return (
            <div>
                <div className={"card mt-4"}>
                    <div className={"card-body"}>
                        <FieldArray
                            name={"gallery.galleryItem"}
                            render={arrayHelpers => {
                                {

                                    return (
                                        <>
                                            <div className={"d-flex justify-content-between"}>
                                                <h4>Gallery</h4>
                                                <button
                                                    type="button"
                                                    className={"btn btn-dark float-right mb-2"}
                                                    onClick={() => {
                                                        return arrayHelpers.push({title: '', imageUrl: ''})
                                                    }}
                                                >
                                                    Add More
                                                </button>

                                            </div>
                                            {values.gallery.galleryItem.map((gallery, index) =>
                                                <div className={"form-row"} key={index}>

                                                    <div className={"form-group col-3"}>
                                                        <label htmlFor={`gallery.galleryItem.${index}.title`}
                                                               style={{display: "block"}}>
                                                            #{index + 1} Title
                                                        </label>
                                                        <div className={"input-group"}>
                                                            <Field
                                                                type={"text"}
                                                                name={`gallery.galleryItem.${index}.title`}
                                                                placeholder="Image Title"
                                                                className={`form-control ${
                                                                    touched.gallery?.galleryItem?.[index]?.title && errors.gallery?.galleryItem?.[index]?.title ? "is-invalid" : ""
                                                                    }`}
                                                                validate={isValidString}
                                                            />
                                                            <ErrorMessage
                                                                component="div"
                                                                name={`gallery.galleryItem.${index}.title`}
                                                                className="invalid-feedback"
                                                            />
                                                        </div>

                                                    </div>
                                                    <div className={"form-group col-7"}>
                                                        <label htmlFor={`gallery.galleryItem.${index}.imageUrl`}
                                                               style={{display: "block"}}>
                                                            #{index + 1} Image URL
                                                        </label>
                                                        <Field
                                                            type={"text"}
                                                            name={`gallery.galleryItem.${index}.imageUrl`}
                                                            placeholder="Image URL"
                                                            className={`
                                                                form-control
                                                                ${touched.gallery?.galleryItem?.[index]?.imageUrl && errors.gallery?.galleryItem?.[index]?.imageUrl ? "is-invalid" : ""}
                                                            `}
                                                            validate={isValidUrl}
                                                        />
                                                        <ErrorMessage
                                                            component="div"
                                                            name={`gallery.galleryItem.${index}.imageUrl`}
                                                            className="invalid-feedback"

                                                        />
                                                    </div>

                                                    {index !== 0 && (
                                                        <div className={"form-group col-auto"}>
                                                            <label>&nbsp;</label>
                                                            <button
                                                                type="button"
                                                                className={"btn btn-danger"}
                                                                onClick={() => {
                                                                    console.log("clicked" + index)
                                                                    arrayHelpers.remove(index);
                                                                }}
                                                            >
                                                                Remove #{index + 1}
                                                            </button>
                                                        </div>
                                                    )}

                                                </div>
                                            )}
                                        </>
                                    )
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;