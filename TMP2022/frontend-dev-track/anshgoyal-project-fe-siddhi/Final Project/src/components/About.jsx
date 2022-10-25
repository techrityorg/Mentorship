import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p>
          <p className="mt-3"> Greetings To Infinity & Beyond!
 </p>
          <br />
          <p className="mt-1">
            {" "}
            I am Ansh Goyal, a 2nd year undergrad and currently pursuing
Bachelors of Technology in Computer Science Major from Indian
Institute of Information Technology Agartala.
          </p>
          <br />
          <p className="mt-1">
            {" "}
            Some of the communities which I am contributing to actively:{" "}
          </p>
          <br />
          <p className="mt-1">
            {" "}
            1. Google Developer Student Club Lead: Established the first ever
Google Developer Student Club at Indian Institute of Information
Technology, Agartala.
Organized a 10+ Tech Events & Workshops on the topics such as
Google Cloud, Android, etc.
Leaded a team of 20+ students to conduct and mentor the students
in technologies such as Web3, Cloud, Android, Web, AI and ML.{" "}
          </p>
          <br />
          <p className="mt-1">
          2. GirlUp Agartala: Started a regional chapter under the United
Nations Campaign, i.e., GirlUp. The main motive of this club is to
empower girls to actively take part in the technological world, and
guide them by providing sessions on various topics such as Android,
Web, Cloud, ML, AI.
GirlUp Agartala in collaboration with Google Developer Student
Club IIIT Agartala organized various events, to help maintain gender
equality.
          </p>
          <br />
          <p className="mt-1">
            {" "}
            3. Postman Student Leader: Became the first Postman Student
Leader at the Campus of Indian Institute of Information Technology
Agartala. Organized webinars on Web Development, conducted API
talks, and educated 100+ students in my community to become an
API Literate.
            <br />
            <br />
            I'm interested in a career in software development, to solve real life
challenges and problems with my skill set.
            <br/>
            <br/>
            I really enjoy learning new things and connecting with people across
a range of industries, so don't hesitate to reach out if you'd like to get
in touch:
<br/>
<br/>
<a href="https://twitter.com/thisisanshg">Twitter: @thisisanshg</a>
<br/>
<a href="mailto:anshgoyal1704@gmail.com">Email: anshgoyal1704@gmail.com</a>
          </p>
          
          <br />
          <p className="mt-4"> Thank you for reading.</p>
        </p>
      </div>
    </div>
  );
};

export default About;
