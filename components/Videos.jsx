import React from 'react'
import ReactPlayer from "react-player";

function Videos(video) {
    console.log(video,"video")
  return (
    <div>
        <div className='productHeading'>
  <h1 className='heading'>VIDEOS</h1>
 </div> 
<div className='videos'>
    {video.video.map(list =>
     
      <ReactPlayer
              url={list.image}
              controls
              light={list.image}
            />

    )}
    
</div>

    </div>
  )
}

export default Videos
