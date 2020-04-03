describe("Enums Numbers", function() {
  it ("return One", function() {
    var enumVal = checkEnum("one");
    console.log(enumVal);
    expect(enumVal).toBe("ONE");
  });

  it ("return Two", function() {
    var enumVal = checkEnum("two");
    console.log(enumVal);
    expect(enumVal).toBe("TWO");
  });

  it ("return Three", function() {
    var enumVal = checkEnum("three");
    console.log(enumVal);
    expect(enumVal).toBe("THREE");
  });

  it ("return Four", function() {
    var enumVal = checkEnum("four");
    console.log(enumVal);
    expect(enumVal).toBe("FOUR");
  });
});