import React from "react"
import Carousel from "./Carousel";
import About from "./About";
import Service from "./Service";
import Team from "./Team";
import Client from "./Client"

function HomePage(props) {
    return (
        <div>
            <Carousel/>
            {/* <About /> */}
            <Service/>
            <Team/>
            <Client/>
        </div>
    )
};

export default HomePage;
