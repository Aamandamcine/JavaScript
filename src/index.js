// Challenge 1
let weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
console.log(weekDays); // Output: Array of all days

// Challenge 2
console.log(weekDays[0]); // 'Monday'
console.log(weekDays[6]); // 'Sunday'

// Challenge 3
weekDays[6] = "Funday";
console.log(weekDays); // Sunday changed to Funday

// Challenge 4
weekDays.splice(0, 2); // Remove Monday and Tuesday (index 0 and 1)
console.log(weekDays); // Logs remaining days

// Challenge 5
weekDays.forEach((day) => {
  console.log(`Temperature on ${day} is 18 degrees`);
});
