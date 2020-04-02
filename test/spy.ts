describe("Spy on numbers", function(){

  it ("callThrough - should be Two", function() {
    var num = new Numbers();
    spyOn(num, "nextNumber").and.callThrough();
    num.getNextNum();
    expect(num.number).toEqual("Two");
  });

  it ("returnValue - should be Three", function() {
    var num = new Numbers();
    spyOn(num, "nextNumber").and.returnValue("Three");
    num.getNextNum();
    expect(num.nextNumber()).toEqual("Three");
  });
});