import { motion } from 'framer-motion'
const Loading = () => {

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
                <p className="text-md text-white">Hang in there - preparing the awesome!</p>
            </div>
        </div>        
    )
}

export default Loading