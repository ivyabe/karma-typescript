describe("Spy on numbers", function() {

  var num;
  beforeAll(function() {
    num = new AreNumbers();
  });

  it("Test callThrough()", function() {
    //callThrough() to make the spy call th actual method
    spyOn(num, "nextNumber").and.callThrough();
    num.getNextNum();
    expect(num.number).toEqual("Two");
  });

  it("Test returnValue()", function() {
    //returnValue() to return fixed value without calling the actual methods
    spyOn(num, "nextNumber").and.returnValue("Three");
    expect(num.nextNumber()).toEqual("Three");
  });

  it("Test callFake()", function() {
    //callFake() to replace the entire spied method
    spyOn(num, "nextNumber").and.callFake(function() {
      return "Four";
    });
    expect(num.nextNumber()).not.toEqual("Two");
  });

  it("Test toHaveBeenCalled()", function() {
    spyOn(num, "nextNumber");
    num.nextNumber();
    //toHaveBeenCalled() to verify if spied method is called
    expect(num.nextNumber).toHaveBeenCalled();
  });

  it("Test toHaveBeenCalledWith()", function() {
    spyOn(num, "getRandomNum");
    num.getRandomNum(30);
    //toHaveBeenCalled() to verify if spied method is called with correct params
    expect(num.getRandomNum).toHaveBeenCalledWith(30);
  });

  it("Test toHaveBeenCalledWith()", function() {
    expect(num.getRandomNum()).not.toBeNull;
  });

});