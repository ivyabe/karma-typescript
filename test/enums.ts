// import { checkEnum } from "../src/enums2";
import * as check from "../src/enums2";

describe("Enums Numbers", function() {
  it ("return One", function() {
    var enumVal = check.checkEnum("one");
    console.log(enumVal);
    expect(enumVal).toBe("ONE");
  });

  it ("return Two", function() {
    var enumVal = check.checkEnum("two");
    console.log(enumVal);
    expect(enumVal).toBe("TWO");
  });

  it ("return Three", function() {
    var enumVal = check.checkEnum("three");
    console.log(enumVal);
    expect(enumVal).toBe("THREE");
  });

  it ("return Four", function() {
    var enumVal = check.checkEnum("four");
    console.log(enumVal);
    expect(enumVal).toBe("FOUR");
  });
});