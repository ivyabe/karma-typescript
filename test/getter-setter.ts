describe("Getter/Setter", function() {

  beforeEach(function() {
    console.log("Starting each spec");
  });

  afterEach(function() {
    console.log("End test spec");
  });

  beforeAll(function() {
    setFirstName("John");
    setLastName("Doe");
    console.log("Start executing test specs");
  });

  afterAll(function() {
    console.log("All test specs are executed");
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