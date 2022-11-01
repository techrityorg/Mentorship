export const transformInput = (str) => {
  const reduceStringToObj = str
    .split("\n") // split string into array
    .sort((a, b) => a - b) // sort array in ascending order
    .filter((el) => el.trim() !== "") // remove not empty spaces
    .reduce((acc, cur) => {
      // reduce array into obj - how many times numbered appeared
      if (acc[cur]) acc[cur] += 1;
      else acc[cur] = 1;
      return acc;
    }, {});

  const V_values = [];
  const H_values = []; // horizontal axis array

  for (let arr of Object.entries(reduceStringToObj)) {
    // console.log(arr);
    const [key, value] = arr;
    // push keys as horizontal axis
    // push values into V_values to solve its height percentage
    H_values.unshift(key);
    V_values.unshift(value);
  }

  return {
    H_axis: H_values,
    V_arr: V_values,
  };
  //
};
