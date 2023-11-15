const Screenshot = ({src, alt, caption}) => {
    return (
        <div className="flex flex-col justify-center items-center mb-8">
            <img
                className="w-full xxl:w-2/3 xl:w-3/4 rounded-md drop-shadow-md mb-4"
                src={src}
                alt={alt}
            />
            <div className="text-center text-sm">{caption}</div>
        </div>
    )
}

export default Screenshot