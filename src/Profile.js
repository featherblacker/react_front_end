import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {isEmptyObject, clearNulls} from "./helpers"
import {profile} from "./services/profile";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            submitted: false,
            message: '',
            values: {
                username: '',
                address: '',
                firstName: '',
                lastName: ''
            },
            errors: {},
        };
    }


    handleInputChange = (event) => {
        event.preventDefault();
        let {values} = this.state;
        let {target: {value, name}} = event;
        this.setState({
            values: {
                ...values,
                [name]: value
            }
        });
    };

    componentDidMount() {
        profile().then(response => {
            this.setState({
                values: clearNulls(response.result),

            })
        }).catch(error => {
            console.log(error)
        })
    }

    formSubmit = (e) => {
        e.preventDefault();
        this.setState({
            submitted: true
        }, () => {
            let errors = {};
            let {values} = this.state;
            if (!values.firstName.trim()) {
                errors.firstName = "First Name is required";
            } else if (values.firstName.length < 3 || values.firstName.length > 17) {
                errors.firstName = "First Name Length should be longer than 3 less than 16";
            }

            if (!values.lastName.trim()) {
                errors.lastName = "Last Name is required";
            } else if (values.lastName.length < 3 || values.lastName.length > 17) {
                errors.lastName = "Last Name Length should be longer than 3 less than 16";
            }

            if (!values.address.trim()) {
                errors.address = "Address is required";
            }

            if(isEmptyObject(errors)){
                //call backend
                fetch(process.env.REACT_APP_ENDPOINT + "/me", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("tb23-token")
                    },
                    body: JSON.stringify(values)
                }).then(response => {
                    if(response.ok){
                        return response.json();
                    }
                    throw response.json();
                }).then(response => {
                    this.setState({
                        errors: {},
                        values: clearNulls(response.result),
                        submitted: false,
                        message: "profile updated"
                    })
                }).catch( error => {
                    this.setState({
                        errors: {},
                        submitted: false,
                        message: error.message
                    })
                });
            }
            else{
                this.setState({
                    errors: errors,
                    submitted: false
                })
            }
        });
    }

    render() {
        let {values, errors, message} = this.state;
        return (
            <>
                <Header/>
                <main className="main">
                    <section id="profile_page" className="spacer-one-top-sm">
                        <div className="background-img ">
                            <img src="../public/img/5.jpg" alt=""/>
                        </div>
                        <div className="container">
                            <div className="row ">
                                <div className="col-lg-10 bg-white">
                                    <div className="">
                                        <div className="mb-5 pb-5 text-left">
                                            <h1 className="h2 font-alt">Personal Info</h1>
                                            <p className="w-md-75 mb-0 lead">
                                                Change your personal info by submitting form
                                            </p>
                                        </div>
                                        <form onSubmit={this.formSubmit}>
                                            <div className="row">
                                                <div className="col-sm-6 mb-5">
                                                    <label className="form-label">
                                                        Username
                                                        <span className="text-danger-alt">*</span>
                                                    </label>
                                                    <div className="input-group form">
                                                        <input className="form-control " type="text" name="name"
                                                               defaultValue={values.username} disabled/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 mb-5">
                                                    <label className="form-label">
                                                        Address
                                                        <span className="text-danger-alt">*</span>
                                                    </label>
                                                    <div className="input-group form">
                                                        <input className="form-control " type="text" name="address"
                                                               value={values?.address}
                                                               onChange={this.handleInputChange}
                                                               placeholder="Your email"/>
                                                    </div>
                                                    {errors?.address && <p className="help-block error">Invalid Address</p>}
                                                </div>
                                                <hr/>
                                                <div className="col-sm-6 mb-5">
                                                    <label className="form-label">
                                                        First Name
                                                    </label>
                                                    <div className="input-group form">
                                                        <input className="form-control " type="text"
                                                               name="firstName" value={values.firstName}
                                                               onChange={this.handleInputChange}
                                                               onBlur={this.handleInputBlur}
                                                               placeholder="First Name"/>
                                                    </div>
                                                    {errors?.firstName && <p className="help-block error">Length should be longer than 3
                                                        less than 16</p>}

                                                </div>
                                                <div className="col-sm-6 mb-5">
                                                    <label className="form-label">
                                                        Last Name
                                                    </label>
                                                    <div className="input-group form">
                                                        <input className="form-control " type="text" name="lastName"
                                                               value={values.lastName} onChange={this.handleInputChange}
                                                               placeholder="Last Name"/>
                                                    </div>
                                                    {errors?.lastName && <p className="help-block error">Length should be longer than 3
                                                        less than 16</p>}
                                                </div>
                                                {message && (<div className="col-12 form-group">
                                                    <div className="alert alert-success" role="alert">
                                                        {message}
                                                    </div>
                                                </div>)}

                                                <div className="col">
                                                    <div className="text-right">
                                                        <button type="submit" className="btn  btn-dark btn-wide">
                                                            Submit
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-4 d-none d-lg-block">
                                    <div className="background-img">
                                        <img src="assets/img/5.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer/>
            </>
        );
    }
}

export default Profile;
