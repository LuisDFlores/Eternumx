import react from "react"

const SongItem = ({img,title}) => {
    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[red]">
            <img src={img} alt='/' className="rounded-xl group-hover:opacity-10"/>
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl font-bold text-red-800 tracking-wider text-center">
                    {title}
                </h3>
                <p className="pb-4 pt-2 text-white text-center">Eternumx</p>
                
            </div>
        </div>
    )
}

export default SongItem