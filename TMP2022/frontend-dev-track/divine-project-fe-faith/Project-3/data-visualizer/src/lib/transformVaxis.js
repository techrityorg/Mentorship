export const transformVaxis = (arr) => {
  // plot the graphy by calculating the percentages of the line
  const max = Math.max(...arr); // max number

  // convert to percent by dividing by the max number and multiply by 100 at one decimal point to get the highest

  //chart line detail
  const chartToPercent = arr.map((el) => ({
    V: el,
    Ypercent: Number((el / max) * 100).toFixed(1),
  }));

  // vmetrics detail
  const v_metricsToPercent = v_axisMetrics(max).map((el) => ({
    V: el,
    Ypercent: Number((el / max) * 100).toFixed(1),
  }));

  return {
    chartDetail: chartToPercent,
    V_metrics: v_metricsToPercent,
  };
};

const v_axisMetrics = (num) => {
  // get the Vertical axis metrics
  // if the max is less than 10, we get the metrics by median method e.g
  // max = 8, max= 0 , (8 + 0)/2 = 4... we have our series 8 , 4, 0

  // if the max is greater than 10, we get the metrics by dividing by 3,
  //   e.g max = 24, (24 + 0)/3 == 8 , our third will be 8 + 8 == 16...
  // final series 24, 16, 8, 0
  //NB: any float number must be in whole number
  let metrics;
  if (num <= 10) {
    return (metrics = [0, parseInt(num / 2), num]);
  }

  const av_val = parseInt(num / 3);
  metrics = [0, av_val, av_val + av_val, num];
  return metrics;
};
