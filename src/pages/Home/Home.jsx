import React from "react";
import Slider from "../../components/Slider/Slider";
import AboutSection from "../../components/AboutSection/AboutSection";
import Categories from "../../components/Categories/Categories";
import List from "../../components/List/List";
import "./Home.scss"

const Home = () => {
    return (
        <div className="wrapper">
            <Slider />
            <AboutSection />
            <Categories />
        </div>
    )
}

export default Home