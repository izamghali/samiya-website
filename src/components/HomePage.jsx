import React from "react"
import Carousel from "./Carousel";
import About from "./About";
import Service from "./Service";
import Team from "./Team";

function HomePage(props) {
    return (
        <div>
            <Carousel/>
            {/* <About /> */}
            <Service/>
            <Team/>
        </div>
    )
};

export default HomePage;
