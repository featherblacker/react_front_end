import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";

const bg = {
    background: "url(/assets/img/home2.png)",
    backgroundSize: 'cover',
    paddingTop: "6.7rem",
};


class Home extends Component {
    render() {
        return (
            <>
                <Header {...this.props}/>
                <main>
                    <section className={"bg spacer-one-top-md"} style={bg}>
                        <div className={"container spacer-double-lg"}>
                            <div className={"row"}>
                                <div className="col-6">
                                    <h1 style={{fontSize: '60px', marginBottom: "60px"}}>Restaurant Builder</h1>
                                    <p style={{fontSize: '20px', marginBottom: "60px"}}>Here is your restaurant builder,
                                        and you can access your restaurant page or edit it in profile!</p>
                                    <a href={"/register"} className={"btn btn-dark"}>Register</a>
                                </div>
                                <div className={"col-6 align-self-center"}>
                                    <img style={{width: "70%", float: "right"}} src={"/assets/img/home.png"} alt={"#"}/>
                                </div>
                            </div>
                        </div>
                        <Footer {...this.props}/>
                    </section>
                </main>

            </>
        );
    }
}

export default Home;
