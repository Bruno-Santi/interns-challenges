// ### 2. Convert Minutes into Seconds
// Write a function that takes an integer `minutes` and converts it to seconds.

// #### Examples
// ```
// convert(5) ➞ 300

// convert(3) ➞ 180

// convert(2) ➞ 120
// ```

const minutesIntoSeconds = (minute) => {
  const secondsValue = 60;
  console.log(minute * secondsValue);
};

minutesIntoSeconds(5);
minutesIntoSeconds(3);
minutesIntoSeconds(2);
