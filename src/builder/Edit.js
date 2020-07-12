import React from 'react';
import {Formik, Field, ErrorMessage, FieldArray} from "formik";
import './builder-edit.css';
import initFormData, {isValidNumber, isValidString, isValidUrl} from './meta';
import Banner from "./Banner";
import Gallery from "./Gallery";
import Menu from "./Menu";
import {builderData} from "../landing/data";
import {getBuilderFormData, saveBuilder} from "../services/profile";
import Loader from "../Loader";

import {isEmptyObject, groupBy} from "../helpers";

// export const DisplayFormikState = props =>
//     <div style={{margin: '1rem 0'}}>
//         <h3 style={{fontFamily: 'monospace'}}/>
//         <pre
//             style={{
//                 background: '#f6f8fa',
//                 fontSize: '.65rem',
//                 padding: '.5rem',
//             }}
//         >
//       <strong>props</strong> ={' '}
//             {JSON.stringify(props, null, 2)}
//     </pre>
//     </div>;

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            formData: {}
        }
    }

    componentDidMount() {
        getBuilderFormData().then(response => {
            response.result.menu = groupBy(response.result.menu.menuItems, 'category');
            this.setState({
                formData: response.result
            })
        }).catch(error => {
            //no init data
            this.setState({
                formData: builderData
            })
        });
    }

    handleSubmit = (values2, actions) => {
        let values = {
            ...values2,
            head: {...values2.head},
            menu: [...values2.menu],
            gallery: {...values2.gallery},
        }
        let menu = [];
        values.menu.forEach(item => {
            item.menuItems.forEach(i => menu.push({...i, category: item.category}));
        })

        values.menu = {
            "title": "",
            "description": "",
            "menuItems": menu
        };

        saveBuilder(values).then(response => {
            actions.setSubmitting(false);
            this.setState({
                message: "content saved"
            })
        }).catch(error => {
            actions.setSubmitting(false);
            console.log(error);
        });


    }

    render() {
        if (isEmptyObject(this.state.formData)) {
            return <Loader/>
        }

        return (
            <section className={"builder-edit-section spacer-one-bottom-lg spacer-one-top-md"}>
                <div className={"container"}>
                    <Formik
                        initialValues={this.state.formData || builderData}
                        onSubmit={this.handleSubmit}
                        render={props => {
                            const {
                                values,
                                touched,
                                errors,
                                isSubmitting,
                                handleSubmit,
                            } = props;
                            return (

                                <form onSubmit={handleSubmit}>
                                    <Banner touched={touched} errors={errors}/>
                                    <Gallery touched={touched} errors={errors} values={values}/>
                                    <Menu touched={touched} errors={errors} values={values}/>
                                    <div className="mt-3">
                                        <button className={"btn btn-block btn-dark"} type="submit"
                                                disabled={isSubmitting}>
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            )
                                ;
                        }}
                    >
                    </Formik>
                </div>
            </section>

        );
    }
}


export default Edit;