import React from 'react'
import Eternumxprofile from "../assets/eternumx_profile.jpg"
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter, FaInstagram, FaApple, FaSoundcloud, FaSpotify} from 'react-icons/fa'

const Main = () => {
    return (
    <div id='main'>
            <img className="w-full h-screen object-cover object-left scale-x-[-1]"src={Eternumxprofile} alt=""/>
           
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800 '>Eternumx</h1>
                    <h2 className='flex sm:text-3xl text-2xl t-4 text-gray-800 justify-center'>
                    The Unspoken
    
                </h2>

                <div className='flex justify-between pt-6 max-w[200px] w-full '>
                    <a href='https://twitter.com/eternumi'>
                    <FaTwitter className='cursor-pointer ' size={20}/>
                    </a>

                    <a href='https://www.instagram.com/eternumx/'>   
                    <FaInstagram className='cursor-pointer ' size={20}/>
                    </a>

                    <a href='https://music.apple.com/us/artist/eternumx/1546653524'>  
                    <FaApple className='cursor-pointer ' size={20} />
                    </a>

                    <a href='https://soundcloud.com/eternumx'>
                    <FaSoundcloud className='cursor-pointer ' size={20} />
                    </a>  
                    
                    <a href='https://open.spotify.com/artist/4JnbwLxXvb3aubGU1oTXER'>
                    <FaSpotify className='cursor-pointer ' size={20} />
                    </a>  
                </div>

            </div>

        </div>
    </div>
    )
}

export default Main