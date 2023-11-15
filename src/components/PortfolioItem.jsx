import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Card from "./Card"
import ImageWithVideo from "./ImageWithVideo"


const PortfolioItem = ({children, title, description, image, vimeo, type, role, link, linkName}) => {
    const [showVideo, setShowVideo] = useState(false);
    const navigate = useNavigate();

    const playVimeo = () => {
        if (vimeo) {
            setShowVideo(!showVideo)
        }
    };

    const openLink = () => {
        if (link) {
            navigate(link)
        }
    }



    return (        
        <Card clickable={!!vimeo} clickHandler={playVimeo}>
            <ImageWithVideo showVideo={showVideo} vimeo={vimeo} image={image} title={title} />
            <div className="mt-4 text-2xl">{title}</div>
            {type && <div className="mt-4 text-sm">Project: {type}</div>}
            {role && <div className="mt-4 text-sm">Role: {role}</div>}
            {link && <button className="mt-4 rounded-md bg-blue-400 hover:bg-blue-600 active:bg-blue-700 text-white shadow-md w-full px-8 py-2" onClick={openLink}>{linkName ?? "Case Study"}</button>}
            <div className="mt-4">{description}</div>
            {children}
        </Card>
    )
}

export default PortfolioItem