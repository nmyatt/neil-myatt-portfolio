const Card = ({clickHandler, clickable, children}) => {
    
    const cursor = clickable ? "cursor-pointer" : "cursor-default";

    return (
        <div onClick={clickHandler} className={`rounded-lg drop-shadow-lg px-8 py-8 bg-white ${cursor}`}>{children}</div>
    )
}

export default Card