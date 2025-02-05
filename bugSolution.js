function foo(a, b) {
  if (a === 0) {
    return b;
  } else if (a < 0) { //add check for negative 'a' value
    return b; // handle it accordingly, return 'b' for this example
  }
  return foo(a - 1, a + b);
}