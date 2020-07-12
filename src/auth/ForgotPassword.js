import React, {Component} from 'react';
import Footer from "../Footer";

class ForgotPassword extends Component {
    state = {
        formValue: {
            username: "",

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
            backgroundSize: 'cover',
            paddingTop: "6.7rem",
            backgroundColor: '#d3d3d3'
        };
        //remove errors? the ?
        //button submit? or button button
        let {formValue: {username}, errors} = this.state;
        return (
            <section id={"login-section"} className={"spacer-one-top-lg"} style={bg}>
                <div className={"container spacer-double-lg"}>
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-5 pb-5 text-left">
                            <h1 className="h2 font-alt">Forgot Password</h1>
                            <p className="w-md-75 mb-0 lead">Enter your email to recover your password</p>
                            {errors?.general && <span className={"text text-danger"}>{errors?.general}</span>}
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
                            <div className="col-12">
                                <div className="text-left">
                                    <button type="submit" className={`btn  btn-dark btn-wide`}
                                            disabled={this.state.submitting}>Submit
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

export default ForgotPassword;
