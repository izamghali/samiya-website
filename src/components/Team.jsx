import React from "react"
import profile1 from '../assets/team/1.webp';
import profile2 from '../assets/team/2.webp';
import profile3 from '../assets/team/3.webp';

function Team(props) {

    const teamData = [
        {
            name: 'Febriansyah Aditya Pratama',
            shortName: 'Febri',
            pro: 'Photographer/Videographer',
            link: 'https://www.instagram.com/aditya_p24',
            img: profile1,
        },
        {
            name: 'Nurman Adi Tama',
            shortName: 'Nurman',
            pro: 'Director/Editor',
            link: 'https://www.instagram.com/nurman_tama',
            img: profile2,
        },
        {
            name: 'Muhammad Harits Fadhli',
            shortName: 'Harits',
            pro: 'Photographer/Editor',
            link: 'https://www.instagram.com/haritsfadhli/',
            img: profile3,
        },
    
    ]

    return (
        <section className="cont black-cont">

            {/* FIX:  Heading needed? */}
            <h2 className="text-white margin-heading text-center">Meet The Team</h2>

            {/* card container */}
            <div className="card-container lg:snap-none  snap-y snap-proximity">

                {/* card */}
                {teamData.map(data => {
                    return <div className="snap-start lg:snap-align-none relative group md:max-w-[26rem] sm:w-[24rem] w-full overflow-hidden">
                            <img className=" w-full rounded-tr-lg rounded-tl-lg md:rounded-br-lg md:rounded-bl-lg" src={data.img} alt="" />

                            {/* card content */}
                            <div className="
                                p-4 border-2 border-darkGray md:hidden block rounded-br-lg rounded-bl-lg
                                
                            ">
                                <div className="flex justify-between">
                                    <h3 className=" text-white text-xl">{data.name}</h3>
                                    <a target="_blank" href={data.link} className="">
                                        <svg class="bi bi-arrow-up-right-square fill-accent w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                                        </svg>
                                    </a>
                                </div>
                                <p className="text-darkGray">{data.pro}</p>
                            </div>

                            {/* card content - md */}
                            <div className="
                                group-hover:md:translate-x-0 -translate-x-[100%] md:-translate-x-[100%]
                                flex-col group-hover:opacity-100 opacity-30
                                absolute bottom-0 bg-[rgba(0,0,0,0.6)] p-4 rounded-tr-lg w-fit min-w-[10rem]
                                duration-300 border-2 rounded-bl-lg border-t-0 border-r-0 border-white z-30
                                items-start">
                                    <div className="flex justify-between w-full">
                                        <h3 className=" text-white text-xl font-semibold tracking-wider">{data.shortName}</h3>
                                        <a target="_blank" href={data.link} className="">
                                            <svg class="bi bi-arrow-up-right-square fill-accent w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                                            </svg>
                                        </a>
                                    </div>
                                    <span className="text-darkGray tracking-widest">{data.pro}</span>
                            </div>
                        </div>
                })}

            </div>
            
        </section>
    )
};

export default Team;
