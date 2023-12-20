import React, { useEffect, useState } from "react"
import Carousel from "./Carousel";
import About from "./About";
import Service from "./Service";
import Team from "./Team";
import Client from "./Client"
import Work from "./Work";
import Footer from "./Footer";
import CheckGallery from "./CheckGallery";

function HomePage({ setPage, setClickedCategory }) {

    const [ loadingState, setLoadingState ] = useState(false)

    useEffect(() => {
        setClickedCategory('')
    })

    return (
        <div className="">
            <Carousel setLoadingState={setLoadingState} />
            <Service loadingState={loadingState}/>
            <Work loadingState={loadingState}/>
            <Team loadingState={loadingState}/>
            <About />
            <CheckGallery setPage={setPage} loadingState={loadingState} />
            <Client loadingState={loadingState}/>
            <Footer />
        </div>
    )
};

export default HomePage;
