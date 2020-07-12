import React, {Component} from 'react';
import Footer from "../Footer";

class ResetPassword extends Component {
    state = {
        formValue: {
            password: "",
            confirmPassword: ""
        },
        errors: {
            password: "",
            confirmPassword: ""
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
        let {formValue} = this.state;
        console.log(formValue);
    };

    render() {
        const bg = {
            backgroundColor: '#d3d3d3',
            backgroundSize: 'cover',
            paddingTop: "7.4rem",
        };
        let {formValue, errors} = this.state;
        let {password, confirmPassword} = formValue;
        return (
            <section id={"login-section"} className={"spacer-one-top-lg"} style={bg}>
                <div className={"container spacer-double-sm"}>
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-5 pb-5 text-left">
                            <h1 className="h2 font-alt">Reset Password</h1>
                            <p className="w-md-75 mb-0 lead">Please enter your new password.</p>
                        </div>
                        <div className="row">
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
                            <div className=" col-12 mb-5">
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
                            <div className="col-12">
                                <div className="text-left">
                                    <button type="submit" className={`btn  btn-dark btn-wide`}
                                            disabled={this.state.submitting}>Sign up
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

export default ResetPassword;
