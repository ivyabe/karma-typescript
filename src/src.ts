function addNumber(a: number, b: number) : number {
  return a + b;
};

function subtract(a: number, b: number) : number {
  return a - b;
};

function divide(a: number, b: number) : number {
  return a / b;
};

function multiply(a: number, b: number) : number {
  return a * b;
};

function testzzz(a: number, b: number) : any {
  if (a > b) {
    subtract(a, b);
  } else if (a < b) {
    addNumber(a, b);
  } else {
    return "Same";
  }
};