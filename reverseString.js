/* •	তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো। 
*/
let friend1 = 'karim';
let friend2 = 'jubayer';
function longestName(friend1, friend2) {
    let lgName = '';
    // console.log(friend2);
    if (friend1.length > friend2.length) {
        lgName = friend1;
    } else {
        lgName = friend2;
    }
    lgName = lgName.split('').reverse().join('');
    return lgName;
}
const result = longestName(friend1, friend2);
console.log(result);