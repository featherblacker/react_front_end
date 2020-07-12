import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {isEmptyObject} from "../helpers";
import {login} from "../services/auth";
import Footer from "../Footer";


class Login extends Component {

    state = {
        formValue: {
            username: "",
            password: "",
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
    }

    handleSubmit = (e) => {
        //debugger;
        e.preventDefault();
        let errors = {};
        let {formValue} = this.state;
        if (formValue.username.trim() === "") {
            errors.username = "invalid username";
        }
        if (formValue.password.trim() === "") {
            errors.password = "invalid password";
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
                login(formValue.username, formValue.password).then(response => {
                    this.props.history.push("./profile")
                }).catch(error => {
                    console.error(error)
                });
                console.log(this.state.formValue)
            })
        }
    };

    componentDidMount() {
        console.log(this.props.location)
    }


    render() {
        const bg = {
            background: '#d3d3d3',
            backgroundSize: 'cover',
            flexGlow: '0 0 200px',
        };
        const bg2 = {
            paddingBottom: "5.9rem",
        };
        //remove errors? the ?
        let {formValue: {username, password}, errors} = this.state;
        let {status} = this.props.location.state || {};
        return (
            <section className={"bg spacer-one-top-lg"} style={bg}>
                <section id={"login-section"} className={"spacer-one-top-xm"}>
                    <div className={"container bg2"} style={bg2}>
                        <form onSubmit={this.handleSubmit}>
                            <div className="mb-5 pb-5 text-left">
                                <h1 className="h2 font-alt">Login</h1>
                                <p className="w-md-75 mb-0 lead">Add more delicious to your menu and gallery</p>
                                {status === "Active" && <p className={"alert alert-success"}>Login successfully</p>}
                                {status === "Inactive" &&
                                <p className={"alert alert-info"}>The pair of username and password doesn't match.</p>}
                            </div>
                            <div className="row">
                                <div className="col-12 mb-5">
                                    <label className="form-label">
                                        Username
                                        <span className="text-danger-alt">*</span>
                                    </label>
                                    <input className={`form-control`} type="text" name={"username"} value={username}
                                           onChange={this.handleInputChange}/>
                                    {errors?.username && <div className="text-danger">{errors.username}</div>}
                                </div>
                                <div className="col-12 mb-5">
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
                                </div>
                                <div className="col-12 mt-4">
                                    <div className="text-left">
                                        <button type="submit" className="btn  btn-dark btn-wide"
                                                disabled={this.state.submitting}>Login
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <Footer {...this.props}/>
                </section>
            </section>

        )
    }

}

export default withRouter(Login);