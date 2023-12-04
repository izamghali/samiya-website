import React, { useState, useEffect } from "react"
import { shuffle } from "../helpers.js";
import test1 from "../assets/gallery-test/test-1.webp"
import test2 from "../assets/gallery-test/test-2.webp"
import test3 from "../assets/gallery-test/test-3.webp"
import test4 from "../assets/gallery-test/test-4.webp"
import test5 from "../assets/gallery-test/test-5.webp"
import test6 from "../assets/gallery-test/test-6.webp"
import test7 from "../assets/gallery-test/test-7.webp"
import test8 from "../assets/gallery-test/test-8.webp"

function Gallery(props) {
    
    // const {
    //     category,
    // } = props;

    const images = [
        { src: test1, cat: 'Fashion' },
        { src: test2, cat: 'Fashion' },
        { src: test3, cat: 'Food' },
        { src: test4, cat: 'Food' },
        { src: test5, cat: 'Food' },
        { src: test6, cat: 'Food' },
        { src: test7, cat: 'Product' },
        { src: test8, cat: 'Product' },
    ]

    const [ clickedPhoto, setClickedPhoto ] = useState([])
    const [ clickedCategory, setClickedCategory ] = useState('')
    const [ filteredImages, setFilteredImages ] = useState(images)

    useEffect(() => {
        if (clickedCategory) {
            setFilteredImages(images.filter(image => image.cat === clickedCategory ))
        } else {
            setFilteredImages(images)
        }
    }, [clickedCategory])

    function showImage(event) {
        const layer = document.getElementById('layer');
        const clicked = event.target.src
        setClickedPhoto(prevPhotos => [clicked])

        layer.classList.add('flex')
        layer.classList.remove('hidden')
        
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
        const category = event.target.innerHTML
        const filterBtns = document.querySelectorAll('.filter-btn')
        
        if (category === clickedCategory) { // all category
            setClickedCategory('')
            filterBtns.forEach(btn => btn.classList.remove('text-accentLess'))
            filterBtns.forEach(btn => btn.classList.add('text-accent'))

        } else { // certain category
            setClickedCategory(category)
            filterBtns.forEach(btn => btn.classList.remove('text-accent'))
            filterBtns.forEach(btn => btn.classList.add('text-accentLess'))
        }
    }

    return (
        <section className="cont black-cont pt-0">

            <div className=" max-w-6xl mx-auto">
                {/* filter */}
                <div className="mb-6">
                    {/* a tag container */}
                    <div className="flex gap-8 sm:gap-10 flex-row-reverse md:flex-row">
                        <button onClick={clickedFilter} className="filter-btn uppercase text-accent focus:text-accent duration-300">Food</button>
                        <button onClick={clickedFilter} className="filter-btn uppercase text-accent focus:text-accent duration-300">Fashion</button>
                        <button onClick={clickedFilter} className="filter-btn uppercase text-accent focus:text-accent duration-300">Product</button>
                    </div>
                    {/* drop down */}
                </div>

                <div className="columns-1 lg:columns-3 sm:columns-2 gap-x-6 space-y-6">
                    { filteredImages.map((photo, index) => {
                        return <div className="overflow-hidden group cursor-pointer" onClick={showImage} key={index}>
                            <img className="group-hover:scale-110 duration-300" src={photo.src} alt="" name={photo.cat} />
                        </div>
                    })}
                </div>

                <div className="fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.5)] hidden justify-center items-center duration-500" onClick={hideImage} id="layer">
                    <div className="">
                        {clickedPhoto.map((photo, index) => {
                            return <img className="mx-auto max-w-[90%] max-h-[40rem] lg:max-h-[47rem]" src={photo} key={index}/>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Gallery;
