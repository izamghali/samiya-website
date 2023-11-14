import React from "react"
import img1 from '../assets/service-card/food-94.webp';
import img2 from '../assets/service-card/fashion-9.webp';
import img3 from '../assets/service-card/product-8.webp';

function Service(props) {

    const serviceData = [
        {
            title: 'Food',
            img: img1
        },
        {
            title: 'Fashion',
            img: img2
        },
        {
            title: 'Product',
            img: img3
        },
    
    ]

    return (
        <section className="cont black-cont">
            <h2 className="text-center text-white">Our Photography Services</h2>
            <p className="text-center font-mont margin-heading text-darkGray lg:text-lg">Capture Moments with Samiya Studio</p>

            {/* Card Container */}
            <div className="flex lg:flex-row flex-col justify-center xl:gap-8 gap-4 lg:gap-2 lg:justify-evenly xl:justify-center items-center">

                {/* Card */}
                {serviceData.map(data => {
                    return <div className="
                                border-2 border-darkGray rounded-lg 
                                max-w-sm lg:max-w-sm sm:max-w-max 
                                flex flex-col lg:flex-col sm:flex-row
                                gap-2 sm:gap-4 lg:gap-2 p-4 
                                ">
                                <div className="relative h-[20rem] w-full">
                                    <img className="rounded-lg w-full h-full object-center object-cover" src={data.img} alt="" />
                                    <span className="absolute top-4 right-4 bg-black opacity-80 text-white p-1 rounded-md">
                                        Photo
                                    </span>
                                </div>

                                {/* content */}
                                <div className="flex flex-col justify-evenly">
                                    <div className="lg:mb-8 sm:mb-0 mb-8">
                                        <h3 className="text-2xl text-white">{data.title} Photography</h3>
                                        <p className="text-darkGray">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <a 
                                        href="https://wa.me/6289616041234" target="_blank" 
                                        className="
                                        flex items-center justify-center gap-1 py-4
                                        bg-stone-50 border-2 border-stone-50 rounded-lg
                                        w-full text-2xl font-bold text-stone-950
                                        lg:hover:bg-stone-950 lg:hover:text-stone-50
                                        lg:hover:-translate-y-2 group duration-300">
                                        Book Now
                                        <svg class="bi bi-arrow-up-right w-6 fill-stone-950 lg:group-hover:fill-stone-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                                        </svg>
                                    </a>

                                </div>
                        </div>
                })}

            </div>
        </section>
    )
};

export default Service;
