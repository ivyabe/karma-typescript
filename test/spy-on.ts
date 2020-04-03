describe("Spy on numbers", function(){

  var num;
  beforeAll(function() {
    num = new Numbers();
  });

  it ("Test callThrough()", function() {
    //callThrough() to make the spy call th actual method
    spyOn(num, "nextNumber").and.callThrough();
    num.getNextNum();
    expect(num.number).toEqual("Two");
  });

  it ("Test returnValue()", function() {
    //returnValue() to return fixed value without calling
    //the actual methods
    spyOn(num, "nextNumber").and.returnValue("Three");
    num.getNextNum();
    expect(num.nextNumber()).toEqual("Three");
  });

  it ("Test callFake()", function() {
    //callFake() to replace the entire spied method
    spyOn(num, "nextNumber").and.callFake(function() {
      return "Four";
    });
    num.getNextNum();
    expect(num.nextNumber()).not.toEqual("Two");
  });
});