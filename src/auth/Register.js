import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {isEmptyObject} from "../helpers";
import {register} from "../services/auth";
import Footer from "../Footer";

class Register extends Component {
    state = {
        formValue: {
            username: "",
            password: "",
            confirmPassword: "",
        },
        submitting: false
    };

    handleInputChange = (e) => {
        const {name, value} = e.target;
        this.setState(state => {
            return {
                formValue: {
                    ...state.formValue,
                    [name]: value
                }
            }
        });
    };

    handleSubmit = (e) => {
        //debugger;
        e.preventDefault();
        let errors = {};
        let {formValue} = this.state;
        if (formValue.username.trim() === "" || !(formValue.username.length < 12 && formValue.username.length > 8)) {
            errors.username = "invalid username";
        }
        if (formValue.password.trim() === "" || !(formValue.username.length < 12 && formValue.username.length > 8)||!formValue.username.match("[a-zA-Z0-9]+")) {
            errors.password = "invalid password";
        }
        if (formValue.confirmPassword.trim() !== formValue.password.trim()) {
            errors.password = "password not consistent";
        }
        if (!isEmptyObject(errors)) {
            this.setState({
                errors: errors
            });
        } else {
            //submit
            this.setState({
                submitting: true
            }, () => {
                register(formValue.username, formValue.password).then(response => {
                    localStorage.setItem(process.env.REACT_APP_TOKEN, response.result);
                    this.props.history.push("./profile")
                }).catch(error => {
                    console.error(error)
                });
                console.log(this.state.formValue)
            })
        }
    };


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.location.state)
    }

    render() {
        //remove errors? the ?
        let {formValue: {username, password, confirmPassword}, errors} = this.state;
        return (
            <section id={"register-section"} className={"spacer-one-top-lg"} style={{backgroundColor: '#d3d3d3'}}>
                <div className={"container"} style={{paddingBottom: "3.5rem"}}>
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-2 pb-2 text-left">
                            <h1 className="h2 font-alt">Register</h1>
                            <p className="w-md-75 mb-0 lead">Add more delicious to your menu and gallery</p>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <label className="form-label">
                                    Username
                                    <span className="text-danger-alt">*</span>
                                </label>

                                <input className={`form-control`} type="text" name={"username"} value={username}
                                       onChange={this.handleInputChange}/>
                                {errors?.username && <div className="text-danger">{errors.username}</div>}
                                <sup>The length of username has to be in 8~12</sup>
                            </div>
                            <div className="col-12">
                                <label className="form-label">
                                    Password
                                    <span className="text-danger-alt">*</span>
                                </label>
                                <input className="form-control " type="password" name={"password"}
                                       placeholder="Password"
                                       value={password}
                                       onChange={this.handleInputChange}
                                />
                                {errors?.password && <div className="text-danger">{errors.password}</div>}
                                <sup>The length of password has to be in 8~12, containing characters and numbers</sup>
                            </div>
                            <div className="col-12 mb-5">
                                <label className="form-label">
                                    Confirm Password
                                    <span className="text-danger-alt">*</span>
                                </label>
                                <input className="form-control " type="password" name={"confirmPassword"}
                                       placeholder="Confirm Password"
                                       value={confirmPassword}
                                       onChange={this.handleInputChange}
                                />
                                {errors?.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
                            </div>
                            <div className="col-12 mt-2">
                                <div className="text-left">
                                    <button type="submit" className="btn  btn-dark btn-wide  "
                                            disabled={this.state.submitting}>Register
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <Footer {...this.props}/>
            </section>

        )
    }

}

export default withRouter(Register);