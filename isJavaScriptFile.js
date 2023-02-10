// ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম(যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে ।
// 'app.js'--------------true
// 'js.png'--------------false
// 'image.js.png'--------false
// 'image.jpg.js'--------true

function isJavaScriptFile(string) {
    if (typeof string !== 'string') {
        return 'Please input valid data'
    }
    return string.endsWith('.js');
    // return console.log(string.endsWith('.js'));
}
let myString = 'image.jpg.js';
let result = isJavaScriptFile(myString);
console.log(result);
