import React from "react";
import Yash_photo from "../images/yash_photo.jpeg";
import Reactanim from "../video/react_animation.mp4";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#111c3ef3] md:p-12 p-4">
        <div className=" flex md:flex-row flex-col place-content-around mt-16">
            <div className="self justify-center align-middle mt-8">
              <div className="text-[#7FFFD4] font-bold  flex flex-col ">
                <h1 className="md:text-6xl text-4xl font-serif">Heyo !!🚀<br/>I'm </h1>
                <h3 className="md:text-8xl text-6xl ">Yash Bawa</h3>
              </div>
              <div className="text-2xl mt-8">
                <p className="text-[#7FFFD4] font-semibold font-serif p-2">A self-Taught Developer</p>
                <p className="text-[#7FFFD4] font-semibold font-serif p-2">Want to know more, <div className="animate-bounce rounded-full border-white pt-2">⬇️</div></p>
              </div>
                <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-center rounded md:w-1/4 w-1/2 mb-4">
                    <button>
                        <span>
                        <a href="/Contact">Let's Talk</a>
                        </span>
                    </button>
                </div>
            </div>
        <div >
          <img className=" rounded-lg border-[#7FFFD4] border-2 md:w-80 md:h-96 sm:w-14 sm:h-22 " src={Yash_photo} alt="yash-photo" />
        </div>
      </div>
      
      {/* about box */}
      <h1 className="text-6xl mt-12 text-center mt-8 font-serif text-[#7FFFD4] font-semibold mb-8" >About me</h1>
        <div className=" mt-16 md:px-36">
            <div className=" flex md:flex-row flex-col place-content-around">
              <div className="md:w-80 md:h-96 sm:w-14 sm:h-22 rounded-lg ">
                {/* <!-- // add a telivison kind of thing to make the video look realist  --> */}
                <video loop className="rounded-lg">
                  <source src={Reactanim} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
                <div className="description">
                    <h4 className="md:text-2xl  text-[#7FFFD4] font-semibold md:pt-2 pt-12 md:p-12">
                        I am a Young Passionate Coder Trying to learn and absorb
                        all Knowledge around me.

                    </h4>

                    <div className="mt-8 mb-4 md:px-12">
                      <button >
                        <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-center  rounded w-1/4 "  href="/About">➤Know more</a>
                      </button>
                    </div>
              </div>
            </div>
      </div>
      <div className=" mt-4 mt-8  text-[#7FFFD4] font-semibold mb-8">
        <div >
          <h1 className="md:text-6xl text-4xl text-center font-serif">Skills</h1>
          <h4 className="md:text-4xl text:2xl p-8 text-center">These are the various Languages and frameworks :-</h4>
          {/* <h4>Here are my various Projects🧠</h4> */}
          {/* <button><a href="/Projects">Projects🧠</a></button> */}
        </div>
        <div className="skills_content_header md:flex md:flex-row md:justify-center md:items-center ">
          <a className="flex flex-row justify-center items-center ">
            <i id="html" className="fa-brands fa-html5 text-orange-700 text-7xl p-4" ></i>
            <i id="css" className="fab fa-css3 text-sky-600 text-7xl p-4"></i>
          </a>
          <a className="flex flex-row justify-center items-center ">
            <i id="js" className="fab fa-js text-yellow-400  rounded-lg text-7xl p-4"></i>
            <i id="react" className="fa-brands fa-react text-sky-900 text-7xl p-4"></i>
          </a>
          <a className="flex flex-row justify-center items-center ">
            <i id="git" className="fa-brands fa-git-alt text-orange-700 text-7xl p-4"></i>
            <i className="fa-brands fa-square-github text-black text-7xl p-4"></i>
          </a>
          <a className="flex flex-row justify-center items-center ">
            <i id="java" className="fa-brands fa-java text-orange-700 text-7xl p-4"></i>
            <i id="c" className="fa-solid fa-c text-sky-400 text-7xl p-4"></i>
          </a>
        </div>
        <div className="flex flex-row justify-center items-center" >
            <a href="/Experience" className="my-8 bg-blue-500   hover:bg-blue-700 text-white font-bold py-2 text-center rounded-lg  text-center md:w-1/2 w-1/2">Experiences</a>
        </div>
        <div className="mt-4 mt-8  text-[#7FFFD4] font-semibold mb-8"> 
            <div className="flex flex-col justify-center items-center">
                <p className="md:text-6xl text-4xl text-center font-serif mt-8">Projects</p>
                <p className="md:text-4xl text:2xl p-8 text-center">Projects are always necessary to implement the Knowledge gained
                So here my Projects !</p>
                <a href="/Projects" className="my-8 bg-blue-500   hover:bg-blue-700 text-white font-bold p-2 text-center rounded-lg text-center text-center md:w-32 w-1/2">
                    View ➮
                </a>
            </div>
            
        </div>
      </div>
    </div>
  );
}