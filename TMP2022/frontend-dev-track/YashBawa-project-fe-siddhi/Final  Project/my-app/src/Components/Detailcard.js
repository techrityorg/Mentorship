import React from 'react'
const Detailcard =  (props) => {

return (
    <div >
        <div className="md:p-12 p-8 flex flex-col">
          <div className="Project_ImgCont content-center">
          <a href={props.link}> 
            <img src={props.image} className="rounded-lg h-56 md:h-80 w-auto border-8 border-sky-400"></img></a>
          </div>
          <div>
            <div>
              <h1 className='font-serif md:text-2xl text-xl font-bold text-center pt-4'>
                {props.title}
                <br />
              </h1>
            </div>
          </div>
        </div>
    </div>
  )
};
export default Detailcard ;
