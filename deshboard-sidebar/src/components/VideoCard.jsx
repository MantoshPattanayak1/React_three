import React from 'react';
function VideoCard({image,title}){
    return(
        <div className='videoCard'>
          <img src={image} alt=""/>
          <div className="video_thubnail">
            <h4>{title}</h4>
          </div>
        </div>
    )

}