import React from 'react';
import Biosphere from "../images/biosphere.png";
import Ecell from "../images/ECell.png";
import GDSC from "../images/GDSC.png";
import Gssoc from "../images/gssoc.png";
import Techrity from "../images/techrity.png";
import Hack from "../images/hackoberfest.png";

export default function Experience() {
  return (
    <div className='min-h-screen bg-[#111c3ef3] md:p-12 p-4'>
    <h1 className="md:text-6xl text-4xl text-center font-serif mt-8 text-[#7FFFD4] font-semibold mb-8 underline underline-offset-2">Experience 🤖</h1>
    
    <div>
        <div className='flex md:flex-row flex-col place-content-around md:mt-32 mt-8' >
            <div className="mt-8">
                <div className="GDSC top">
                    <h2 className=' text-[#7FFFD4] font-bold text-2xl' ><img className="rounded-xl h-72 w-96" src={GDSC} alt="GDSC"/>Google Developers Students Club</h2>
                    <h3 className='text-[#F5DEB3] font-medium text-lg'>Web Developer</h3>
                </div>
                <div className=" text-xl text-[#F5DEB3] font-bold">
                    <p>Member of the Technical Team, Learning <br/> and Developing skills and giving back to <br/> the society. </p>
                </div>
            </div>

            <div className="mt-8">
                <div className="Ecell top">
                    <h2 className=' text-[#7FFFD4] font-bold text-2xl'><img img className="rounded-xl h-72 w-96" src={Techrity} alt="GDSC"/>Techrity</h2>
                    <h3 className='text-[#F5DEB3] font-medium text-lg'>Web Developement Mentee</h3>
                </div>
                <div className=" text-xl text-[#F5DEB3] font-bold">
                    <p>This is a Mentorship program which helps <br/> students gain skills in solving of  real-world.</p>
                </div>
            </div>

            
        </div>

        <div   className='flex md:flex-row flex-col place-content-around md:mt-32 mt-8' >
            <div className="mt-8">
                <div className="Ecell top">
                    <h2 className=' text-[#7FFFD4] font-bold text-2xl' ><img img className="rounded-xl h-72 w-96" src={Ecell} alt="ECELL"/>Entetreneurship Club</h2>
                    <h3 className='text-[#F5DEB3] font-medium text-lg' >Web Developer</h3>
                </div>
                <div className=" text-xl text-[#F5DEB3] font-bold" >
                    <p>Member of the Technical Team , to <br/> help everyone learn and grow. </p>
                </div>
            </div>
            <div className="mt-8">
                <div className="biosphere-top">
                    <h2 className=' text-[#7FFFD4] font-bold text-2xl' ><img className="rounded-xl h-72 w-82" src={Biosphere} alt="biosphere-club"/>The Biosphere Club</h2>
                    <h3 className='text-[#F5DEB3] font-medium text-lg' >Event Manager</h3>
                </div>
                <div className=" text-xl text-[#F5DEB3] font-bold">
                    <p>Contributed to the club in Conducted<br/> Various Events</p>
                </div>
            </div>
        </div>
        

            <h1 className='md:text-6xl text-4xl text-center font-serif mt-8 text-[#7FFFD4] font-semibold mb-8 underline underline-offset-2 mt-28'>OPEN SOURCE📝</h1>
            <div className='flex flex-row place-content-around md:mt-32 mt-8 '>
                <div className="mt-8">
                    <div className="GSSOC_top">
                        <h2 className=' text-[#7FFFD4] font-bold text-2xl' ><img  className="rounded-xl h- w-96" src={Gssoc} alt="gssoc badges"/>GSSOC</h2>
                        <br/>
                        <h3 className='text-[#F5DEB3] font-medium text-lg'>Contributor</h3>
                    </div>
                    <div className=" text-xl text-[#F5DEB3] font-bold" >
                        <p>Participated in GSSOC and contributed <br/> over a few Open Source Projects.</p> 
                    </div>
                </div>
            

                <div className="mt-8">
                <div className="GSSOC_top">
                    <h2 className=' text-[#7FFFD4] font-bold text-2xl' ><img img className="rounded-xl h- w-96" src={Hack} alt="gssoc badges"/>GSSOC</h2>
                    <br/>
                    <h3 className='text-[#F5DEB3] font-medium text-lg'>Contributor</h3>
                </div>
                <div className=" text-xl text-[#F5DEB3] font-bold">
                    <p>Contributed to the diverse category of <br/>open source project with my skills.</p> 
                </div>
                </div>
                </div>
            <div>
            </div>
            
            

            
        
        
        
    </div>
    </div>
  );
}
