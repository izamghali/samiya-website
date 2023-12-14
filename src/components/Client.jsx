import React from "react"
import { shuffle } from '../helpers';

// temporary
import client1 from '../assets/clients/1.png';
import client2 from '../assets/clients/2.png';
import client3 from '../assets/clients/3.png';
import client4 from '../assets/clients/4.png';
import client5 from '../assets/clients/5.png';
import client6 from '../assets/clients/6.png';
import client7 from '../assets/clients/7.png';
import client8 from '../assets/clients/8.png';
import client9 from '../assets/clients/9.png';
import client10 from '../assets/clients/10.png';
import client11 from '../assets/clients/11.png';
import client12 from '../assets/clients/12.png';
import client13 from '../assets/clients/13.png';
import client14 from '../assets/clients/14.png';
import client15 from '../assets/clients/15.png';
import client16 from '../assets/clients/16.png';
import client17 from '../assets/clients/17.png';
import client18 from '../assets/clients/18.png';
import client19 from '../assets/clients/19.png';
import client20 from '../assets/clients/20.png';
import client21 from '../assets/clients/21.png';
import client22 from '../assets/clients/22.png';
import client23 from '../assets/clients/23.png';
import client24 from '../assets/clients/24.png';

function Client(props) {

    // const testArr = Array.from(Array(24).keys());
    const clients = [
        client1, client2, client3, client4, client5, client6,
        client7, client8, client9, client10, client11, client12,
        client13, client14, client15, client16, client17, client18,
        client19, client20, client21, client22, client23, client24
    ]
    shuffle(clients)
    
    return (
        <section className="cont white-cont tall:h-screen h-full">
            <h2 className="text-center margin-heading">Our Clients</h2>
            
            {/* grid container */}
            <div className="grid md:grid-cols-4 lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-y-4 gap-x-4">
                
                {clients.map((data, index) => {
                    return <div className="w-36 justify-self-center " key={index}>
                        <img loading="lazy" src={data} alt="" />
                    </div>
                })}
            </div>
        </section>  
    )
};

export default Client;
