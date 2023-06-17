

const Timer = ({time, label}) => {
  return (
    <div className=" flex flex-col items-center gap-[1.5rem] ">
      {/* div 1  */}
      <div className=" flip-card h-[1.85em] relative inline-flex flex-col text-softRed w-full min-w-[75px] sm:min-w-[100px] md:min-w-[150px] text-[1.75rem] sm:text-[3rem] md:text-[5rem]">
        {/* sub one  */}
        <div className=" container-top relative h-[50%] bg-[#2c2c44] rounded-lg">
          {/* sub two  */}
          <div className=" relative h-full px-[.25em] pb-[0em] pt-[.425em] brightness-[83%] overflow-hidden leading-none rounded-t-[.25rem] sm:rounded-t-md text-center w-full  top">
            {time}
          </div>
          <div className="absolute text-[#fb6087] top-0 inset-x-0 h-full px-[.25em] pb-[0em] pt-[.425em] brightness-[83%] overflow-hidden leading-none rounded-t-[.25rem] sm:rounded-t-md text-center w-full  top-flip">
            {time}
          </div>
        </div>

        {/* sub one  */}
        <div className="container-bottom relative h-[50%] bg-[#34364f] rounded-lg ">
          {/* sub two  */}
          <div className="relative flex justify-center items-end h-full px-[.25em] pt-[0em] pb-[.425em] overflow-hidden leading-none rounded-b-[.25rem] sm:rounded-b-md text-center w-full bottom ">
            {time}
          </div>
          <div className="absolute text-custom_soft_red top-0 inset-x-0 flex justify-center items-end h-full px-[.25em] pt-[0em] pb-[.425em] overflow-hidden leading-none rounded-b-[.25rem] sm:rounded-b-md text-center w-full bottom ">
            {time}
          </div>
        </div>
      </div>
      <h2 className="text-custom_grayish_blue uppercase tracking-[.1rem] text-[.5rem] sm:text-[1rem]">
        {" "}
        {label}
      </h2>
    </div>
  );
}

export default Timer