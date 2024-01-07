import React, { useState, useEffect, useRef } from "react"
import { carousels } from "../data";
import gsap from "gsap";

function Carousel({ setLoadingState }) {

    const [ imageLoaded, setImageLoaded ] = useState(false)
    const [ carouselDisplayed, setCarouselDisplayed ] = useState()
    const [ carouselIndex, setCarouselIndex ] = useState(0)
    
    const tl = gsap.timeline()
    let mm = gsap.matchMedia();

    function changeCarousel() {
        if (carouselIndex === 5) {
            setCarouselIndex(0)
        } else {
            setCarouselIndex(carouselIndex + 1)
        }
    }

    function openingPage() {
        tl.to('#fake-layer', { opacity: 0, duration: 1, })
        tl.to('#logo', { opacity: 1, duration: 0.5, y: '0%' })
        tl.to('#line', { opacity: 1, duration: 0.5, y: '0%' })
        mm.add("(min-width: 976px)", () => {
            tl.to('#loading-bar', { width: '100%', duration: 6, ease: "power2.out" })
            tl.to('#loading-bar', { opacity: '0%', duration: 0.4 })
            tl.set('#loading-bar', { width: '0%', })
            tl.to('#loading-bar', { opacity: '30%' })
        });

        const timer = setTimeout(() => {

            gsap.to('#logo', { opacity: 0, duration: 0.5, y: '20%' })
            gsap.to('#line', { opacity: 0, duration: 0.5, y: '20%' })

            gsap.fromTo('#fake-layer', { 
                opacity: '0%', duration: 1,
            }, {
                opacity: '100%', onComplete: changeCarousel
            })
            
        }, 8000);
    }

    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            setLoadingState(true)
            setImageLoaded(true) 
            openingPage()
        }
        
        img.src = carousels[carouselIndex]
        setCarouselDisplayed(img.src)

        // return () => clearTimeout(timer)

    }, [carouselDisplayed, carouselIndex])
    
    return (
        <section className="overflow-hidden relative">

            <div id="loading-bar" className="bg-white opacity-30 absolute top-0 left-0 lg:h-[0.5rem] w-[0rem] z-10" ></div>
            <div id="fake-layer" className=" bg-stone-950 absolute top-0 left-0 w-full h-full"></div>
            {/* bg-gradient-to-b from-[rgba(0,0,0,0)] to-stone-950  */}
            <div id="layer" className="bg-gradient-to-b from-[rgba(0,0,0,0)] from-40% to-stone-950 to-100% absolute top-0 left-0 w-full h-full"></div>

            <div className="
                sm:bottom-8 sm:scale-[45%]
                md:bottom-10 md:scale-75
                lg:bottom-20 lg:scale-90
                xl:bottom-32 xl:scale-100
                scale-[40%] duration-300
                absolute bottom-2 left-0 right-0 
                mx-auto w-64">
                <svg id="logo" className=" border-white rounded-lg translate-y-0 opacity-100 lg:translate-y-[20%] lg:opacity-0 fill-white w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 514 138" version="1.1">
                    <path d="" stroke="none" fillRule="evenodd"/>
                    <path d="M 16.239 1.275 C 7.144 4.741, 1.305 13.485, 2.327 22.111 C 3.556 32.486, 8.748 37.213, 24.183 42.008 C 38.852 46.566, 42.230 50.924, 35.957 57.197 C 33.158 59.995, 32.479 60.204, 27.521 59.793 C 21.201 59.269, 16.301 56.318, 12.808 50.930 C 10.441 47.279, 10.441 47.279, 5.220 49.583 C 2.349 50.850, 0 52.499, 0 53.248 C 0 56.192, 6.195 64.168, 10.702 67.026 C 16.403 70.641, 20.900 71.987, 27.307 71.994 C 34.738 72.003, 40.489 70.129, 45.072 66.207 C 50.015 61.976, 52 57.761, 52 51.500 C 52 40.913, 46.795 35.763, 30.662 30.387 C 18.431 26.312, 16 24.532, 16 19.655 C 16 15.175, 18.811 12.809, 24.740 12.299 C 30.756 11.781, 35.633 14.156, 38.871 19.178 C 41.241 22.855, 41.241 22.855, 46.301 20.638 C 49.083 19.418, 51.518 17.947, 51.710 17.369 C 51.903 16.791, 50.585 14.146, 48.780 11.493 C 43.929 4.358, 36.903 0.742, 27.114 0.343 C 22.684 0.162, 18.136 0.552, 16.239 1.275 M 111.509 2.211 C 109.298 8.427, 88 70.479, 88 70.705 C 88 70.867, 91.272 71, 95.271 71 L 102.542 71 111.514 43.959 L 120.486 16.918 129.479 43.959 L 138.473 71 145.804 71 C 152.950 71, 153.117 70.943, 152.424 68.750 C 152.034 67.513, 146.661 51.875, 140.485 34 L 129.256 1.500 120.611 1.211 C 114.249 0.998, 111.846 1.262, 111.509 2.211 M 189 36 L 189 71 195.482 71 L 201.963 71 202.232 47.767 L 202.500 24.534 212.500 38.269 C 219.355 47.685, 223.036 51.925, 224.204 51.752 C 225.140 51.613, 230.428 45.461, 235.954 38.079 L 246 24.658 246 47.829 L 246 71 252.500 71 L 259 71 259 36 L 259 1 252.677 1 C 246.353 1, 246.353 1, 235.566 16 C 229.633 24.250, 224.491 30.984, 224.140 30.965 C 223.788 30.946, 218.581 24.196, 212.569 15.965 C 201.637 1, 201.637 1, 195.319 1 L 189 1 189 36 M 308 36 L 308 71 315 71 L 322 71 322 36 L 322 1 315 1 L 308 1 308 36 M 361.298 2.334 C 361.579 3.067, 366.803 11.887, 372.905 21.933 L 384 40.198 384 55.599 L 384 71 391 71 L 398 71 398 55.202 L 398 39.404 408.593 21.952 C 414.419 12.353, 419.610 3.712, 420.128 2.750 C 420.989 1.152, 420.394 1.001, 413.285 1.015 L 405.500 1.030 398.145 13.599 L 390.791 26.168 383.375 13.584 L 375.959 1 368.373 1 C 362.460 1, 360.899 1.294, 361.298 2.334 M 461.675 34.915 C 455.254 53.568, 450 69.338, 450 69.959 C 450 70.720, 452.340 70.992, 457.177 70.794 L 464.354 70.500 472.913 44.750 C 477.620 30.587, 481.709 19, 482 19 C 482.291 19, 486.380 30.587, 491.087 44.750 L 499.646 70.500 506.823 70.794 C 510.770 70.955, 514.011 70.730, 514.025 70.294 C 514.040 69.857, 508.759 54.087, 502.291 35.250 L 490.532 1 481.941 1 L 473.351 1 461.675 34.915 M 116.357 104.992 C 113.167 106.279, 111 109.977, 111 114.134 C 111 118.594, 114.817 122.303, 121.295 124.137 C 126.477 125.605, 128.308 127.556, 126.926 130.138 C 125.216 133.334, 117.660 131.654, 116.439 127.806 C 115.995 126.410, 115.273 126.087, 113.669 126.571 C 110.187 127.621, 109.549 128.714, 110.807 131.475 C 113.756 137.947, 125.197 140.229, 130.850 135.473 C 134.611 132.308, 135.635 128.128, 133.607 124.208 C 132.089 121.272, 128.816 119.293, 121.750 117.041 C 118.841 116.113, 118 115.326, 118 113.529 C 118 109.335, 123.116 108.779, 127.048 112.546 C 129.379 114.779, 130.020 114.948, 132.274 113.921 C 134.539 112.889, 134.714 112.466, 133.750 110.351 C 131.411 105.217, 122.558 102.489, 116.357 104.992 M 158 107.500 C 158 110.912, 158.099 111, 161.971 111 C 165.942 111, 165.942 111, 166.221 124.250 C 166.500 137.500, 166.500 137.500, 169.750 137.813 C 173 138.127, 173 138.127, 173 124.563 C 173 111, 173 111, 177 111 C 180.905 111, 181 110.917, 181 107.500 C 181 104, 181 104, 169.500 104 C 158 104, 158 104, 158 107.500 M 205.667 104.667 C 204.331 106.002, 204.958 126.964, 206.440 130.510 C 210.546 140.338, 226.454 140.338, 230.560 130.510 C 231.531 128.187, 232 123.306, 232 115.532 C 232 104, 232 104, 228.500 104 C 225 104, 225 104, 225 115.545 C 225 126.470, 224.868 127.223, 222.545 129.545 C 221.195 130.895, 219.375 132, 218.500 132 C 217.625 132, 215.805 130.895, 214.455 129.545 C 212.132 127.223, 212 126.470, 212 115.545 C 212 104, 212 104, 209.167 104 C 207.608 104, 206.033 104.300, 205.667 104.667 M 258 121 L 258 138 264.250 137.994 C 272.435 137.987, 277.296 136.557, 281.408 132.946 C 287.980 127.177, 288.249 115.947, 281.972 109.471 C 278.278 105.660, 272.842 104, 264.057 104 L 258 104 258 121 M 312 121 C 312 138.127, 312 138.127, 315.250 137.813 C 318.500 137.500, 318.500 137.500, 318.500 121 C 318.500 104.500, 318.500 104.500, 315.250 104.187 C 312 103.873, 312 103.873, 312 121 M 355.001 105.069 C 351.738 106.441, 348.162 109.823, 346.405 113.200 C 344.165 117.506, 344.597 126.113, 347.250 130.010 C 351.273 135.921, 354.361 137.500, 361.901 137.500 C 367.804 137.500, 369.132 137.137, 372.434 134.618 C 376.816 131.276, 379 126.746, 379 121 C 379 111.402, 372.749 104.821, 363.152 104.316 C 360.044 104.153, 356.375 104.492, 355.001 105.069 M 357.329 111.458 C 353.498 113.124, 351.727 116.145, 351.727 121.016 C 351.727 128.953, 359.216 133.889, 366.218 130.567 C 368.145 129.652, 370.235 127.779, 370.861 126.405 C 373.591 120.413, 371.161 112.949, 365.881 111.108 C 361.915 109.726, 361.248 109.753, 357.329 111.458 M 265 121 C 265 131, 265 131, 269.277 131 C 274.572 131, 277.501 129.041, 279.001 124.497 C 279.873 121.854, 279.873 120.146, 279.001 117.503 C 277.501 112.959, 274.572 111, 269.277 111 C 265 111, 265 111, 265 121" stroke="none" fillRule="evenodd"/>
                </svg>
                <p id="line" className="translate-y-0 opacity-100 lg:translate-y-[20%] lg:opacity-0 md:block hidden text-stone-300 font-light text-center mt-4 italic tracking-widest">Capture the perfect one!</p>
            </div>

            {/* NOTE: Blurhash */}
            { imageLoaded ? 
                <img src={carouselDisplayed} alt="" loading="eager"/> : 
                // <Blurhash
                //     className="scale-105"
                //     hash="L01Vi3j@fQj@j[fQfQfQfQfQfQfQ"
                //     width={window.innerWidth}
                //     height={window.innerWidth * 0.55}
                //     resolutionX={128}
                //     resolutionY={128}
                //     punch={1}
                // />
                <div className=" bg-stone-950 h-screen w-full flex justify-center items-center">
                    <div className="flex gap-3">
                        <div className="animate-up-down-1 loading-dot w-5 h-5 border-2 border-white rounded-full"></div>
                        <div className="animate-up-down-2 loading-dot w-5 h-5 border-2 border-white rounded-full"></div>
                        <div className="animate-up-down-3 loading-dot w-5 h-5 border-2 border-white rounded-full"></div>
                    </div>
                </div>
            }
        </section>
    )
};

export default Carousel;
