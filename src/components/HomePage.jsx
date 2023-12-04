import React, { useEffect } from "react"
import Carousel from "./Carousel";
import About from "./About";
import Service from "./Service";
import Team from "./Team";
import Client from "./Client"
import Work from "./Work";
import Footer from "./Footer";
import CheckGallery from "./CheckGallery";

function HomePage({ setPage, setClickedCategory }) {

    useEffect(() => {
        setClickedCategory('')
    })

    return (
        <div className="">
            <Carousel/>
            <Service/>
            <Work/>
            <Team/>
            <About />
            <CheckGallery setPage={setPage} />
            <Client/>
            <Footer />
        </div>
    )
};

export default HomePage;
