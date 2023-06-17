import moment, { duration } from "moment/moment";
export const getReminderTimer = (future) => {
  const predefinedEndTime = moment(future);
  const currentTime = moment();
  const elapsTime = duration(predefinedEndTime.diff(currentTime));
  const seconds = elapsTime.seconds();
  const minutes = elapsTime.minutes();
  const hours = elapsTime.hours();
  const days = Math.floor(elapsTime.asDays());

  if (predefinedEndTime <= currentTime) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};
