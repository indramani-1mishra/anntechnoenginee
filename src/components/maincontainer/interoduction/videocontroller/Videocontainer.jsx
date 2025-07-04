import React, {  } from 'react'
import { useNavigate } from 'react-router-dom'
import VideoCard from '../../../reauseblecomponet/videocard/Videocard';
import './videocontainer.css'

export default function Videocontainer() {
    const navigate = useNavigate();

  return (
   <>
       <h1 style={{boxShadow:"0px 0px 3px 0px black",width:"250px",padding:"5px",marginBottom:"5px"}} >Product videos</h1>
     <div className="video-container">
    
            <VideoCard 
               thumbnail="firstimage.jpg"
               title="Portable Room De humidifier"
               onclickhandler={()=>  navigate(`/showvideo/tgBpTaPvnQ4/${encodeURIComponent('Portable Room De humidifier')}`)}
              
            />
           
             <VideoCard 
               thumbnail="second.jpg"
               title="Ultrasonic Mist Maker Fogger Humidifier"
               onclickhandler={()=>  navigate(`/showvideo/VjBc_9AGPEU/${encodeURIComponent('Ultrasonic Mist Maker Fogger Humidifier')}`)}
                
            />
            <VideoCard 
               thumbnail="third.jpg"
               title="Industrial Ultrasonic Humidifier ate20UH"
               onclickhandler={()=>  navigate(`/showvideo/VpISwfpNx6c/${encodeURIComponent('Industrial Ultrasonic Humidifier ate20UH')}`)}
                
            />
         </div>
   </>
  )
}
