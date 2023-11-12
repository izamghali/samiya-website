import React from "react"
import client1 from '../assets/clients/1.png';

function Client(props) {

    const testArr = Array.from(Array(24).keys());
    
    return (
        <section className="cont white-cont">
            <h2 className="text-center md:text-left margin-heading">Our Clients</h2>
            
            {/* grid container */}
            <div className="grid md:grid-cols-4 lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-y-4 gap-x-4">
                
                {testArr.map(data => {
                    return <div className="w-fit justify-self-center md:justify-self-start">
                        <img src={client1} alt="" />
                    </div>
                })}
            </div>
        </section>  
    )
};

export default Client;
