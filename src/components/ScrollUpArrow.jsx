const ScrollUpArrow = () => {

    const scrollUp = () => {
        document.querySelector("body").scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"})
    }

    return (        
        <div className="flex flex-col items-center justify-center">
            <svg className="w-12 pb-12 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={scrollUp} >
                <g transform="rotate(0 256 256)">
                    <path fill="none"
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="48" 
                        d="m112 244l144-144l144 144M256 120v292"/>
                </g>
            </svg>
        </div>
    )
}

export default ScrollUpArrow