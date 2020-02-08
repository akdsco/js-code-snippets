// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.
// For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is
// divisible by 1, 2 and 4.
//
// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
//
// Examples:
//
// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156.

function sumPrimes(num) {
  let primeNumbers = [];
  let divisors = [];

  for(let i = 1; i < num + 1; i++) {
    for(let j = 1; j <= i; j++) {
      if(i % j === 0) {
        divisors.push(j);
      }
      if(j === i) {
        if(divisors.length === 2) {
          primeNumbers.push(i)
        }
        divisors = [];
      }
    }
  }
  return primeNumbers.reduce((a,b) => a + b)
}

sumPrimes(10);