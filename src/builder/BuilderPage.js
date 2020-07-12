import React, {Component} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import {REQUEST_ENDPOINT} from "../App";
import Loader from "../Loader";
import {Redirect, withRouter} from "react-router-dom";
import {profile} from '../services/profile'

export const TOKEN_KEY = 'tb23-token';

class BuilderPage extends Component {
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
        profile().then((response) => {
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
                <Header {...this.props} user={this.state.user}/>
                <main className="main">
                    {
                        !this.state.loading &&
                        (
                            this.state.user ? (this.props.children) : <Redirect to={'/'}/>
                        )
                    }
                </main>
                <Footer {...this.props}/>
            </>
        );
    }
}

export default BuilderPage;
