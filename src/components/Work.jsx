import React from "react"
import testImg from '../assets/how-we-work-carousel/food-90.webp';

function Work(props) {

    const workData = [
        {
            heading: 'Pre-Production',
            duration: '5 days',
            desc: 'Preparation Concept, Equipment, Location, Talent, etc.',
            path: ['M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z']
        },
        {
            heading: 'Production',
            duration: '1-3 days',
            desc: 'Set Up Ready for Production',
            path: ['M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z', 'M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z']
        },
        {
            heading: 'Post-Production',
            duration: '7 days',
            desc: 'Editing, Preview, Final revision',
            path: ['M4 0h8a2 2 0 0 1 2 2v8.293l-2.73-2.73a1 1 0 0 0-1.52.127l-1.889 2.644-1.769-1.062a1 1 0 0 0-1.222.15L2 12.292V2a2 2 0 0 1 2-2zm4.002 5.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z', 'M10.564 8.27 14 11.708V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.293l3.578-3.577 2.56 1.536 2.426-3.395z']
        },
        {
            heading: 'Distribution',
            duration: 'D+ 5-7 production',
            desc: 'Ready to launch to platform or screen expanding reach with marketing strategy maintenance',
            path: ['M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z', 'M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z']
        },
    ]

    return (
        <section className="white-cont md:flex">
            
            {/* carousel container */}
            <div className="hidden lg:block w-full xl:w-[120%] lg:w-[110%]">

                <div className="">
                    {/* test carousel */}
                    <img className="object-cover object-center w-full lg:max-h-[44rem]" src={testImg} alt="" />
                </div>

            </div>

            {/* content container */}
            {/* NOTE:  cont */}
            <div className="cont w-full h-full"> 
                <h2 className="margin-heading">How We Work</h2>

                {/* container */}
                <div className="flex flex-col justify-between  h-max gap-4">

                    {workData.map(data => {
                        return <div className="border-2 border-lightGray flex items-center p-2 gap-2 md:h-[6rem] rounded-lg">
                            {/* icon */}
                            <div className="border-2 border-lightGray p-2 rounded-full sm:block hidden">
                                <svg class="bi bi-gear-fill fill-lightGray w-6 lg:w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    {data.path.map(path => {
                                        return <path d={path}/>
                                    })}
                                </svg>
                            </div>

                            <div className="w-full">
                                {/* heading */}
                                <div className="flex justify-between w-full">
                                    <h3 className="font-semibold text-xl">{data.heading}</h3>
                                    <span className="font-light ">{data.duration}</span>
                                </div>
                                <p className="font-extralight text-lightGray">{data.desc}</p>
                            </div>

                        </div>
                    })}
                </div>
            </div>

        </section>
    )
};

export default Work;