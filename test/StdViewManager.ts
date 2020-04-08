import { StdViewManager, Binary } from "../src/proj/StdViewManager";

describe("Binary", function() {
  it("Must equal to 0", function() {
      expect(Binary.ZERO).toEqual(0);
  });
  
  it("Must equal to 1", function() {
      expect(Binary.ONE).toEqual(1);
  });

  it("Must equal to 2", function() {
      expect(Binary.TWO).toEqual(2);
  });

  it("Must equal to 3", function() {
      expect(Binary.THREE).toEqual(3);
  });
});

describe("StdViewManager class", function() {
  var svManager;
  beforeAll(function() {
    console.log("START!!!");
    svManager = new StdViewManager();
    console.log(svManager);
  });

  afterAll(function() {
    console.log("FINISHED!!!");
  });

  it("Test startDisplay()", function() {
    spyOn(svManager, "startDisplay").and.callThrough();
    svManager.display = null;
    expect(svManager.startDisplay()).toEqual("NG");
  });

  it("Test startDisplay()", function() {
    spyOn(svManager, "startDisplay").and.callThrough();
    svManager.display = "OK"
    expect(svManager.startDisplay()).toEqual("OK");
  });

  it("Test getPageDataKindId()", function() {
    expect(svManager.getPageDataKindId()).toEqual("1");
  });
});