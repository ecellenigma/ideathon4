import React from "react";
import ideation from "../Assets/IdeationTrack.svg"
import prototype from "../Assets/StartupTrack.svg"
import './Tracks.css'

function Tracks(){
    return (
        <div className="right-container" id="tracks">
            <div>
                <p className="track-title">Tracks</p>
            </div>
        <div className="container_tracks">
           <div className="items">
               <div className="icon">
                   <img src={prototype} alt="" className="track_logo"/>
               </div>
               <div className="content-tracks">
                   <p id="content_heading">Prototype Track</p>
                   <p className="content_text">Ready to showcase your business idea? Impress judges and investors with a killer prototype that demonstrates its feasibility and uniqueness! Show off your creativity and innovation with a physical or digital model.</p>
               </div>   
           </div>
           <div className="items">
               <div className="icon">
                   <img src={ideation} alt="" className="track_logo"/>
               </div>
               <div className="content-tracks">
                   <p id="content_heading">Ideation Track</p>
                   <p className="content_text">It's time to brainstorm and refine your business idea! Analyze the market, identify gaps, and use techniques like mind mapping and SWOT analysis to develop your concept. Let your creativity run wild to become a successful young entrepreneur!</p>
               </div>   
           </div>
        </div>
     </div>
    );
}

export default Tracks