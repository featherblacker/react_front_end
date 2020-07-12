import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {withRouter} from "react-router-dom"

class Debug extends Component {
    render() {
        console.log(this.props)
        return (
            <>
                <Header {...this.props}/>
                <main>
                    Home
                </main>
                <Footer {...this.props}/>
            </>
        );
    }
}

export default withRouter(Debug);
