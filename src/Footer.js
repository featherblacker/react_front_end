import React, {Component} from 'react';

const bl = {
    marginBottom: "1rem",
};


class Footer extends Component {
    render() {
        return (
            <footer className="footer bg-dark spacer-one-top-xs spacer-one-bottom-xs">
                <svg className="footer-svg"
                     xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none"
                     width="100%" height="100">
                    <path d="M0 100 C40 0 60 0 100 100 Z"></path>
                </svg>
                <div className="container space-top-2 space-bottom-1">
                    <div className="row justify-content-lg-start" style={bl}>
                        <div className="col-sm-6  col-lg-3 mb-5 mb-lg-0">
                            <a className="d-inline-block mb-3 footer-logo" href="index.html">
                                <img src="assets/svg/logo-light.svg" alt=""/>
                            </a>
                            <p className="font-size-14 ">Dear guests, you are welcomed to dine with us at Foxe
                                restaurant. Have a pleasant dining experience.</p>
                            <img src="assets/img/signature.png" className="max-width-xlg" alt=""/>
                        </div>
                        <div className="col-sm-6 col-lg-3 mb-4">
                            <h3 className="h6 text-white mb-3  font-size-15">Address</h3>
                            <address>
                                <ul className="list-group list-group-flush list-group-borderless mb-0">
                                    <li className="list-group-item">+1 (613) 123-1234</li>
                                    <li className="list-group-item">
                                        <a href="mailto:customers@ucareer.net">customers@ucareer.ca</a>
                                    </li>
                                    <li className="list-group-item">Algonquin College, Ottawa, ON</li>
                                </ul>
                            </address>
                        </div>
                        <div className=" col-sm-6 col-lg-3 mb-4">
                            <h3 className="h6 text-white mb-3  font-size-15">Hours of opening</h3>
                            <div className="opening-hours-container font-size-14 ">
					<span className="opening-hours-holder-inner">
						<span className="opening-hours-day-holder">
							<span className="opening-hours-day">Monday</span>
						</span>
						<span className="opening-hours-line"/>
						<span className="opening-hours-time">10:00 - 22:00</span>
					</span>
                            </div>
                            <div className="opening-hours-container font-size-14 ">
					<span className="opening-hours-holder-inner">
						<span className="opening-hours-day-holder">
							<span className="opening-hours-day">Tuesday</span>
						</span>
						<span className="opening-hours-line"/>
						<span className="opening-hours-time">10:00 - 22:00</span>
					</span>
                            </div>
                            <div className="opening-hours-container font-size-14 ">
					<span className="opening-hours-holder-inner">
						<span className="opening-hours-day-holder">
							<span className="opening-hours-day">Wednesday</span>
						</span>
						<span className="opening-hours-line"/>
						<span className="opening-hours-time">10:00 - 22:00</span>
					</span>
                            </div>
                            <div className="opening-hours-container font-size-14 ">
					<span className="opening-hours-holder-inner">
						<span className="opening-hours-day-holder">
							<span className="opening-hours-day">Thursday</span>
						</span>
						<span className="opening-hours-line"/>
						<span className="opening-hours-time">10:00 - 22:00</span>
					</span>
                            </div>
                        </div>

                        <div className=" col-sm-6 col-lg-3 mb-4">
                            <h3 className="h6 text-white mb-3  font-size-15">...</h3>
                            <div className="opening-hours-container font-size-14 ">
					<span className="opening-hours-holder-inner">
						<span className="opening-hours-day-holder">
							<span className="opening-hours-day">Friday</span>
						</span>
						<span className="opening-hours-line"/>
						<span className="opening-hours-time">09:00 - 02:30</span>
					</span>
                            </div>
                            <div className="opening-hours-container font-size-14 ">
					<span className="opening-hours-holder-inner">
						<span className="opening-hours-day-holder">
							<span className="opening-hours-day">Saturday</span>
						</span>
						<span className="opening-hours-line"/>
						<span className="opening-hours-time">09:00 - 02:30</span>
					</span>
                            </div>
                            <div className="opening-hours-container font-size-14 ">
					<span className="opening-hours-holder-inner">
						<span className="opening-hours-day-holder">
							<span className="opening-hours-day">Sunday</span>
						</span>
						<span className="opening-hours-line"/>
						<span className="opening-hours-time">Closed</span>
					</span>
                            </div>
                        </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-sm-4 mb-3 mb-sm-0">
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item mb-2 mb-lg-0 mr-1">
                                        <a className="social-icon " href="https://www.facebook.com/">
                                            <i className="fab fa-facebook-f"/>
                                        </a>
                                    </li>
                                    <li className="list-inline-item mr-1">
                                        <a className="social-icon " href="https://www.google.com/">
                                            <span className="fab fa-google"/>
                                        </a>
                                    </li>
                                    <li className="list-inline-item mr-1">
                                        <a className="social-icon " href="https://twitter.com/home">
                                            <span className="fab fa-twitter"/>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="social-icon " href="https://www.instagram.com/?hl=zh-cn">
                                            <span className="fab fa-instagram"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-4 text-sm-right">
                                <p className="small  text-secondary  mb-0">&copy; 2019 UCareer. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
            </footer>
    );
    }
    }

    export default Footer;
