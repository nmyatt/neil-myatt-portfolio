import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card"
import ImageWithVideo from "./ImageWithVideo"

const ShowcaseItem = ({children, title, description, image, vimeo, link}) => {

    const [showVideo, setShowVideo] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        if (link) {
            navigate(link)
        }
        else if (vimeo) {
            setShowVideo(!showVideo)
            setPlay(true)
        }
    };

    return (        
        <Card clickable={!!vimeo} clickHandler={handleClick}>
            <ImageWithVideo showVideo={showVideo} vimeo={vimeo} image={image} title={title} />
            <div className="mt-4 text-2xl">{title}</div>
            <div className="mt-4">{description}</div>            
            {children}
        </Card>
    )
}

export default ShowcaseItem