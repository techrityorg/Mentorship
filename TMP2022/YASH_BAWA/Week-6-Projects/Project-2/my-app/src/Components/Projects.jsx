import React from 'react';
import Expensetracker from "../images/Expense-tracker.png";
import Dice from "../images/dice-game.png";
import Drum from "../images/drum-kit.png";
import Emoji from "../images/emojipedia_bg.png";
import Voice from "../images/jarvis-voice-ss.webp";
import Netflix from "../images/netflix-clone.png";


export default function Projects() {
  return (
    <div className="min-h-screen bg-[#111c3ef3] md:p-12 p-4">
      <h1 className="md:text-6xl text-4xl text-center font-serif mt-8 text-[#7FFFD4] font-semibold mb-8 underline underline-offset-2" >Projects🧠</h1>
      <div class="all_projects">

        <div className="flex md:flex-row flex-col place-content-around md:mt-32 mt-8">
          <div className="flex flex-start justify-center items-center" >
            <img
              className='rounded-lg border-[#7FFFD4] border-2 md:w-full md:h-80 sm:w-14 sm:h-22'
              src={Expensetracker}
              alt="netflix clone Landing page"
            />
          </div>
          <div className="text-[#7FFFD4] font-semibold  p-8 text-center">
            <h3 className='md:text-4xl text:2xl'>Expense Tracker</h3>
            <p className='md:text-2xl text:1xl'>This Website helps you manage <br/> your expenses in an efficient Manner. </p>
            <a href="https://expense-tracker-ybash.netlify.app/">
                <i class="fa-solid fa-link"></i>
            </a>
          </div>
        </div>

        <div className="flex md:flex-row flex-col place-content-around md:mt-32 mt-8">
          <div className="text-[#7FFFD4] font-semibold  p-8 text-center" >
            <h3 className='md:text-4xl text:2xl'>Emojipedia</h3>
            <p className='md:text-2xl text:1xl'>Website is a tool to understand
            about various different <br/> emoji's and makes  your conversations easier and shorter . </p>
            <a  href="https://emojipedia-ybash.netlify.app/">
                <i class="fa-solid fa-link"></i>
            </a>
          </div>
          <div className="flex flex-start justify-center items-center ">
            <img className='rounded-lg border-[#7FFFD4] border-2 md:w-full md:h-80 sm:w-14 sm:h-22' src={Emoji} alt="emojipedia_ss" />
          </div>
        </div>

        <div className="flex md:flex-row flex-col place-content-around md:mt-32 mt-8">
          <div className="flex flex-start justify-center items-center" >
              <img
                  className='rounded-lg border-[#7FFFD4] border-2 md:w-full md:h-80 sm:w-14 sm:h-22'
                  src={Netflix}
                  alt="netflix clone Landing page"
              />
          </div>
          <div className="text-[#7FFFD4] font-semibold  p-8 text-center">
              <h3 className='md:text-4xl text:2xl'>Netflix Landing Page clone</h3>
              <p  className='md:text-2xl text:1xl'>This Landing is the exactly the same <br/> as the current Netflix page . </p>
              <a href="https://yashbawa.github.io/Netflix-Landing-Page-Clone-/">
                  <i class="fa-solid fa-link"></i>
              </a>
          </div>
        </div>

        <div className="flex md:flex-row flex-col place-content-around md:mt-32 mt-8">
          <div className="text-[#7FFFD4] font-semibold  p-8 text-center">
            <h3 className='md:text-4xl text:2xl'>Dice Game</h3>
            <br/>
            <p className='md:text-2xl text:1xl'>This is childhood board game converted to a website for creating recreation activity.  </p>
            <a href="https://yashbawa.github.io//Dice-Game/">
                <i class="fa-solid fa-link"></i>
            </a>
          </div>
          <div className="flex flex-start justify-center items-center ">
            <img className='rounded-lg border-[#7FFFD4] border-2 md:w-full md:h-80 sm:w-14 sm:h-22' src={Dice} alt="Dice-game" />
          </div>
        </div>
        <div className="flex md:flex-row flex-col place-content-around md:mt-32 mt-8">
          <div className="flex flex-start justify-center items-center ">
          <img className='rounded-lg border-[#7FFFD4] border-2 md:w-full md:h-80 sm:w-14 sm:h-22' src={Drum}alt="Drum Beats" />
          </div>
          <div className="text-[#7FFFD4] font-semibold  p-8 text-center">
          <h3 className='md:text-4xl text:2xl' >Drum Kit</h3>
          <p className='md:text-2xl text:1xl'>This website provides an amazing set of Drum <br/> Beats Play and Enjoy over it .</p>
          <a href="https://yashbawa.github.io/drum-beats/">
              <i class="fa-solid fa-link"></i>
          </a>
          </div>
        </div>
        <div className="flex md:flex-row flex-col place-content-around md:mt-32 mt-8">
          <div className="text-[#7FFFD4] font-semibold  p-8 text-center">
            <h3 className='md:text-4xl text:2xl'>Jarvis Voice-Assistant</h3>
            <p className='md:text-2xl text:1xl'>This Jarvis Voice Assistant performs various <br/> different actions on just voice   commands , as playing <br/> youtube videos fetchingdata from wikipeda etc.</p>
            <a href="https://drive.google.com/file/d/1YOtOIysyX8Bxzx_dGI-Mc1_CE7CDCLof/view">
                <i class="fa-solid fa-link"></i>
            </a>
          </div>
          <div class="Voice-assistant-ss">
            <img className='rounded-lg border-[#7FFFD4] border-2 md:w-full md:h-80 sm:w-14 sm:h-22' src={Voice} alt="Dice-game" />
          </div>
        </div>
      </div>
    </div>
  );
}
