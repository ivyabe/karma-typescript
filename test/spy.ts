describe("Spy on numbers", function(){

  it ("callThrough - should be Two", function() {
    var num = new Numbers();
    //callThrough() to make the spy call th actual method
    spyOn(num, "nextNumber").and.callThrough();
    num.getNextNum();
    expect(num.number).toEqual("Two");
  });

  it ("returnValue - should be Three", function() {
    var num = new Numbers();
    //returnValue() to return fixed value without calling
    //the actual methods
    spyOn(num, "nextNumber").and.returnValue("Three");
    num.getNextNum();
    expect(num.nextNumber()).toEqual("Three");
  });

  it ("returnValue - should be Three", function() {
    var num = new Numbers();
    //callFake() to replace the entire spied method
    spyOn(num, "nextNumber").and.callFake(function() {
      return "Four";
    });
    num.getNextNum();
    expect(num.nextNumber()).not.toEqual("Two");
  });
});