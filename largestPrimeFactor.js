// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the given number?
//
// Examples
//
// largestPrimeFactor(2) should return 2.
// largestPrimeFactor(3) should return 3.
// largestPrimeFactor(5) should return 5.
// largestPrimeFactor(7) should return 7.
// largestPrimeFactor(13195) should return 29.
// largestPrimeFactor(600851475143) should return 6857.

function largestPrimeFactor(number, divisor = 2) {
  let square = (number) => Math.pow(number, 2);

  while ((number % divisor) !== 0 && square(divisor) <= number) {
    divisor++;
  }

  return square(divisor) <= number
    ? largestPrimeFactor(number / divisor, divisor)
    : number;
}

largestPrimeFactor(13195);