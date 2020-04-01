enum Numbers {
  One = "ONE",
  Two = "TWO",
  Three = "THREE",
  Four = "FOUR",
};

const n1 = Numbers.One;
const n2 = Numbers.Two;
const n3 = Numbers.Three;
const n4 = Numbers.Four;

function enumTest1() {
  console.log("one");
  return n1;
};

function enumTest2() {
  console.log("two");
  return n2;
};

function enumTest3() {
  console.log("three");
  return n3;
};

function enumTest4() {
  console.log("four");
  return n4;
};