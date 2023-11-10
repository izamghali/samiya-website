import React, { useState, useEffect } from "react"
import { encode } from "blurhash";

function Carousel(props) {

    const testSrc = 'src/assets/carousel/1.webp';

    // FIXME: Add blurhash while image loading
    return (
        <div>
            <img src={testSrc} alt="" />
        </div>
    )
};

export default Carousel;
