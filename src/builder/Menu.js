import React, {Component} from 'react';
import {ErrorMessage, Field, FieldArray} from "formik";
import {isValidNumber, isValidString, isValidUrl} from "./meta";

class Menu extends Component {
    render() {
        const {touched, errors, values} = this.props;
        console.log(values)
        return (
            <div>
                <div className={"mt-4"}>
                    <h4>Menus</h4>
                    {
                        values.menu.map((menu, index) => {

                            return (
                                <React.Fragment key={index}>

                                    <FieldArray
                                        name={`menu.${index}.menuItems`}
                                        render={arrayHelpers => {
                                            const itemsBlock = menu.menuItems.map((item, i) =>
                                                <div className="form-row" key={i}>
                                                    <div className={"form-group col-6"}>
                                                        <label>Item Title #{i + 1}</label>
                                                        <Field
                                                            type={"text"}
                                                            name={`menu.${index}.menuItems.${i}.name`}
                                                            placeholder="menu item title"
                                                            className={`form-control ${
                                                                touched.menu?.[index]?.menuItems?.[i]?.name && errors.menu?.[index]?.menuItems?.[i]?.name ? "is-invalid" : ""
                                                                }`}
                                                            validate={isValidString}
                                                        />
                                                        <ErrorMessage
                                                            component="div"
                                                            name={`menu.${index}.menuItems.${i}.name`}
                                                            className="invalid-feedback"
                                                        />
                                                        <label>Item Price #{i + 1}</label>
                                                        <Field
                                                            type={"text"}
                                                            name={`menu.${index}.menuItems.${i}.price`}
                                                            placeholder="menu item price"
                                                            className={`form-control ${
                                                                touched.menu?.[index]?.menuItems?.[i]?.price && errors.menu?.[index]?.menuItems?.[i]?.price ? "is-invalid" : ""
                                                                }`}
                                                            validate={isValidNumber}
                                                        />
                                                        <ErrorMessage
                                                            component="div"
                                                            name={`menu.${index}.menuItems.${i}.price`}
                                                            className="invalid-feedback"
                                                        />
                                                    </div>
                                                    <div className={"form-group col-6"}>
                                                        <label>Item Description #{i + 1}</label>
                                                        <Field
                                                            as={"textarea"}
                                                            name={`menu.${index}.menuItems.${i}.description`}
                                                            placeholder="menu item description"
                                                            className={`form-control ${
                                                                touched.menu?.[index]?.menuItems?.[i]?.description && errors.menu?.[index]?.menuItems?.[i]?.description ? "is-invalid" : ""
                                                                }`}
                                                            validate={isValidString}
                                                        />
                                                        <ErrorMessage
                                                            component="div"
                                                            name={`menu.${index}.menuItems.${i}.description`}
                                                            className="invalid-feedback"
                                                        />
                                                        <label>Item Image #{i + 1}</label>
                                                        <Field
                                                            type={"text"}
                                                            name={`menu.${index}.menuItems.${i}.imageUrl`}
                                                            placeholder="menu item price"
                                                            className={`form-control ${
                                                                touched.menu?.[index]?.menuItems?.[i]?.imageUrl && errors.menu?.[index]?.menuItems?.[i]?.imageUrl ? "is-invalid" : ""
                                                                }`}
                                                            validate={isValidUrl}
                                                        />
                                                        <ErrorMessage
                                                            component="div"
                                                            name={`menu.${index}.menuItems.${i}.imageUrl`}
                                                            className="invalid-feedback"
                                                        />
                                                    </div>
                                                    <div className={"form-group"}>
                                                        {i !== 0 && (
                                                            <button
                                                                type="button"
                                                                className={"btn btn-danger"}
                                                                onClick={() => arrayHelpers.remove(i)}
                                                            >
                                                                Remove #{i + 1}
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            )
                                            return (<div className={"card mt-4"}>
                                                <div className={"card-body"}>
                                                    <div className={"d-flex justify-content-between"}>
                                                        <h4>{menu.category}</h4>
                                                        <button
                                                            type="button"
                                                            className={"btn btn-dark float-right mb-2"}
                                                            onClick={() => arrayHelpers.push({
                                                                name: '', description: '', price: '', imageUrl: ''
                                                            })}
                                                        >
                                                            Add More
                                                        </button>

                                                    </div>
                                                    {itemsBlock}


                                                </div>

                                            </div>)
                                        }}
                                    />
                                </React.Fragment>
                            )
                                ;
                        })
                    }

                </div>
            </div>
        );
    }
}

export default Menu;
