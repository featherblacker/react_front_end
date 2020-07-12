import React, {Component} from 'react';

class Menu extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    render() {
        const {menu: menuData} = this.props;
        console.log(menuData)
        return (
            <section id="menu" className="spacer-double-lg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className="mb-5 pb-5 text-center">
                                <span className="label-title mb-3">Our Menu</span>
                                <h1 className="h2 font-alt">GoodSpeed Menu</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <ul className=" mb-5 pb-5 nav nav-menu-tabs" role="tablist">


                                {
                                    menuData.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <a
                                                    className={` font-weight-700 letter-spacing-medium`}
                                                    data-toggle="tab"
                                                    href={`#tab-${item.category}`}
                                                    role="tab"
                                                    aria-controls={`tab-${item.category}`}
                                                    aria-selected="true">{item.category}
                                                </a>
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                    </div>

                </div>

                <div className="container">

                    <div className="row justify-content-around align-items-center">
                        <div className="col-md-8 col-lg-7 ">
                            <div className="tab-content">
                                {
                                    menuData.map((category, index) => {
                                        return (
                                            <div className={`tab-pane fade ${index === 0 ? 'active show' : ''}  `}
                                                 id={`tab-${category.category}`}
                                                 role="tabpanel" key={index}>
                                                {
                                                    category.menuItems.map((item, i) => {
                                                        return (
                                                            <div key={i} className={`media align-items-center mb-4`}>
                                                                <img className="avatar-sm rounded-circle mr-3"
                                                                     src={item.imageUrl} alt=""/>
                                                                <div className="media-body position-relative">
                                                                    <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                                                        className="bg-white">{item.name}</span></h6>
                                                                    <span className="dots-price"></span>
                                                                    <span
                                                                        className="menu-price mb-0 h6">${item.price}</span>
                                                                    <p className="mb-0 font-size-14">{item.description}</p>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }

                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>

                </div>

            </section>
        );
    }
}

export default Menu;