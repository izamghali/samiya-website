import React from "react"
import img1 from '../assets/gallery/food/selected/food-128.webp';
import img2 from '../assets/gallery/fashion/fashion-20.webp';
import img3 from '../assets/gallery/product/product-4.webp';

function Service({loadingState}) {

    const serviceData = [
        {
            title: 'Food',
            desc: "Elevate your culinary creations with our vibrant and flavorful food photography, capturing the essence of each dish.",
            img: img1
        },
        {
            title: 'Fashion',
            desc: "Set your brand apart with our dynamic fashion photography, creating visually striking images that tell a compelling style story.",
            img: img2
        },
        {
            title: 'Product',
            desc: "Showcase your products with precision and allure through our professional photography, designed to captivate customers and boost sales.",
            img: img3
        },
    
    ]

    return (
        <section className="lg:py-10 lg:tall:h-screen h-full cont black-cont flex flex-col justify-between xl:justify-evenly" id="service">
            <div>
                <h2 className="text-center text-white">Our Photography Services</h2>
                <p className="text-center font-mont margin-heading text-darkGray lg:text-lg">Capture Moments with Samiya Studio</p>
            </div>

            {/* Card Container */}
            <div className="lg:snap-none snap-y snap-proximity flex lg:flex-row flex-col justify-center xl:gap-8 gap-4 lg:gap-2 lg:justify-evenly xl:justify-center items-center">

                {/* Card */}
                {serviceData.map((data, index) => {
                    return <div className="
                                border-2 border-darkGray rounded-lg 
                                lg:w-[24rem] sm:max-w-full 
                                sm:h-fit lg:h-full
                                flex flex-col lg:flex-col sm:flex-row
                                gap-2 sm:gap-4 lg:gap-2 p-4 
                                snap-start lg:snap-align-none
                                "
                                key={index}
                            >
                                <div className="relative flex items-center 
                                        lg:h-[20rem] lg:w-full 
                                        sm:h-[15rem] sm:w-[45rem] 
                                        h-[20rem] w-full
                                        rounded-lg overflow-hidden
                                    ">
                                    <img className="" src={data.img} alt="" loading={ loadingState ? "eager" : "lazy" }/>
                                    <span className="absolute top-4 right-4 bg-black opacity-80 text-white p-1 rounded-md">
                                        Photo
                                    </span>
                                </div>

                                {/* content */}
                                <div className="flex flex-col sm:justify-between lg:justify-evenly justify-evenly w-auto">
                                    <div className="lg:mb-8 sm:mb-0 mb-8">
                                        <h3 className="text-2xl text-white">{data.title} Photography</h3>
                                        <p className="text-darkGray lg:min-h-[8rem]">{data.desc}</p>
                                    </div>
                                    <a 
                                        href="https://wa.me/6289616041234" target="_blank" 
                                        className="
                                        flex items-center justify-center gap-1 
                                        md:py-4 sm:py-2 py-4
                                        bg-stone-50 border-2 border-stone-50 rounded-lg
                                        w-full md:text-2xl sm:text-xl text-2xl md:font-bold sm:font-semibold font-bold text-stone-950
                                        lg:hover:bg-stone-950 lg:hover:text-stone-50
                                        lg:hover:-translate-y-2 group duration-300">
                                        Book Now
                                        <svg className="bi bi-arrow-up-right lg:w-6 md:w-5 sm:w-5 w-6 fill-stone-950 lg:group-hover:fill-stone-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
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
