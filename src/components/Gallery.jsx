import React, { useState, useEffect } from "react"
import { shuffle, filterTextColorChange } from "../helpers.js";
import test1 from "../assets/gallery-test/test-1.webp"
import test2 from "../assets/gallery-test/test-2.webp"
import test3 from "../assets/gallery-test/test-3.webp"
import test4 from "../assets/gallery-test/test-4.webp"
import test5 from "../assets/gallery-test/test-5.webp"
import test6 from "../assets/gallery-test/test-6.webp"
import test7 from "../assets/gallery-test/test-7.webp"
import test8 from "../assets/gallery-test/test-8.webp"
import test9 from "../assets/gallery-test/test-9.webp"
import test10 from "../assets/gallery-test/test-10.webp"
import test11 from "../assets/gallery-test/test-11.webp"
import test12 from "../assets/gallery-test/test-12.webp"
import test13 from "../assets/gallery-test/test-13.webp"
import test14 from "../assets/gallery-test/test-14.webp"
import test15 from "../assets/gallery-test/test-15.webp"
import test16 from "../assets/gallery-test/test-16.webp"
import test17 from "../assets/gallery-test/test-17.webp"
import test18 from "../assets/gallery-test/test-18.webp"

function Gallery(props) {
    
    const { clickedCategory, setClickedCategory, } = props;

    const images = [
        { src: test1, cat: 'Fashion' },
        { src: test2, cat: 'Fashion' },
        { src: test3, cat: 'Fashion' },
        { src: test4, cat: 'Fashion' },
        { src: test5, cat: 'Fashion' },
        { src: test6, cat: 'Food' },
        { src: test7, cat: 'Food' },
        { src: test8, cat: 'Food' },
        { src: test9, cat: 'Food' },
        { src: test10, cat: 'Food' },
        { src: test11, cat: 'Food' },
        { src: test12, cat: 'Product' },
        { src: test13, cat: 'Product' },
        { src: test14, cat: 'Product' },
        { src: test15, cat: 'Product' },
        { src: test16, cat: 'Product' },
        { src: test17, cat: 'Fashion' },
        { src: test18, cat: 'Product' },
    ]

    const [ clickedPhoto, setClickedPhoto ] = useState([])
    
    const [ filteredImages, setFilteredImages ] = useState(images)

    useEffect(() => {
        if (clickedCategory) {
            setFilteredImages(images.filter(image => image.cat === clickedCategory ))
        } else {
            setFilteredImages(shuffle(images))
        }
    }, [clickedCategory])

    function showImage(event) {
        const layer = document.getElementById('layer');
        const clicked = event.target.src
        setClickedPhoto(prevPhotos => [clicked])

        layer.classList.add('flex')
        layer.classList.remove('hidden')

        console.log(event.target.loading);
        
        setTimeout(() => { // smooth layer fade-in
            layer.classList.add('opacity-100')
            layer.classList.remove('opacity-0')
        }, 50)
        
    }

    function hideImage() {
        layer.classList.add('opacity-0') 
        layer.classList.remove('opacity-100') 

        setTimeout(() => {
            layer.classList.add('hidden') 
            layer.classList.remove('flex') 
        }, 400) 
    }

    function clickedFilter(event) {
        const filterBtns = document.querySelectorAll('.filter-btn')
        
        if (event.target.innerHTML === clickedCategory) {
            setClickedCategory('')
            filterBtns.forEach(btn => btn.classList.remove('text-accentLess'))
            filterBtns.forEach(btn => btn.classList.add('text-accent'))
        } else { 
            setClickedCategory(event.target.innerHTML)
            filterTextColorChange(event)
        } 

        
    }

    return (
        <section className="cont black-cont pt-0">

            <div className=" max-w-6xl mx-auto">
                {/* filter */}
                <div className="mb-6">
                    {/* a tag container */}
                    <div className="flex gap-8 sm:gap-10 flex-row-reverse md:flex-row">
                        <button onClick={clickedFilter} className="filter-btn uppercase text-accent duration-300">Food</button>
                        <button onClick={clickedFilter} className="filter-btn uppercase text-accent duration-300">Fashion</button>
                        <button onClick={clickedFilter} className="filter-btn uppercase text-accent duration-300">Product</button>
                    </div>
                    {/* drop down */}
                </div>

                {/* gallery */}
                <div className="columns-1 lg:columns-3 sm:columns-2
                    gap-x-6 space-y-6">
                    { filteredImages.map((photo, index) => {
                        return <div className="overflow-hidden group cursor-pointer" onClick={showImage} key={index}>
                            <img loading={index < 3 ? 'eager' : 'lazy'} className="group-hover:scale-110 duration-300" src={photo.src} alt="" name={photo.cat} />
                        </div>
                    })}
                </div>
                
                {/* preview */}
                <div className="fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.5)] hidden justify-center items-center duration-500" onClick={hideImage} id="layer">
                    <div className="">
                        {clickedPhoto.map((photo, index) => {
                            return <img className="mx-auto max-w-[90%] max-h-[45rem] lg:max-h-[50rem] xl:max-h-[55rem]" src={photo} key={index}/>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Gallery;
