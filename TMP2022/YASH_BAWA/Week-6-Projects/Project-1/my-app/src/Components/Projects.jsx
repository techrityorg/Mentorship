import React from 'react';
import Expensetracker from "../images/Expense-tracker.png";
import Dice from "../images/dice-game.png";
import Drum from "../images/drum-kit.png";
import Emoji from "../images/emojipedia_bg.png";
import Voice from "../images/jarvis-voice-ss.webp";
import Netflix from "../images/netflix-clone.png";

export default function Projects() {
  return (
    <div>
      <h1 class="heading text-5xl text-blue-500 p-4 drop-shadow-2xl">Projects🧠</h1>
      <div class="all_projects">

        <div class="expense-tracker">
          <div class="tracker">
            <img
              src={Expensetracker}
              alt="netflix clone Landing page"
            />
          </div>
          <div class="expense-description">
            <h3  >Expense Tracker</h3>
            <p>This Website helps you manage <br/> your expenses in an efficient Manner. </p>
            <a href="https://expense-tracker-ybash.netlify.app/">
                <i class="fa-solid fa-link"></i>
            </a>
          </div>
        </div>

        <div class="emojipedia">
          <div class="emojipedia_description">
            <h3  >Emojipedia</h3>
            <p>This is Website is useful for understanding
            <br/> about various different emoji's and makes <br/> your conversations easier shorter . </p>
            <a  href="https://emojipedia-ybash.netlify.app/">
                <i class="fa-solid fa-link"></i>
            </a>
          </div>
          <div class="emojipedia_ss">
            <img  src={Emoji} alt="emojipedia_ss" />
          </div>
        </div>

        <div class="Netflix-clone">
          <div class="netflix-chill">
              <img
                  src={Netflix}
                  alt="netflix clone Landing page"
              />
          </div>
          <div class="netflix-description">
              <h3>Netflix Landing Page clone</h3>
              <p>This Landing is the exactly the same <br/> as the current Netflix page . </p>
              <a href="https://yashbawa.github.io/Netflix-Landing-Page-Clone-/">
                  <i class="fa-solid fa-link"></i>
              </a>
          </div>
        </div>

        <div class="Dice-game">
          <div class="dice-description">
            <h3>Dice Game</h3>
            <br/>
            <p>This is childhood board game converted to <br/> a website for creating recreation activity.  </p>
            <a href="https://yashbawa.github.io//Dice-Game/">
                <i class="fa-solid fa-link"></i>
            </a>
          </div>
          <div class="Dice-game-ss">
            <img  src={Dice} alt="Dice-game" />
          </div>
        </div>
        <div class="Drum-kit">
            <div class="drum-kit-ss">
            <img  src={Drum} alt="Drum Beats" />
            </div>
            <div class="Drum-kit-decription">
            <h3 >Drum Kit</h3>
            <p>This website provides an amazing set of Drum <br/> Beats Play and Enjoy over it .</p>
            <a href="https://yashbawa.github.io/drum-beats/">
                <i class="fa-solid fa-link"></i>
            </a>
            </div>
        </div>
        <div class="Voice-assistant">
          <div class="Voice-assistant-description">
            <h3>Jarvis Voice-Assistant</h3>
            <p>This Jarvis Voice Assistant performs various <br/> different actions on just voice   commands , as playing <br/> youtube videos fetchingdata from wikipeda etc.</p>
            <a href="https://drive.google.com/file/d/1YOtOIysyX8Bxzx_dGI-Mc1_CE7CDCLof/view">
                <i class="fa-solid fa-link"></i>
            </a>
          </div>
          <div class="Voice-assistant-ss">
            <img  src={Voice} alt="Dice-game" />
          </div>
        </div>
      </div>
    </div>
  );
}
