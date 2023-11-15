import React from "react"
import test1 from "../assets/gallery-test/test-1.webp"
import test2 from "../assets/gallery-test/test-2.webp"
import test3 from "../assets/gallery-test/test-3.webp"
import test4 from "../assets/gallery-test/test-4.webp"
import test5 from "../assets/gallery-test/test-5.webp"
import test6 from "../assets/gallery-test/test-6.webp"
import test7 from "../assets/gallery-test/test-7.webp"
import test8 from "../assets/gallery-test/test-8.webp"

function Gallery(props) {

    const photos = [test1, test2, test3, test4, test5, test6, test7, test8]
    // grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex > 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }
      
    // Used like so
    shuffle(photos);

    function showImage() {
        console.log('displayed!')
    }

    return (
        <section className="cont bg-violet-300 pt-0">

            <div className="bg-emerald-300 max-w-6xl mx-auto">
                {/* filter */}
                <div className="mb-6">
                    {/* a tag container */}
                    <div className="flex gap-8 sm:gap-10 flex-row-reverse md:flex-row">
                        <a className="uppercase" href="">Food</a>
                        <a className="uppercase" href="">Fashion</a>
                        <a className="uppercase" href="">Product</a>
                    </div>
                    {/* drop down */}
                </div>

                {/* FIX:  gallery */}
                <div className="columns-1 lg:columns-3 sm:columns-2 gap-x-6 space-y-6">
                    {photos.map(photo => {
                        return <div className="border-2 border-white overflow-hidden group cursor-pointer" onClick={showImage}>
                            <img className="group-hover:scale-110 duration-300" src={photo} alt="" />
                        </div>
                    })}
                </div>

                {/* <div className="fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.5)]">
                    <h1 className="text-white">Hello World!</h1>
                </div> */}
            </div>
        </section>
    )
};

export default Gallery;
