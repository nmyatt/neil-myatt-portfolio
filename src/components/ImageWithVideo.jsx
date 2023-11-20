function ImageWithVideo({showVideo,playVideo,image,vimeo,title,big}) {

  const vidIcon = (<svg width="50" height="50" viewBox="0 0 448 354" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="movie">
  <path 
    fillRule="evenodd"
    clipRule="evenodd" 
    d="M448 0H0V354H448V0ZM18 23C18 20.2386 20.2386 18 23 18H67C69.7614 18 72 20.2386 72 23V56C72 58.7614 69.7614 61 67 61H23C20.2386 61 18 58.7614 18 56V23ZM107 23C107 20.2386 109.239 18 112 18H156C158.761 18 161 20.2386 161 23V56C161 58.7614 158.761 61 156 61H112C109.239 61 107 58.7614 107 56V23ZM201 18C198.239 18 196 20.2386 196 23V56C196 58.7614 198.239 61 201 61H245C247.761 61 250 58.7614 250 56V23C250 20.2386 247.761 18 245 18H201ZM285 23C285 20.2386 287.239 18 290 18H334C336.761 18 339 20.2386 339 23V56C339 58.7614 336.761 61 334 61H290C287.239 61 285 58.7614 285 56V23ZM379 18C376.239 18 374 20.2386 374 23V56C374 58.7614 376.239 61 379 61H423C425.761 61 428 58.7614 428 56V23C428 20.2386 425.761 18 423 18H379ZM19 299C19 296.239 21.2386 294 24 294H68C70.7614 294 73 296.239 73 299V332C73 334.761 70.7614 337 68 337H24C21.2386 337 19 334.761 19 332V299ZM113 294C110.239 294 108 296.239 108 299V332C108 334.761 110.239 337 113 337H157C159.761 337 162 334.761 162 332V299C162 296.239 159.761 294 157 294H113ZM197 299C197 296.239 199.239 294 202 294H246C248.761 294 251 296.239 251 299V332C251 334.761 248.761 337 246 337H202C199.239 337 197 334.761 197 332V299ZM291 294C288.239 294 286 296.239 286 299V332C286 334.761 288.239 337 291 337H335C337.761 337 340 334.761 340 332V299C340 296.239 337.761 294 335 294H291ZM375 299C375 296.239 377.239 294 380 294H424C426.761 294 429 296.239 429 299V332C429 334.761 426.761 337 424 337H380C377.239 337 375 334.761 375 332V299Z"
    fill="#444444"/>
  <path d="M295.201 177L186.9 241.519V112.481L295.201 177Z" fill="white"/>
  </g>
  </svg>
  )
  
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
          {vimeo && <div className="absolute flex flex-col justify-center items-center rounded-b-md bottom-0 left-0 right-0 p-2 text-sm text-gray-500 bg-white bg-opacity-70"><div>{vidIcon}</div></div>}
        </div>        
      )}
    </div>
  );
}

export default ImageWithVideo;