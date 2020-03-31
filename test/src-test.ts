describe('Add, Subtract, Divide, Multiply', function() {
  
  it ("will add", function() {
    var result = addNumber(10, 5);
    expect(result).toBe(15);
  });

  it ("will subtract", function() {
    var result = subtract(10, 5);
    expect(result).toBe(5);
  });

  it ("will divide", function() {
    var result = divide(10, 5);
    expect(result).toBe(2);
  });

  it ("will multiply", function() {
    var result = multiply(10, 5);
    expect(result).toBe(50);
  });

});

describe('Random', function() {

  it('should return the correct value when two numbers are added', function() {
    var result = 1 + 1;
    expect(result).toBe(2);
  });

});

describe('Testzzz', function() {

  it('should add numbers when a > b', function() {
    testzzz(2, 5);
    expect(addNumber).toHaveBeenCalled;
  });

  it('should subtract numbers when a < b', function() {
    testzzz(5, 2);
    expect(subtract).toHaveBeenCalled;
  });

  it('should return a string when a = b', function() {
    expect(testzzz(2, 2)).toBe("Same");
  });

});
