import React from 'react'
import wrath from '../assets/eternumx_wrath.png'
import firebringer from '../assets/eternumx_firebringer.png'
import lost from '../assets/eternumx_lost.png'
import shock from '../assets/eternumx_shock.png'
import SongItem from './SongItem'


const Songs = () => {
    return(
        <div id='songs' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[red]'>New Music</h1>
        <p className='text-center py-8'>A collection of my work. More to come. Stay tuned. Stay happy. Stay up.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
                
                    <a href="https://soundcloud.com/eternumx/wrath"><SongItem img={wrath} title='Wrath'/></a>
                    <a href="https://soundcloud.com/eternumx/firebringer"><SongItem img={firebringer} title='FireBringer'/></a>
                    <a href="https://soundcloud.com/eternumx/iamlost"><SongItem img={lost} title='Lost'/></a>
                    <a href="https://soundcloud.com/eternumx/shockprod-stability"><SongItem img={shock} title='Shock'/></a>
        </div>
        </div>
    )

}

export default Songs