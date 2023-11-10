import React, { useState, useEffect } from "react"
import carousel1 from '../assets/carousel/1.webp';

function Carousel(props) {

    // FIXME: Add blurhash while image loading
    return (
        <div>
            <img src={carousel1} alt="" />
        </div>
    )
};

export default Carousel;
