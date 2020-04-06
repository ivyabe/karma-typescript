import { Manager } from "../src/proj/proj-test";

describe('startDisplay()', function() {
  
  var mnger;
  beforeAll(function() {
    mnger = new Manager();
  });

  it ("will return default value of display when display is null", function() {
    spyOn(mnger, "startDisplay").and.returnValue("Default");
    expect(mnger.startDisplay()).toEqual("Default");
  });

  it ("will return the value of display", function() {
    spyOn(mnger, "startDisplay").and.returnValue("Display");
    expect(mnger.startDisplay()).toEqual("Display");
  });
  
});
