function factorial(n) {
  let result = 1;

  if (n == 1 || n == 0) {
    return result;
  } else {
    let i = n;
    while (i >= 1) {
      result = result * i;
      i--;
    }
    return result;
  }
}
