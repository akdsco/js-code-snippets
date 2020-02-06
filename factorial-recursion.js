function factorial(n) {
  if (n < 1) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
}

factorial(5); // 5! = 5 x 4 x 3 x 2 x 1 = 120