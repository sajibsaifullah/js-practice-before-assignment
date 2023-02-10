//  1 hour = 60 minute
/* function hourToMinute(hour) {
    let resultInMinute = hour * 60;
    return resultInMinute;
}
let inputHour = 2;
let result = hourToMinute(inputHour);
console.log(result); */

// leap year
function findLeapYear(array) {
  let leapYear = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element % 4 === 0 && element % 100 !== 0) {
        leapYear.push(element);
    }
  }
  return leapYear;
}
let myArray = [2023, 2024, 2025, 2028, 2030];
let leapYearResult = findLeapYear(myArray);
console.log(leapYearResult);
