import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineHome } from 'react-icons/ai';
import {AiFillApple} from 'react-icons/ai';
import {SiSoundcloud} from 'react-icons/si';
import { BsMusicNote, BsSpotify } from 'react-icons/bs';
import { MdHome, MdOutlineConnectWithoutContact } from 'react-icons/md';
import { MdNightsStay } from 'react-icons/md';

const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () =>{
        setNav(!nav);
    };

    return(
        <div>
            <AiOutlineMenu onClick={handleNav}
             className="absolute top-4 right-4 z-[99] md:hidden"
             />
            { nav ? (
                    <div className="fixed w-full h-screen bg-black/90 flex flex-col justify-center items-center z-20">

                        <a onClick={handleNav} href="#main"
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-red-300 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <MdHome size={20} />
                        <span className="pl-4">Home</span>
                        </a>


                        <a onClick={handleNav} href="#about" 
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-red-300 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                        >
                            <MdNightsStay size={20}/>
                            <span className="pl-4">Who Is Eternumx</span>
                        </a>

                        <a onClick={handleNav} href="#songs"
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-red-300 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                        >
                            <BsMusicNote size={20} />
                            <span className="pl-4">Music</span>
                        </a>

                        <a onClick={handleNav} href="#contact"
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-red-300 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                        >
                            <MdOutlineConnectWithoutContact size={20} />
                            <span className="pl-4">Contact</span>
                        </a>

                    </div>
                ):(
                    ''
                )}
                    <div className="md:block hidden fixed top-[25%] z-10">
                        <div className="flex flex-col">

                            <a href="#main" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:Scale-110 ease-in duration-300">
                                <MdHome size={20} />
                            </a>

                            <a href="#about" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:Scale-110 ease-in duration-300">
                                <MdNightsStay size={20}/>
                            </a>

                            <a href="#songs" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:Scale-110 ease-in duration-300">
                            <BsMusicNote size={20} />
                            </a>

                            <a href="#contact" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:Scale-110 ease-in duration-300">
                                <MdOutlineConnectWithoutContact size={20} />
                            </a>
                        </div>
                    </div>





        </div>
    );
};

export default Sidenav