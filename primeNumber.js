function primeNumberCheck(number) {
  if (typeof number !== number && number <= 0) {
    return "Please valid data";
  } else if (number === 1) {
      return '1 is not a prime number';
  }
  let primeNumber = true;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      primeNumber = false;
    }
  }
  return primeNumber;
}
const inputNumber = 387;
const result = primeNumberCheck(inputNumber);
console.log(result);
