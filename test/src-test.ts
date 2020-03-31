describe('Calculate', function() {
  
  it ("Add", function() {
    var result = addNumber(10, 5);
    expect(result).toBe(15);
  });

  it ("Subtract", function() {
    var result = subtract(10, 5);
    expect(result).toBe(5);
  });

  it ("Divide", function() {
    var result = divide(10, 5);
    expect(result).toBe(2);
  });

  it ("Multiply", function() {
    var result = multiply(10, 5);
    expect(result).toBe(50);
  });

});