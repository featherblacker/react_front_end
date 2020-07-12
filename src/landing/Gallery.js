import React, {Component} from 'react';

class Gallery extends Component {
    render() {
        const {gallery: galleryData} = this.props;
        return (
            <section id="gallery" className="bg-secondary spacer-double-lg">
                <div className="container">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col">
                                <div className="mb-5 pb-5 text-center">
                                    <span className="label-title mb-3">Food Gallery</span>
                                    <h1 className="h2 font-alt">Foxeresto Food Gallery</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row card-gutters">
                        {
                            galleryData.galleryItem.map((item, index) =>
                                <div className="col-sm-6 col-lg-3 mb-2  " key={index}>
                                    <div className="grid-item card border-0">
                                        <a href={item.url} className="hover-effect mb-0 popup-image ">
                                            <img className="card-img" src={item.imageUrl} alt={item.title}/>
                                            <span className="hover-effect-container">
                                        <span className="hover-effect-icon">
                                            <span className="fa fa-plus hover-effect-icon-inner"></span>
                                        </span>
                                     </span>
                                        </a>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default Gallery;