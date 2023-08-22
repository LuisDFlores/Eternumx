import React from "react";
import AboutItem from './AboutItem';

const data =[

{
    header: 'My Mission',
    description: '  I really love music and its something Im truly passionate and amazed by.What pushes my passion for music is because it motivates me and inspires me. I eventually want to do music and motivate others with music the same way it stimulates me.'
},

{
    header:'About Me',
    description: '  My main goal as an artist is to make people feel something; whether it be catharsis, relived pain, sorrow, joy, excitement, energetic, or otherwise.'
}, 
{
    header: 'Who I want to become ?',
    description: '  A kind and giving person who is someone you can always rely on. someone who inspires, uplifts and supports any who needs '

}
]

const About = () =>{
    return(
        <div id='about' className="max-w-[1040px] m-auto md:pl-20 -p4 py-16">
            <h1 className="text 4xl font-bold text-center text-[red]">Lost In My Thoughts</h1>
            {data.map((item, idx)=>(
                <AboutItem key ={idx} header={item.header} description={item.description}/>
            ))}
        </div>
    )
}

export default About