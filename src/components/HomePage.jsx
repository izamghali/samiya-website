import React from "react"
import Carousel from "./Carousel";
import About from "./About";
import Service from "./Service";

function HomePage(props) {
    return (
        <div>
            <Carousel/>
            {/* <About /> */}
            <Service/>
        </div>
    )
};

export default HomePage;
