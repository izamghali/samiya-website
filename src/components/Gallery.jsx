import React, { useState, useEffect } from "react"
import { shuffle, filterTextColorChange } from "../helpers.js";
import { galleryImages } from "../data.js";

function Gallery({ clickedCategory, setClickedCategory }) {

    const [ clickedPhoto, setClickedPhoto ] = useState([])
    const [ filteredImages, setFilteredImages ] = useState(galleryImages)
    const [ imageLoaded, setImageLoaded ] = useState(false)

    useEffect(() => {
        // NOTE:  Filtering the images based on category
        if (clickedCategory) {
            setFilteredImages(galleryImages.filter(image => image.cat === clickedCategory ))
        } else {
            setFilteredImages(shuffle(galleryImages))
        }

        // FIXME: create blurhash for the gallery
        // const img = new Image()
        // img.onload = () => {
        //     setImageLoaded(true) 
        //     console.log(imageLoaded);
        // }
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
                        return <div className="overflow-hidden group cursor-pointer" onClick={showImage} key={index}><img loading={index < 3 ? 'eager' : 'lazy'} className="group-hover:scale-110 duration-300" src={photo.src} alt="" name={photo.cat} /></div>
                    }) }
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
