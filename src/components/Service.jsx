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
            <p className="text-center font-mont margin-heading text-darkGray">Enjoy professional photography services with Samiya Studio</p>

            {/* Card Container */}
            <div className="card-container mt-8 flex-wrap">

                {/* Card */}
                {serviceData.map(data => {
                    return <div className="border-2 border-darkGray rounded-lg max-w-sm space-y-10 p-4">
                            <div>
                                <div className="relative h-[20rem] mb-4">
                                    <img className="rounded-lg w-full h-full object-center object-cover" src={data.img} alt="" />
                                    <span className="absolute top-4 right-4 bg-black opacity-80 text-white p-1 rounded-md">
                                        Photo
                                    </span>
                                </div>

                                <h3 className="text-2xl text-white">{data.title} Photography</h3>
                                <p className="text-darkGray">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <a 
                                href="https://wa.me/6289616041234" target="_blank" 
                                className="
                                flex items-center rounded-lg border-2 border-stone-50
                                text-stone-950 bg-stone-50 gap-1 py-4 w-full justify-center font-bold 
                                text-2xl hover:bg-stone-950 duration-300 hover:text-stone-50
                                hover:-translate-y-2 group">
                                Book Now
                                <svg class="bi bi-arrow-up-right w-6 fill-stone-950 group-hover:fill-stone-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                                </svg>
                            </a>
                        </div>
                })}

            </div>
        </section>
    )
};

export default Service;
