import React from "react";
import "./home.scss";
import { Aside, Header, Intro } from "../../components";
const Home = () => {
    return (
        <>
            <div className='home'>
                <Aside />
                <div className='home__container'>
                    <Header />
                    <Intro />
                </div>
            </div>
        </>
    );
};

export default Home;
