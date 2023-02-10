/* • একটা ফাংশন বানাবে যেটি একটি অ্যারে অফ অবজেক্ট রিসিভ করে প্যারামিটার হিসেবে।প্রতিটি অবজেক্টে একটি মানুষের নাম  এবং বয়স থাকবে। এখন তোমার কাজ হচ্ছে এই অ্যারে থেকে সবচেয়ে ছোট যে person কে খুঁজে বের করা।
         অব্জজেক্টটি/Input দেখতে এমনঃ
[
    {name:'sakib', age:30},
    {name:'samiul', age:20},
    {name:'sahid', age:50},
    {name:'samin', age:10}
] 
*/
let persons = [
  { name: "sakib", age: 30 },
  { name: "samiul", age: 20 },
  { name: "sahid", age: 50 },
  { name: "samin", age: 10 },
];
function youngestPerson(persons) {
  let youngestMan = persons[0];
  for (let i = 0; i < persons.length; i++) {
    const person = persons[i];
    if (person.age < youngestMan.age) {
      youngestMan = person;
    }
  }
  youngestMan = youngestMan.name;
  return youngestMan;
}
const result = youngestPerson(persons);
console.log(result);
