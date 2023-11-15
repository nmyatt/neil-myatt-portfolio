import { Link } from "react-scroll";

const NavUp = ({isFixed, downDirection, hasGradient, target, label}) => {

    const rotation = downDirection ? "rotate(180 256 256)" : "rotate(0 256 256)";

    const labelEl = <div className="self-center whitespace-nowrap text-gray-700 text-xs">{label}</div>
    const arrowEl = <div className="self-center w-12 grow-0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g transform={rotation}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="m112 244l144-144l144 144M256 120v292"/></g></svg></div>

    return (
        <div className={
            `${(isFixed) ? "absolute" : "sticky"} 
             ${hasGradient && downDirection && "bg-gradient-to-t from-white via-white to-transparent"}
             ${hasGradient && !downDirection && "bg-gradient-to-b from-white via-white to-transparent"}
             ${downDirection ? "pt-2" : "pb-20"}
             w-full flex flex-col
             `}>                        
            <Link to={target} smooth={true} duration={1000} className="flex flex-col self-center cursor-pointer">
                <div>
                {downDirection && labelEl}
                {arrowEl}
                {!downDirection && labelEl}
                </div>
            </Link>
        </div>
    )
}

export default NavUp