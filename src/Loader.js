import React, {Component} from 'react';
import './loader.scss';


class Loader extends Component {
    render() {
        return (
            <div className="progress">
                <div className="progress-bar bar-one"></div>
                <div className="progress-bar bar-two"></div>
                <div className="progress-shadow"></div>
            </div>
        );
    }
}

export default Loader;
