import React, { useState, useEffect } from "react"
import carousel1 from '../assets/carousel/1.webp';
import { Blurhash } from "react-blurhash";

function Carousel(props) {

    const [ imageLoaded, setImageLoaded ] = useState(false)

    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            setImageLoaded(true)
        }
        img.src = carousel1
    }, [carousel1])

    // FIXME: Add blurhash while image loading
    return (
        <section className="overflow-hidden">

            {/* NOTE: Blurhash */}
            { imageLoaded ? 
                <img src={carousel1} alt="" /> : 
                <Blurhash
                    className="scale-105"
                    hash="LEAvd%0g58}?E3xDt6R.0N-oxsIq"
                    width={window.innerWidth}
                    height={window.innerWidth * 0.55}
                    resolutionX={128}
                    resolutionY={128}
                    punch={1}
                />
            }
        </section>
    )
};

export default Carousel;
