import React from 'react'

//Import the CSS file 
import "./Sponsors.css";
import goldSponsor1 from "../Assets/Sponsors/Aecc.png"
import goldSponsor2 from "../Assets/Sponsors/BSGroup.png"
import silverSponsor1 from "../Assets/Sponsors/BlueLearn.png"

export default function Sponsors() {
  return (
    <>
        <div className="secWrap cf">
            <p className='secHead'> Our Sponsors </p>

            {/* Platinum Sponsors section */}
            {/* <div className="sponsorsContainer">
             
            </div> */}

            {/* Gold Sponsors section */}
            <div className="sponsorsContainer mp8 cf">

                <div className="sponsorsHead"> <p>Gold Sponsors</p> </div>

                <div className="rf">
                    <img className='sponsor' src={goldSponsor1} alt="" />
                    <img className='sponsor' src={goldSponsor2} alt="" />
                </div>
            </div>
            {/* Silver Sponsors section */}
            <div className="sponsorsContainer mp8 cf">

                <div className="sponsorsHead"> <p>Silver Sponsors</p> </div>

                <div className="rf">
                    <img className='sponsor' src={silverSponsor1} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}
