describe("Array", function() {
  var array1;

  beforeEach(function() {
    arra1 = [1,2,3,4,5]
  });

  function isDiferrentThanOtherGenerated() {
    expect(arra1.shuffle()).not.toBe(arra1);

  }

  it(isDiferrentThanOtherGenerated.name, isDiferrentThanOtherGenerated);

 
});