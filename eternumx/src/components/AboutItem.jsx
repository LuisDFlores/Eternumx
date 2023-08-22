import React from "react";

const AboutItem =({header, description}) => {
    return(
        <ul className="flex flex-col md:flex-row relative border-l border-stone-200">
            <li className=" mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white "/>
                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py-1 font-semibold text=whiite bg-red-50 rounded-md">{header}</span>
                </p>
                <p className="my-2 text-base font-normal text-stone-500">{description}</p>
            </li>
        </ul>
    );
};

export default AboutItem