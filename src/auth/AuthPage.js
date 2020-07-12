import React, {Component} from 'react';
import Header from "../Header";
import {REQUEST_ENDPOINT} from "../App";
import Loader from "../Loader";
import {Redirect} from "react-router-dom";

export const TOKEN_KEY = 'tb23-token';


class AuthPage extends Component {
    token = null;

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            user: null
        };
        this.token = localStorage.getItem(TOKEN_KEY) || '';
    }

    componentDidMount() {
        if (!!this.token) {
            this.checkTokenValid();
        } else {
            this.setState({loading: false});
        }
    }

    checkTokenValid() {
        fetch(REQUEST_ENDPOINT + 'me', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`
            }
        }).then((response) => {
            this.setState({loading: false});
            response.json().then(data => {
                if (data.result) {
                    this.setState({user: data.result});
                } else {
                    this.token = '';
                    // localStorage.removeItem(TOKEN_KEY);
                }
            });
        }).catch(e => {
            this.setState({loading: false});
        });
    }

    render() {
        return (
            <>
                {this.state.loading && <Loader/>}
                <Header {...this.props}/>
                <main className="main">
                    {
                        !this.state.loading &&
                        (
                            this.state.user ? <Redirect to={'/'}/> : (this.props.content)
                        )
                    }
                </main>
            </>
        );
    }
}

export default AuthPage;
