// import { StdViewManager } from "../src/proj/StdViewManager";

describe("StdViewManager class", function() {

  let svManager;
  beforeAll(function() {
    svManager = new StdViewManager();
  });

  it("Test startDisplay()", function() {
      spyOn(svManager, "startDisplay").and.returnValue("OK");
      expect(svManager.startDisplay()).toEqual("OK");
  });

  it("Test startDisplay()", function() {
      spyOn(svManager, "startDisplay").and.returnValue("NG");
      expect(svManager.startDisplay()).toEqual("NG");
  });

  it("Test getPageDataKindId()", function() {
      expect(svManager.getPageDataKindId()).toEqual("1");
  });
});

