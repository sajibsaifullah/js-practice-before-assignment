/* function foo() {
    console.log('foo');
    function bar() {
        console.log('bar');
        return;
    }
    bar();
    return;
}
foo(); */


/* function make_avg(integer1, integer2, integer3){
    let sum = integer1 + integer2 + integer3;
    let avg = sum / 3;
    return avg;

}
const result = make_avg(3, 10, 20);
console.log(result); */

/* function make_avg(numbers) {
    console.log('Sixe of the array is:' , numbers.length);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
    }
    let avg = sum / numbers.length;
    return avg;
}
const myArray = [3, 10, 20];
const result = make_avg(myArray);
console.log('The average of the array is:', result); */

let color = 'red';

/* switch (color) {
    case 'red':
        console.log("DANGER: don't cross the road");
        break;
    case 'yellow':
        console.log("You should STOP");
        break;
    case 'green':
        console.log("You should CROSS the road");
        break;
    default:
        console.log('Please give a valid color');
} */

switch (color) {
    case 'red':
        color = "DANGER: don't cross the road";
        break;
    case 'yellow':
        color = "You should STOP";
        break;
    case 'green':
        color = "You should CROSS the road";
        break;
    default:
        color = 'Please give a valid color';
}
console.log(color);
