function ImageWithVideo({showVideo,playVideo,image,vimeo,title,big}) {
  
  return (
    <div className="flex flex-col justify-center items-center mb-8">
        
      {vimeo && showVideo ? (
        <div className={`relative flex flex-col aspect-w-16 aspect-h-9 w-full ${(big && 'xxl:w-2/3 xl:w-3/4')} rounded-md drop-shadow-md`}>
          <iframe className="rounded-md" src={`https://player.vimeo.com/video/${vimeo}?badge=0&autoplay=${playVideo ? "1" : "0"}&autopause=1&quality_selector=1&progress_bar=1&loop=0`} frame-border="0" allow="autoplay; fullscreen; picture-in-picture" title="TigerArts pitch for Pathfinders"></iframe>        
        </div>
      ) : (
        <div className="relative">
          <img
            className="w-full rounded-md drop-shadow-md"
            src={image}
            alt={title}
          />              
          {vimeo && <div className="absolute rounded-b-md bottom-0 left-0 right-0 p-4 text-sm text-white bg-gray-500 bg-opacity-80">Video available...</div>}          
        </div>        
      )}
    </div>
  );
}

export default ImageWithVideo;