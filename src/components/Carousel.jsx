import React, { useState, useEffect } from "react"
import carousel1 from '../assets/carousel/1.webp';
import carousel2 from '../assets/carousel/2.webp';
import carousel3 from '../assets/carousel/3.webp';
import { Blurhash } from "react-blurhash";
import gsap from "gsap";

function Carousel(props) {

    const carousels = [
        {
            src: carousel1,
            hash: "LEAvd%0g58}?E3xDt6R.0N-oxsIq"
        },
        {
            src: carousel2,
            hash: "LEAvd%0g58}?E3xDt6R.0N-oxsIq"
        },
        {
            src: carousel3,
            hash: "LEAvd%0g58}?E3xDt6R.0N-oxsIq"
        },
    ]

    const [ imageLoaded, setImageLoaded ] = useState(false)
    const [ carouselDisplayed, setCarouselDisplayed ] = useState()

    useEffect(() => {
        const img = new Image()
        img.onload = () => { setImageLoaded(true) }

        let index = 0
        
        const tl = gsap.timeline()
        setInterval(() => {

            tl.to('#loading-bar', {
                width: '100%',
                duration: 4,
                ease: 'none'
            })
            tl.set('#loading-bar', { width: '0%' })
            
        }, 0);

        img.src = carousels[index].src
        setCarouselDisplayed(img.src)

    }, [carouselDisplayed])

    // function carouselLoading() {
    //     let carouselTL = gsap.timeline();
    //     let carouselDuration = 8;
    //     let bgOpacityDuration = 1.2;
    //     let blur = "blur(4px)";

    //     function transition(img) {
    //         // preload
    //         carouselTL.to(".carousel-preload", { width: "100vw", duration: carouselDuration, ease: "linear", })
    //         // img blur
    //         carouselTL.to('.carousel-img-container img', { filter: blur })
    //         // bg opacity
    //         carouselTL.to('.carousel-bg', { opacity: 1, duration: bgOpacityDuration, reverse: true }, "<")
        
    //         // preload set to start
    //         carouselTL.set(".carousel-preload", { width: "0vw", }, ">")
    //         // img change
    //         carouselTL.to(`${img}`, { opacity: 0 })
    //         if (img === ".carousel-1") {
    //         carouselTL.set([".carousel-1, .carousel-2, .carousel-3, .carousel-4, .carousel-5, .carousel-6"], { opacity: 1, duration: 1}, "<")
    //         }
        
    //         // img blur
    //         carouselTL.to('.carousel-img-container img', { filter: "blur(0px)" })
    //         // bg opacity
    //         carouselTL.to('.carousel-bg', { opacity: 0, duration: bgOpacityDuration, reverse: true }, "<")
    //     }

    //     transition(".carousel-6")
    //     transition(".carousel-5")
    //     transition(".carousel-4")
    //     transition(".carousel-3")
    //     transition(".carousel-2")
    //     transition(".carousel-1")

    //     carouselTL.repeat(-1)  
    // }
    
    return (
        <section className="overflow-hidden relative">

            <div id="loading-bar" className="bg-white opacity-30 absolute top-0 left-0 lg:h-[0.5rem] w-[0rem] z-10" ></div>

            {/* NOTE: Blurhash */}
            { imageLoaded ? 
                <img src={carouselDisplayed} alt="" /> : 
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
