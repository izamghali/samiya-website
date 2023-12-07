import React from "react"
import testImg from '../assets/studio-crop.jpg';

function Work(props) {

    const workData = [
        {
            heading: 'Pre-Production',
            num: 1,
            duration: '5 days',
            desc: 'Before the shoot, detailed planning includes organizing equipment, refining concepts, scouting locations, and securing talent.',
            path: ['M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z']
        },
        {
            heading: 'Production',
            num: 2,
            duration: '1-3 days',
            desc: 'Lights, camera, action! Time to bring the vision to life. We stage elements for capturing authentic moments, orchestrating a smooth creative process.',
            path: ['M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z', 'M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z']
        },
        {
            heading: 'Post-Production',
            num: 3,
            duration: '7 days',
            desc: 'Creative editing, preview sessions, and final revisions polish details, ensuring the end result exceeds expectations and conveys your story effectively.',
            path: ['M4 0h8a2 2 0 0 1 2 2v8.293l-2.73-2.73a1 1 0 0 0-1.52.127l-1.889 2.644-1.769-1.062a1 1 0 0 0-1.222.15L2 12.292V2a2 2 0 0 1 2-2zm4.002 5.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z', 'M10.564 8.27 14 11.708V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.293l3.578-3.577 2.56 1.536 2.426-3.395z']
        },
        {
            heading: 'Distribution',
            num: 4,
            duration: 'D+ 5-7 production',
            desc: 'Finalized assets are ready to be distributed. We deliver visuals in optimal formats, captivating your audience with a compelling narrative.',
            path: ['M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z', 'M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z']
        },
    ]

    return (
        <section className="white-cont md:flex md:justify-end lg:h-screen" id="work">
            
            {/* carousel container */}
            {/* type 1: w-full xl:w-[120%] lg:w-[110%] h-auto overflow-hidden */}
            {/* type 2 : h-min lg:block lg:w-[110%] xl:w-[120%] */}
            <div className="hidden h-auto lg:block overflow-hidden">
                {/* lg:max-h-[30rem] object-center flex items-center */}
                <div className="lg:h-full xl:h-auto">
                    {/* test carousel */}
                    <img className="lg:h-full lg:w-screen xl:h-auto object-cover object-right" src={testImg} alt="" />
                </div>
            </div>

            {/* content container */}
            {/* NOTE:  cont */}
            {/* lg:min-w-[25rem] */}
            {/* lg:max-w-[30rem] lg:min-w-[28rem] */}
            {/* lg:min-w-[38%] lg:max-w-[40%] */}
            <div className="py-10 px-4 md:px-8 sm:px-6 lg:w-[52%] lg:max-w-[26rem] xl:min-w-[25rem] "> 
                <h2 className="margin-heading">How We Work</h2>

                {/* container */}
                <div className="flex flex-col justify-between h-max gap-4">
                    {workData.map((data, index) => {
                        return <div className=" flex items-center p-2 gap-2 rounded-lg" key={index}>

                            {/* svg icon */}
                            {/* <div className="border-2 border-lightGray p-2 rounded-full sm:block hidden">
                                <svg class="bi bi-gear-fill fill-lightGray w-6 lg:w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    {data.path.map(path => {
                                        return <path d={path}/>
                                    })}
                                </svg>
                            </div> */}

                            <div className="w-full">
                                <div className="flex items-center justify-between w-full border-b-[1.5px] border-stone-400">
                                    <h3 className="font-medium text-xl">{data.heading}</h3>
                                    <span className="font-light lg:text-sm xl:text-base">{data.duration}</span>
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
