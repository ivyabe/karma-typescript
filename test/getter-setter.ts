describe("Getter/Setter", function() {

  beforeEach(function() {
    setFirstName("John");
    setLastName("Doe");
  });

  it ("getFirstName()", function() {
    expect(getFirstName()).toBe("John");
  });

  it("setFirstName", function() {
    expect(setFirstName("John")).toHaveBeenCalled;
  });

  it ("getLastName()", function() {
    expect(getLastName()).toBe("Doe");
  });

  it("setLastName", function() {
    expect(setLastName("Doe")).toHaveBeenCalled;
  });

});