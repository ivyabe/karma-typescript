describe("Getter/Setter", function() {

  beforeEach(function() {
    console.log("#beforeEach() - Starting each spec");
  });

  afterEach(function() {
    console.log("#afterEach() - End test spec");
  });

  beforeAll(function() {
    setFirstName("John");
    setLastName("Doe");
    console.log("#beforeAll() - Start executing test specs");
  });

  afterAll(function() {
    console.log("#afterAll() -All test specs are executed");
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