import React from 'react'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

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
       key={list}
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
