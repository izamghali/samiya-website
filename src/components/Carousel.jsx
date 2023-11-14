import React, { useState, useEffect } from "react"
import carousel1 from '../assets/carousel/1.webp';

function Carousel(props) {

    // FIXME: Add blurhash while image loading
    return (
        <section className="">
            <img src={carousel1} alt="" />
        </section>
    )
};

export default Carousel;
