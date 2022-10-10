import React from 'react';
import Biosphere from "../images/biosphere.png";
import Ecell from "../images/ECell.png";
import GDSC from "../images/GDSC.png";
import Gssoc from "../images/gssoc.png";

export default function Experience() {
  return (
    <div>
    <h1 >Experience 🤖</h1>
    <div className="Experience">
        <div className="experience_0">
            <div className="GDSC club">
                <div className="Ecell top">
                    <h2><img src={GDSC} alt="GDSC"/>Google Developers Students Club</h2>
                    <h3>Web Developer</h3>
                </div>
                <div clas="gdsc-bottom">
                    <p>Member of the Technical Team , to help everyone learn and grow. </p>
                </div>
            </div>
        </div>
        <div className="experience_">
            <div className="E-cell">
                <div className="Ecell top">
                    <h2><img src={Ecell} alt="ECELL"/>Entetreneurship Club</h2>
                    <h3>Web Developer</h3>
                </div>
                <div clas="gdsc-bottom">
                    <p>Member of the Technical Team , to help everyone learn and grow. </p>
                </div>
            </div>
        </div>
        <div className="experience_1">
            <div className="biosphere club">
                <div className="biosphere-top">
                    <h2><img src={Biosphere} alt="biosphere-club"/>The Biosphere Club</h2>
                    <h3>Event Manager</h3>
                </div>
                <div clas="biosphere-bottom">
                    <p>Contributed to the club in conducting various events online and offline.</p>
                </div>
            </div>
        </div>
        <div className="Experience_2">
            <div className="GSSOC_top">
                <h2><img src={Gssoc} alt="gssoc badges"/>GSSOC</h2>
                <br/>
                <h3>Contributor</h3>
            </div>
            <div className="GSSOC-bottom">
                <p>Participated in GSSOC and contributed <br/> over a few Open Source Projects.</p> 
            </div>
        </div>
    </div>
    </div>
  );
}
