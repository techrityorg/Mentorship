import React from "react";
const Project = (props) => {
  return (
    <div className="Project_cont">
      <div className="P_card">
        <div className="Project_ImgCont">
          <img src={props.image} className="P_image" alt="" />
        </div>
        <div class="details">
          <div class="center">
            <h1>
              {props.title}
              <br />
              <span>{props.subtitle}</span>
            </h1>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
      <div className="Project_refers">
        <div>
          <button className="Ref_buttons">
            <a href={props.visit} target="_blank" rel="noreferrer">
              <h2>{props.title}</h2>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
