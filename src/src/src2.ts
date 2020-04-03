function testzzz(a: number, b: number) : any {
  if (a > b) {
    subtract(a, b);
  } else if (a < b) {
    addNumber(a, b);
  } else {
    return "Same";
  }
};