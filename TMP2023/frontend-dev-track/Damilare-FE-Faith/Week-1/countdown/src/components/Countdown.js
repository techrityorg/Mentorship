import { useEffect, useState } from "react";
import { getReminderTimer } from "../utils/helperFunction";
import Timer from "./Timer";

const initialState = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

export const Countdown = ({ future }) => {
  const [countingTimer, setCountingTimer] = useState(initialState);

  useEffect(() => {
    const invokeInterval = setInterval(() => {
      setCountingTimer(getReminderTimer(future));
    }, 1000);

    return () => clearInterval(invokeInterval);
  }, [future]);

  return (
    <>
      <div>
        <section className="text-white">
          <h1 className="uppercase text-xl text-center">
            {" "}
            We're launching soon
          </h1>
          <div className="flex p-8 gap-4 justify-around">
            <Timer time={countingTimer.days} label="Days" />
            <Timer time={countingTimer.hours} label="Hours" />
          <Timer time={countingTimer.minutes} label="Minutes" />
           <Timer time={countingTimer.seconds} label="seconds" />
          </div>
        </section>
      </div>
    </>
  );
};
