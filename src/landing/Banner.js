import React, {Component} from 'react';

class Banner extends Component {
    render() {
        const {head: bannerData} = this.props;
        console.log(bannerData)
        const features = bannerData.description.split(' ');
        return (
            <>
                <div className={"main-slider slider flexslider gradient-overlay gradient-overlay-dark"}>
                    <div className={"banner-image"}>
                        <img src={bannerData.imgUrl} className={"banner-image"}/>
                    </div>
                    <svg className="hero-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100"
                         preserveAspectRatio="none" width="100%" height="100">
                        <path d="M0 100 C40 0 60 0 100 100 Z"></path>
                    </svg>
                </div>


                <div className="inner-hero">
                    <div className="container  hero-content">
                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-md-10 col-lg-10">
                                <h1 className="display-4 mb-0 text-white">{bannerData.title}</h1>
                                <p className=" text-white text-uppercase font-weight-700 font-size-13 letter-spacing-medium mb-0">
                                    {
                                        features.map((item, index) =>
                                            <React.Fragment key={index}>{item} {index !== features.length - 1 &&
                                            <span className="circle-divider">·</span>}</React.Fragment>
                                        )
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"clearfix"}></div>
            </>
        );
    }
}

export default Banner;