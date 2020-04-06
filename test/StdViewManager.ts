import { StdViewManager } from "../src/proj/StdViewManager";
// const StdViewManager = require ("../src/proj/StdViewManager");

describe('startDisplay()', function() {
  
  var managr;
  beforeAll(function() {
    managr = new StdViewManager();
  });

  it ("will return default value of display when display is null", function() {
    spyOn(managr, "startDisplay").and.returnValue("Default");
    expect(managr.startDisplay()).toEqual("Default");
  });

  it ("will return the value of display", function() {
    spyOn(managr, "startDisplay").and.returnValue("Display");
    expect(managr.startDisplay()).toEqual("Display");
  });
  
});
