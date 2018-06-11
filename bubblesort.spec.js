describe('Bubble Sort', function(){
  beforeAll(function () {
    spyOn( sorter, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
  });
  it('swaps the correct number of times', function(){
    sorter.bubbleSort([4, 3, 2, 1]);
    expect(sorter.swap.calls.count()).toEqual(6);
  });
  it('handles an empty array', function(){
    expect(sorter.bubbleSort([]) ).toEqual( [] );
  });
  it('sorts an array', function(){
    expect( sorter.bubbleSort([5, 8, 2, 10, 2, 3, 8])).toEqual([2, 2, 3, 5, 8, 8, 10]);
  });
  it('sorts a pre-sorted array', function(){
    expect( sorter.bubbleSort([2, 2, 3, 5, 8, 8, 10])).toEqual([2, 2, 3, 5, 8, 8, 10]);
  });
});
