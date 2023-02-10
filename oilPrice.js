// ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে।
// • প্রতি লিটার ডিজেলের এর দাম - 114 টাকা
// • প্রতি লিটার পেট্রোল এর দাম - 130 টাকা
// • প্রতি লিটার অকটেনের এর দাম - 135 টাকা
// এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের  অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে  হলো সেই সংখ্যা রিটার্ন করতে হবে।
// 1, 1, 1---------------379
// 30, 20, 10------------7370
// 1,0,2-----------------384
// 0,2,3-----------------665

function oilPrice(diesel, petrol, octane) {
    let dieselPriceRate = 114;
    let petrolPriceRate = 130;
    let octanePriceRate = 135;
    let totalCost = (diesel * dieselPriceRate) + (petrol * petrolPriceRate) + (octane * octanePriceRate);
    return totalCost;
}
let result = oilPrice(0, 2, 3);
console.log(result);