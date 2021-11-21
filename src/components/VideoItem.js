import './videoitem.css'; 
import React from 'react'; 

const VideoItem = ({video, onVideoSelect }) => {
    return <div onClick={() => onVideoSelect(video)} className="video-item"> 
               <img alt={video.snippet.title} className= "ui image" src={video.snippet.thumbnails.medium.url} /> 
               <div className="content">
                   <div className="header">{video.snippet.title}</div>
               </div>
            </div>;

};

export default VideoItem;