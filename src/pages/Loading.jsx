import { motion } from 'framer-motion'

const Loading = () => {    

    const messages = [
        "Hang in there - preparing awesomeness!",
        "Mixing paint and pixels...",
        "Imps are working hard to get the page ready",
        "Crunching numbers...",
        "Getting a bunch of pixels to line up...",
        "Calculating some bubble physics...",
        "How are you today?"
    ]
    
    const randomMessage =  messages[Math.floor(Math.random() * messages.length)]

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div>
                <motion.div
                    animate={{ 
                        scale: [4, 8, 4],
                        rotate: [0, 360]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}>
                    <div className="w-32 h-32 flex bg-gradient-to-r from-pink-300 to-blue-400 rounded-full items-center">
                        {/* <div className="m-auto text-white text-6xl">:-)</div> */}
                    </div>
                </motion.div>
            </div>
            <div className="flex flex-col items-center mt-4 z-20">
                <h1 className="text-5xl text-white font-black leading-none tracking-tight mb-8">Loading...</h1>
                <p className="text-md text-white">{randomMessage}</p>
            </div>
        </div>        
    )
}

export default Loading