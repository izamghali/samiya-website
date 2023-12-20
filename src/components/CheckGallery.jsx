import React from "react"
import { shuffle } from "../helpers.js";

import img1 from '../assets/check-gallery/food-84.webp';
import img2 from '../assets/check-gallery/food-44.jpg';
import img3 from '../assets/check-gallery/food-135.webp';
import img4 from '../assets/check-gallery/food-47.webp';
import img5 from '../assets/check-gallery/food-87.jpg';

function CheckGallery({ setPage, loadingState }) {

    const imgArr = [img1, img2, img3, img4, img5];
    const randomIndex = Math.floor(Math.random() * imgArr.length)
    shuffle(imgArr)

    return (
        <section className="cont relative overflow-hidden
            flex justify-center items-center lg:justify-end lg:items-end lg:h-96 h-full sm:h-80
        ">
            <div id="check-gallery-layer" className="absolute top-0 left-0 z-10 bg-black opacity-[30%] lg:opacity-0 w-full h-full"></div>
            <div className="absolute top-0 left-0 lg:hidden h-full flex items-center">
                <img className="w-full object-cover" src={imgArr[randomIndex]} alt="" />
            </div>

            {/* images container */}
            <div className="absolute top-0 -left-36 hidden lg:flex space-x-[-13rem] z-10">
                
                { imgArr.map((data, index) => {
                    return <div className="w-[40rem] rotate-[82deg] overflow-hidden 
                            blur-[1.5px] hover:blur-0 duration-700" key={index}>
                        <img className="w-full h-full -rotate-[82deg] hover:scale-105 duration-700" src={data} alt="" key={index} loading={ loadingState ? "eager" : "lazy" } />
                    </div>
                })}

            </div>

            <button onClick={() => { setPage(true) }} className="
            flex items-center gap-1 cursor-pointer 
            border-[1px] border-white bg-[rgba(0,0,0,0.4)] text-white
            rounded-full py-2 px-4 h-fit
            z-20 active:bg-white active:text-black duration-200
            group lg:hover:px-5 lg:hover:bg-white lg:hover:text-black
            lg:active:px-5 lg:active:bg-white lg:active:text-black
            ">  Check <span className="font-semibold lg:group-hover:tracking-wider duration-200 lg:group-hover:text-black text-white group-active:text-black group-active:tracking-wider">Gallery</span>
                <svg className="bi bi-chevron-double-right w-5 h-5 fill-white lg:group-hover:fill-black lg:group-hover:translate-x-2 group-active:fill-black group-active:translate-x-2 duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                    <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
        </section>
    )
};

export default CheckGallery;
