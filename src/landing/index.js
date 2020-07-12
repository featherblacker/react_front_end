import React, {Component} from 'react';
import Banner from "./Banner";
import Gallery from "./Gallery";
import Menu from "./Menu";
import Header from "../Header";
import Footer from "../Footer";
import {getBuilderFormData, getBuilderFormDataById} from "../services/profile";
import {groupBy, isEmptyObject} from "../helpers";
import Loader from "../Loader";
import {withRouter} from 'react-router-dom'

class Landing extends Component {
    state = {
        data: {}
    };

    componentDidMount() {
        console.log(this.props)
        const id = this.props.match.params.id;
        console.log(id)
        if (id) {
            getBuilderFormDataById(id).then(response => {
                response.result.menu = groupBy(response.result.menu.menuItems, 'category');
                this.setState({
                    data: response.result
                })
            })
        } else {
            getBuilderFormData().then(response => {
                response.result.menu = groupBy(response.result.menu.menuItems, 'category');
                this.setState({
                    data: response.result
                })
            })
        }

    }

    render() {
        if (isEmptyObject(this.state.data)) {
            return <Loader/>
        }
        console.log(this.state)
        return (
            <>
                <Header/>
                <Banner {...this.state.data}/>
                <Gallery {...this.state.data}/>
                <Menu {...this.state.data}/>
                <Footer/>
            </>
        );
    }
}


export default withRouter(Landing);