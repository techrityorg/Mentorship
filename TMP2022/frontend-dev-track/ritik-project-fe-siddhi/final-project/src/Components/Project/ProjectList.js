import React from "react";
import Project from "./Project";
import "./ProjectList.css";
import W2p1 from '../../assets/w2p1.png'
import W2p2 from "../../assets/w2p2.png";
import W2p3 from "../../assets/w2p3.png";
import W2p4 from "../../assets/w2p4.png";
import W3p1 from "../../assets/w3p1.png";
import W3p2 from "../../assets/w3p2.png";
import W3p3 from "../../assets/w3p3.png";
import W3p4 from "../../assets/w3p4.png";
import W4p1 from "../../assets/w4p1.png";
import W4p2 from "../../assets/w4p2.png";
import W4p3 from "../../assets/w4p3.png";
import W5p1 from "../../assets/w5p1.png";
import W5p2 from "../../assets/w5p2.png";
import W5p3 from "../../assets/w5p3.png";


const ProjectList = () => {
  return (
    <>
      <nav>
        <h1>Techrity Projects</h1>
      </nav>
      <h1>Week-2 Projects</h1>
      <div class="PL_cont">
        <div className="PL_display">
          <Project
            image={W2p1}
            title="Biodata Page"
            subtitle="This is a solution to the Week-2: Project-1 of Techrity Frontend Development Mentorship."
            visit="https://tda.ritikk.me/week-2/Project-1/index.html"
          />
        </div>
        <div className="PL_display">
          <Project
            image={W2p2}
            title="Registration Form"
            subtitle="This is a solution to the Week-2: Project-2 of Techrity Frontend Development Mentorship. "
            visit="https://tda.ritikk.me/week-2/Project-2/index.html"
          />
        </div>
        <div className="PL_display">
          <Project
            image={W2p3}
            title="Table of HTML Tags"
            subtitle="This is a solution to the Week-2: Project-3 of Techrity Frontend Development Mentorship. "
            visit="https://tda.ritikk.me/week-2/Project-3/index.html"
          />
        </div>{" "}
        <div className="PL_display">
          <Project
            image={W2p4}
            title="School Website"
            subtitle="This is a solution to the Week-2: Project-4 of Techrity Frontend Development Mentorship."
            visit="https://tda.ritikk.me/week-2/Project-4/index.html"
          />
        </div>
      </div>
      <h1>Week-3 Projects</h1>
      <div class="PL_cont">
        <div className="PL_display">
          <Project
            image={W3p1}
            title="Form"
            subtitle="This is a solution to the Week-3: Project-1 of Techrity Frontend Development Mentorship. "
            visit="https://tda.ritikk.me/week-3/Project-1/index.html"
          />
        </div>
        <div className="PL_display">
          <Project
            image={W3p2}
            title="Responsive Profile Card"
            subtitle="This is a solution to the Week-3: Project-2 of Techrity Frontend Development Mentorship. "
            visit="https://tda.ritikk.me/week-3/Project-2/index.html"
          />
        </div>
        <div className="PL_display">
          <Project
            image={W3p3}
            title="HTML CSS Carousel"
            subtitle="This is a solution to the Week-3: Project-3 of Techrity Frontend Development Mentorship. "
            visit="https://tda.ritikk.me/week-3/Project-3/index.html"
          />
        </div>{" "}
        <div className="PL_display">
          <Project
            image={W3p4}
            title="Responsive School Website"
            subtitle="This is a solution to the Week-3: Project-4 of Techrity Frontend Development Mentorship. "
            visit="https://tda.ritikk.me/week-3/Project-4/index.html"
          />
        </div>
      </div>
      <h1>Week-4 Projects</h1>
      <div class="PL_cont">
        <div className="PL_display">
          <Project
            image={W4p1}
            title="Age Calculator"
            subtitle="This is a solution to the Week-4: Project-1 of Techrity Frontend Development Mentorship."
            visit="https://tda.ritikk.me/week-4/Project-1/index.html"
          />
        </div>
        <div className="PL_display">
          <Project
            image={W4p2}
            title="JavaScript Calculator"
            subtitle="This is a solution to the Week-4: Project-2 of Techrity Frontend Development Mentorship."
            visit="https://tda.ritikk.me/week-4/Project-2/index.html"
          />
        </div>
        <div className="PL_display">
          <Project
            image={W4p3}
            title="Form"
            subtitle="This is a solution to the Week-4: Project-3 of Techrity Frontend Development Mentorship."
            visit="https://tda.ritikk.me/week-4/Project-3/index.html"
          />
        </div>{" "}
      </div>
      <h1>Week-5 Projects</h1>
      <div class="PL_cont">
        <div className="PL_display">
          <Project
            image={W5p1}
            title="Tic Tac Toe Game"
            subtitle="This is a solution to the Week-5: Project-1 of Techrity Frontend Development Mentorship."
            visit="https://tda.ritikk.me/week-5/Project-1/index.html"
          />
        </div>
        <div className="PL_display">
          <Project
            image={W5p2}
            title="Weather App"
            subtitle="This is a solution to the Week-5: Project-2 of Techrity Frontend Development Mentorship."
            visit="https://tda.ritikk.me/week-5/Project-2/index.html"
          />
        </div>
        <div className="PL_display">
          <Project
            image={W5p3}
            title="Password Generator"
            subtitle="This is a solution to the Week-5: Project-3 of Techrity Frontend Development Mentorship."
            visit="https://tda.ritikk.me/week-5/Project-3/index.html"
          />
        </div>{" "}
      </div>
      <h1>Week-6 Projects</h1>
      <div class="PL_cont">
        <div className="PL_display">
          <Project
            image={W2p1}
            title="Portfolio Website in ReactJS"
            subtitle="This is a solution to the Week-6: Project-1&2 of Techrity Frontend Development Mentorship."
            visit="https://techrity-w6p1-2.vercel.app/"
          />
        </div>
        <div className="PL_display">
          <Project
            image="https://user-images.githubusercontent.com/78131705/193799037-9e3f0824-3fd2-4476-8314-01e25a62e65e.png"
            title="Weather App in ReactJS"
            subtitle="This is a solution to the Week-6: Project-3 of Techrity Frontend Development Mentorship."
            visit="https://techrity-w6p3.vercel.app/"
          />
        </div>
      </div>
    </>
  );
};

export default ProjectList;
