import React from "react"
import img1 from '../assets/bg-img/food-84.webp';
import img2 from '../assets/bg-img/food-100.webp';
import img3 from '../assets/bg-img/food-135.webp';

function CheckGallery(props) {

    const imgArr = [img1, img2, img3];
    const randomIndex = Math.floor(Math.random() * imgArr.length)

    return (
        <section className="cont relative group overflow-hidden
            flex justify-center items-center lg:justify-end lg:items-end lg:h-96 h-full sm:h-80
        ">
            <div className="bg-black opacity-[30%] w-full h-full absolute top-0 left-0 z-10"></div>
            <div className="lg:hidden absolute top-0 left-0 
                h-full flex items-center
            ">
                <img 
                    className="w-full object-cover" 
                    src={imgArr[randomIndex]} 
                    alt="" 
                />

            </div>

            {/* <div className="bg-about5 bg-cover w-full h-full"></div> */}

            <button className="
            flex items-center gap-2 cursor-pointer 
            border-[1px] border-white bg-[rgba(0,0,0,0.4)] text-white
            rounded-lg py-2 px-4 h-fit
            z-20 active:bg-white active:text-black duration-200
            lg:border-0 
            ">
                Check <span className="font-semibold tracking-wider">Gallery</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
        </section>
    )
};

export default CheckGallery;
