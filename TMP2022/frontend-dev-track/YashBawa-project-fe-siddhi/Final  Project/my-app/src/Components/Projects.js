import React from 'react'
import Detailcard from './Detailcard';

import w2p1 from "../images/w2p1.png";
import w2p2 from "../images/w2p2.png";
import w2p3 from "../images/w2p3.png";
import w2p4 from "../images/w2p4.png";
import w3p1 from "../images/w3p1.png";
import w3p2 from "../images/w3p2.png";
import w3p3 from "../images/w3p3.png";
import w4p1 from "../images/w4p1.png";
import w4p3 from "../images/w4p2.png";
import w5p1 from "../images/w5p1.png";
import w5p2 from "../images/w5p2.png";
import w5p3 from "../images/w5p3.png";
import w6p3 from "../images/w6p3.png";

export default function Projects() {
  return (
    <>
        <div className=" bg-sky-200 flex flex-row">
        <h1 className='md:text-6xl text-4xl min-h-full font-bold font-serif bg-sky-700 md:p-8 p-2 pt-24 text-center items-center align-middle'>
            T<br/>
            E<br/>
            C<br/>
            H<br/>
            R<br/>
            I<br/>
            T<br/>
            Y<br/>
            <div className='pt-48'>
              M<br/>
              E<br/>
              N<br/>
              T<br/>
              O<br/>
              R<br/>
              S<br/>
              H<br/>
              I<br/>
              P<br/>
            </div>
            <div className='pt-48'>
            P<br/>
            R<br/>
            O<br/>
            J<br/>
            E<br/>
            C<br/>
            T<br/>
            S<br/>

            </div>
                        
        </h1>
        <div className=''>
        <h1 className="flex justify-end text-black md:text-4xl text-2xl font-bold p-4 font-serif underline underline-offset-2 ">Week-2 Projects</h1>
        <div className="flex justify-center items-center flex-col bg-sky-300 md:p-8 box-border md:m-8 m-2 rounded-full  border-sky-600 ">
            <div className='flex flex-col md:flex-row '>
            <div>
            <Detailcard
                image={w2p1}
                title="Personal-info Webpage"
                link="https://github.com/techrityorg/Mentorship/tree/main/TMP2022/frontend-dev-track/YashBawa-project-fe-siddhi/Week-2-Projects/Project-1"
            />
            </div>
            <div >
          <Detailcard
            image={w2p2}
            title="Details Form"
            link="https://github.com/techrityorg/Mentorship/tree/main/TMP2022/frontend-dev-track/YashBawa-project-fe-siddhi/Week-2-Projects/Project-2"
            
            />
            </div>
            </div>
        <div className='flex md:flex-row flex-col'>
        <div className="PL_display">
          <Detailcard
            image={w2p3}
            title="Table of HTML Tags"
            link="https://github.com/techrityorg/Mentorship/tree/main/TMP2022/frontend-dev-track/YashBawa-project-fe-siddhi/Week-2-Projects/Project-3"
            
          />
        </div>{" "}
        <div className="PL_display">
          <Detailcard
            image={w2p4}
            title="School Website"
            link="https://github.com/techrityorg/Mentorship/tree/main/TMP2022/frontend-dev-track/YashBawa-project-fe-siddhi/Week-2-Projects/Project-4"
            
          />
        </div>
        </div>
      </div>
      <h1 className="text-black md:text-4xl text-2xl font-bold p-4 font-serif underline text-right underline-offset-2 ">Week-3 Projects</h1>
      <div class="flex flex-col bg-sky-300 p-8 box-border md:m-8 m-2 rounded-full  border-sky-600 ">
        <div className='flex md:flex-row flex-col'>
        <div className="PL_display">
          <Detailcard
            image={w3p1}
            title="Details Form"
            link="https://github.com/techrityorg/Mentorship/tree/main/TMP2022/frontend-dev-track/YashBawa-project-fe-siddhi/Week-3-Projects/Project-1"
            
          />
        </div>
        <div className="PL_display">
          <Detailcard
            image={w3p2}
            title="Responsive Profile Card"
            link="https://github.com/techrityorg/Mentorship/tree/main/TMP2022/frontend-dev-track/YashBawa-project-fe-siddhi/Week-3-Projects/Project-2"
            
          />
        </div>
        </div>
        <div className='flex md:flex-row flex-col'>
        <div >
          <Detailcard
            image={w3p3}
            title="HTML-CSS Carousel"
            link="https://github.com/techrityorg/Mentorship/tree/main/TMP2022/frontend-dev-track/YashBawa-project-fe-siddhi/Week-3-Projects/Project-3"
            
          />
        </div>
        <div >
          <Detailcard
            image={w2p4}
            title="Responsive School Website"
            link="https://github.com/techrityorg/Mentorship/tree/main/TMP2022/frontend-dev-track/YashBawa-project-fe-siddhi/Week-3-Projects/Project-4"
            
          />
        </div>
        </div>
      </div>
      <h1 className="text-black md:text-4xl text-2xl font-bold p-4 font-serif underline text-right underline-offset-2  ">Week-4 Projects</h1>
      <div class="flex flex-col bg-sky-300 p-8 box-border md:m-8 m-2 rounded-full  border-sky-600 ">   
        <div className='flex md:flex-row flex-col'>
        <div className="PL_display">
          <Detailcard
            image={w4p1}
            title="Age Calculator"
            link="https://github.com/techrityorg/Mentorship/tree/main/TMP2022/frontend-dev-track/YashBawa-project-fe-siddhi/Week-4-Projects/Project-1"
           
          />
        </div>
        <div className="PL_display">
          <Detailcard
            image={w4p3}
            title="Calculator"
            link="https://github.com/techrityorg/Mentorship/tree/main/TMP2022/frontend-dev-track/YashBawa-project-fe-siddhi/Week-4-Projects/Project-2"
          />
        </div>
        </div>
        <div className='flex md:flex-row flex-col'>
        <div className="PL_display">
          <Detailcard
            image={w3p1}
            title="Details Form"
            link="https://github.com/techrityorg/Mentorship/tree/main/TMP2022/frontend-dev-track/YashBawa-project-fe-siddhi/Week-4-Projects/Project-3"
          />
        </div>
        </div>
      </div>
      <h1 className="text-black md:text-4xl text-2xl font-bold p-4 font-serif underline text-right underline-offset-2  ">Week-5 Projects</h1>
      <div class="flex flex-col bg-sky-300 p-8 box-border md:m-8 m-2 rounded-full  border-sky-600 ">
        <div className='flex md:flex-row flex-col'>
        <div className="PL_display">
          <Detailcard
            image={w5p1}
            title="Tic Tac Toe"
            link="https://github.com/techrityorg/Mentorship/tree/main/TMP2022/frontend-dev-track/YashBawa-project-fe-siddhi/Week-5-Projects/Project-1"
          />
        </div>
        <div className="PL_display">
          <Detailcard
            image={w5p2}
            title="Weather App"
            link="https://github.com/techrityorg/Mentorship/tree/main/TMP2022/frontend-dev-track/YashBawa-project-fe-siddhi/Week-5-Projects/Project-2"
          />
        </div>
        </div>
        <div className='flex md:flex-row flex-col'>
        <div className="PL_display">
          <Detailcard
            image={w5p3}
            title="Password Generator"
            link="https://github.com/techrityorg/Mentorship/tree/main/TMP2022/frontend-dev-track/YashBawa-project-fe-siddhi/Week-5-Projects/Project-3"
          />
        </div>
        </div>
      </div>
      <h1 className="text-black md:text-4xl text-2xl font-bold p-4 font-serif underline text-right underline-offset-2  ">Week-6 Projects</h1>
      <div class="flex flex-col bg-sky-300 md:p-8 box-border md:m-8 m-2 rounded-full  border-sky-600 ">
      <div className='flex md:flex-row flex-col'>
        <div className="PL_display">
          <Detailcard
            image={w2p1}
            title="Responsive Portfolio Website in ReactJS"
            link="https://github.com/techrityorg/Mentorship/tree/main/TMP2022/frontend-dev-track/YashBawa-project-fe-siddhi/Week-6-Projects/Project-2/my-app"
          />
        </div>
        <div className="PL_display">
          <Detailcard
            image={w6p3}
            title="Responsive Weather App in ReactJS"
            link="https://github.com/techrityorg/Mentorship/tree/main/TMP2022/frontend-dev-track/YashBawa-project-fe-siddhi/Week-6-Projects/Project-3/my-app"
          />
        </div>
        </div>
      </div>
       {/* footer  */}
       <div className='flex justify-center'>
    <div className='md:text-4xl text-2xl font-bold font-serif w-1/4 flex justify-center  bg-sky-700 md:p-4 p-2 rounded-lg cursor-grab'><a href='https://github.com/YashBawa/Mentorship/tree/main/TMP2022/frontend-dev-track/YashBawa-project-fe-siddhi'>Made by Ybash</a></div></div>
      </div>
    </div>
   
    </>
  )
}
