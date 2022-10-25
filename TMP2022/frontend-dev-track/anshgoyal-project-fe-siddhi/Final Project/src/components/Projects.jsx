import React from "react";
import a from "../assets/Projects/a.png";
import password_gen from "../assets/Projects/password-gen.png";
import simple_calc from "../assets/Projects/simple-calc.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: a,
      demo: "",
      code: "https://github.com/anshgoyalevil/Mentorship/tree/main/TMP2022/frontend-dev-track/anshgoyal-project-fe-siddhi/Week-3-Projects/Project-4",
    },
    {
      id: 2,
      src: password_gen,
      demo: "",
      code: "https://github.com/anshgoyalevil/Mentorship/tree/main/TMP2022/frontend-dev-track/anshgoyal-project-fe-siddhi/Week-5-Projects/Project-3",
    },
    {
      id: 3,
      src: simple_calc,
      demo: "",
      code: "https://github.com/anshgoyalevil/Mentorship/tree/main/TMP2022/frontend-dev-track/anshgoyal-project-fe-siddhi/Week-4-Projects/Project-2",
    },
  ];

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={demo}>Demo</a>
                </button>
                
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code}>Code</a>
                </button>
                
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
