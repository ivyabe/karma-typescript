// import { StdViewManager } from "../src/proj/StdViewManager";

describe("StdViewManager class", function() {
  console.log("STARTING...");
  var svManager;
  beforeAll(function() {
    console.log("START!!!");
    svManager = new StdViewManager();
    console.log(svManager);
  });

  afterAll(function() {
    console.log("ALMOST THERE...");
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