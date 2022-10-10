import React from "react";
import Yash_photo from "../images/yash_photo.jpeg";
import Reactanim from "../video/react_animation.mp4";


export default function Home() {
  return (
    <div >
      <div className="photo_intro">
        <div className="self">
          <div className="">
            <h1>Heyo !!😊</h1>
            <h3>I'm Yash Bawa</h3>
          </div>
          <div className="name_data">
            <p id="self_taught">A self-Taught Developer</p>
            {/* <!-- <br />  */}
            <p id="self_skills">Want to Know more about me, get in Touch . </p>
          </div>
          <div className="transform h-10 w-25 transition duration-500 hover:scale-10 hover:bg-green-200/75 mt-2 p-2 flex justify-center">
            <button>
              <span>
                <a href="/Contact">Let's Talk ➤</a>
              </span>
            </button>
          </div>
        </div>
        <div className="yash_phot">
          <img className="ybashpic" src={Yash_photo} alt="yash-photo" />
          {/* <img className="yash_photobg" src="yash_bg.png" alt="bg-image">  */}
        </div>
      </div>
      <div className="about_me">
        <div className="about">
          <div className="animation">
            {/* <!-- // add a telivison kind of thing to make the video look realist  --> */}
            <video loop>
              <source src={Reactanim} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <button>
            <a
              id="abt"
              href="/About"
              class="bg-[#66fcf1] text-black font-bold rounded-lg p-2 px-3 shadow-md shadow-[#1A759F] hover:shadow-lg hover:scale-110 hover:shadow-[#1A759F] transition duration-300"
            >
              About Me
            </a>
            </button>
          <div className="description">
            <h4 className="para">
              I'm Young Geek following my passion to code .
              <br />
              Coding is a very Interesting and deep field , I would like to
              touch every embedded surface.
              <br />
              Making things work and solving real word problems using my skills
              .
              <br />
              “Make it work, make it right, make it fast.”
              <br />– Kent Beck
            </h4>
            
            <div>
              <button id="about">
                <a href="/Experience">Know more➜</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="skills_header">
          <h1>Skills</h1>
          <h4>These are the various Languages and frameworks :-</h4>
          <h4>Here are my various Projects🧠</h4>
          <button><a href="/Projects">Projects🧠</a></button>
        </div>
        <div className="skills_content_header">
          <a className="social-icon">
            {/* <i id="html" className="fa-brands fa-html5"></i>
            <i id="css" className="fab fa-css3"></i>
            <i id="js" className="fab fa-js"></i>
            <i id="react" className="fa-brands fa-react"></i>
            <i id="java" className="fa-brands fa-java"></i>
            <i id="c" className="fa-solid fa-c"></i>
            <i id="git" className="fa-brands fa-git-alt"></i>
            <i className="fa-brands fa-square-github"></i> */}
          </a>
        </div>
      </div>
    </div>
  );
}

// import Reactrfc from 'react';

// // export default function Home() {
// //   return (
// //     <div>
// //       I AM SMART
// //     </div>
// //   )
// // }

// import Preview from "../images/img1.jpg";

// export default function Home() {
//   return (
//     <div>

//       <div className="max-h-screen flex justify-center items-center relative
//       p-2 text-[#66fcf1]">
//           <div>
//             <div className="flex flex-col text-6xl font-extrabold  w-full text-[#184E77]">
//               <img src={Preview} alt="uni-link" />
//             </div>
//             <div className="pt-1">
//               <p className="text-2xl flex justify-center font-medium">
//                 The connection which every college needs
//               </p>
//             </div>
//             <div className="flex flex-col justify-center items-center pt-2 pb-2">
//               <a
//                 href="/About"
//                 className="bg-[#66fcf1] text-black font-bold rounded-lg p-2 px-3 shadow-md shadow-[#1A759F] hover:shadow-lg hover:scale-110 hover:shadow-[#1A759F] transition duration-300"
//               >
//                 Log in
//               </a>
//             </div>
//             {/* <div className="flex items-center justify-center">
//               <img src={preview} alt="home_image" />
//             </div> */}
//           </div>
//         </div>
//     </div>
//   );
// }
