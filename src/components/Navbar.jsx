import React from "react"
import { filterTextColorChange } from "../helpers";

function Navbar(props) {

    const {
        setPage, setClickedCategory,
    } = props;

    function handleNavbarToggle() {
        const btn = document.getElementById('menu-btn');
        const menu = document.getElementById('menu');
        
        btn.classList.toggle('open');
        menu.classList.toggle('flex');
        menu.classList.toggle('hidden');
    }
    
    function handleDropDown() {
        // const dropDown = document.getElementById('drop-down');
        const menu = document.getElementById('drop-down-menu');
        
        menu.classList.toggle('flex');
        menu.classList.toggle('hidden');

    }

    function handleContact() {
        const page = document.getElementById('contact-page');

        page.classList.add('translate-y-0')
        page.classList.remove('translate-y-full')
    }

    function displayHomePage() { setPage(false) }
    function displayGallery() { setPage(true) }

    function handleGallery(event) {
        const category = event.target.innerHTML
        displayGallery();
        setClickedCategory(category)
        
        setTimeout(() => {
            filterTextColorChange(event)
        }, 1)
    }

    return (
        <nav className="snap-start bg-stone-50 dark:bg-stone-950 toggle-padding text-white">
            {/* Navbar container */}
            <div className="flex justify-between items-center">

                {/* Brand */}
                <svg onClick={displayHomePage} className="xl:h-12 md:h-10 h-8 dark:fill-white fill-black cursor-pointer" version="1.0" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 708.000000 172.000000"
                preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,172.000000) scale(0.100000,-0.100000)"
                    stroke="none">
                    <path d="M482 1700 c-248 -65 -433 -273 -473 -532 -32 -207 51 -437 209 -578
                    96 -86 271 -160 379 -160 l43 0 0 -216 0 -217 73 6 c240 19 456 182 542 410
                    116 311 -19 665 -310 808 -92 45 -178 69 -247 69 l-48 0 0 215 0 215 -47 -1
                    c-27 0 -81 -9 -121 -19z m158 -626 l0 -207 -37 6 c-41 7 -97 48 -130 96 -66
                    97 -20 242 92 292 78 36 75 45 75 -187z m129 -262 c102 -82 118 -201 38 -297
                    -32 -39 -96 -74 -134 -75 l-23 0 0 206 0 207 41 -6 c24 -3 56 -17 78 -35z"/>
                    <path d="M2110 1641 c-50 -15 -89 -42 -117 -77 -22 -30 -28 -49 -31 -104 -7
                    -126 38 -175 218 -235 59 -20 115 -44 124 -54 22 -24 20 -67 -4 -91 -59 -59
                    -185 -27 -237 60 -9 17 -23 30 -29 30 -23 0 -104 -41 -104 -54 0 -28 63 -108
                    107 -136 59 -38 102 -50 177 -50 83 0 134 18 182 65 49 46 69 105 59 169 -16
                    93 -68 136 -228 186 -129 41 -164 83 -117 143 23 29 72 42 119 32 31 -7 89
                    -54 108 -88 9 -17 12 -17 67 7 l57 25 -20 40 c-54 105 -211 168 -331 132z"/>
                    <path d="M2990 1458 c-34 -101 -89 -259 -121 -351 l-58 -168 76 3 77 3 85 258
                    c47 141 88 257 92 257 3 0 43 -117 89 -260 l84 -260 73 0 c40 0 73 3 73 8 0 4
                    -53 161 -117 349 l-118 343 -86 0 -86 0 -63 -182z"/>
                    <path d="M3820 1290 l0 -350 70 0 70 0 2 226 3 226 99 -136 c55 -75 105 -136
                    110 -136 6 1 56 61 111 135 l100 134 3 -225 2 -224 70 0 70 0 0 350 0 350 -67
                    0 -68 -1 -100 -140 c-55 -77 -105 -145 -111 -150 -8 -7 -45 35 -123 141 l-111
                    150 -65 0 -65 0 0 -350z"/>
                    <path d="M5020 1290 l0 -350 65 0 65 0 0 350 0 350 -65 0 -65 0 0 -350z"/>
                    <path d="M5540 1635 c0 -3 52 -91 115 -195 l115 -191 0 -154 0 -155 70 0 70 0
                    0 153 0 153 115 189 c63 104 115 193 115 198 0 4 -35 7 -77 5 l-77 -3 -68
                    -115 c-37 -63 -71 -116 -75 -117 -5 -2 -40 51 -78 117 l-70 120 -77 0 c-43 0
                    -78 -2 -78 -5z"/>
                    <path d="M6659 1613 c-21 -55 -229 -661 -229 -667 0 -3 33 -6 73 -6 l72 0 89
                    268 89 267 89 -267 90 -268 75 0 c67 0 74 2 68 18 -3 9 -55 159 -115 332 -60
                    173 -112 323 -115 333 -6 14 -20 17 -91 17 -83 0 -85 -1 -95 -27z"/>
                    <path d="M3091 596 c-13 -7 -30 -24 -37 -37 -35 -64 1 -124 91 -153 59 -18 75
                    -36 55 -61 -20 -24 -59 -18 -91 15 -26 26 -33 28 -54 18 -29 -13 -31 -25 -9
                    -56 23 -34 67 -52 124 -52 44 0 56 5 81 29 60 61 29 136 -70 169 -65 22 -85
                    46 -57 68 27 20 40 18 74 -11 34 -29 41 -30 66 -12 16 11 17 17 7 36 -29 53
                    -124 78 -180 47z"/>
                    <path d="M5474 591 c-64 -29 -89 -72 -89 -153 0 -74 16 -105 75 -145 41 -28
                    125 -31 177 -6 98 46 120 194 41 270 -58 56 -129 68 -204 34z m133 -63 c12 -6
                    30 -27 39 -46 35 -74 -26 -159 -106 -148 -101 15 -122 152 -30 198 35 18 55
                    17 97 -4z"/>
                    <path d="M3510 570 c0 -29 2 -30 45 -30 l45 0 0 -135 0 -135 35 0 35 0 0 135
                    0 135 40 0 c38 0 40 2 40 30 l0 30 -120 0 -120 0 0 -30z"/>
                    <path d="M3990 470 c0 -128 0 -130 28 -161 24 -27 37 -33 84 -37 38 -3 64 1
                    86 12 52 27 62 59 62 196 l0 120 -35 0 -35 0 0 -115 c0 -102 -2 -117 -20 -135
                    -24 -24 -48 -25 -78 -4 -21 14 -22 22 -22 135 l0 119 -35 0 -35 0 0 -130z"/>
                    <path d="M4520 435 l0 -165 73 0 c83 0 147 26 181 72 31 43 33 133 4 182 -34
                    58 -76 76 -175 76 l-83 0 0 -165z m175 81 c67 -67 30 -167 -68 -183 l-37 -6 0
                    107 0 106 40 0 c30 0 47 -7 65 -24z"/>
                    <path d="M5050 435 l0 -165 35 0 35 0 0 165 0 165 -35 0 -35 0 0 -165z"/>
                    </g>
                </svg>

                {/* Menu Container */}
                <div className="2xl:space-x-20 xl:space-x-16 lg:space-x-10 md:space-x-5 lg:flex items-center hidden font-mont text-black dark:text-white">
                    <a onClick={displayHomePage} href="#about" >About</a>
                    <a onClick={displayHomePage} href="#service" >Our Services</a>
                    <button className="relative flex items-center gap-1" onClick={handleDropDown} id="drop-down">
                        Gallery
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>

                        {/* {<Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        ></Transition>} */}
                        
                        {/* FIX:  add transition to dropdown */}
                        <div 
                            id="drop-down-menu" 
                            className="z-10
                                absolute -bottom-36 right-0
                                border-2 border-white bg-black text-white 
                                hidden flex-col items-start py-2 space-y-2 rounded-lg w-32
                            ">
                            <a onClick={handleGallery} className="hover:bg-stone-400 w-full text-left py-1 px-2">Food</a>
                            <a onClick={handleGallery} className="hover:bg-stone-400 w-full text-left py-1 px-2">Fashion</a>
                            <a onClick={handleGallery} className="hover:bg-stone-400 w-full text-left py-1 px-2">Product</a>
                        </div>
                    </button>

                    <a onClick={displayHomePage} href="#work">How We Work</a>
                    {/* FIX: dark/light mode toggle */}
                    
                    <button className="border-2 rounded-lg px-6 py-2 duration-300 font-medium
                        bg-stone-950 dark:bg-stone-100 
                        border-stone-950 dark:border-white
                        text-stone-100 dark:text-stone-950 
                        hover:text-stone-950 hover:dark:text-stone-100
                        hover:bg-stone-50 hover:dark:bg-stone-950    
                        "
                        onClick={handleContact}
                        >
                        Contact Us
                    </button> 
                </div>

                {/* Hamburger Toggle Container */}
                <div className="lg:hidden fixed top-0 right-0 z-30 toggle-padding" onClick={handleNavbarToggle}>
                    <button className="hamburger lg:hidden focus:outline-none flex flex-col" id="menu-btn" type="button">
                        <span className="stripes hamburger-top"></span>
                        <span className="stripes hamburger-middle"></span>
                        <span className="stripes hamburger-bottom"></span>
                    </button>
                </div>

            </div>

            <div id="menu" 
                className="font-mont
                    hidden lg:hidden flex-col fixed left-0 top-0 px-8 z-20 items-end
                    self-end w-full min-h-screen pt-40
                    gap-3 text-lg text-white bg-[rgba(0,0,0,0.6)]">
                <a onClick={displayHomePage} href="#about" className="w-fit">About</a>
                <a onClick={displayHomePage} href="#service" className="w-fit">Our Services</a>
                <a onClick={displayGallery} className="w-fit">Gallery</a>
                <a onClick={displayHomePage} href="#work" className="w-fit">How We Work</a>
                <a className="w-fit" id="contact-btn" onClick={handleContact}>Contact Us</a>
            </div>
        </nav>
    )
};

export default Navbar;